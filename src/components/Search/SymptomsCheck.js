import React, { Component } from 'react';
import { Text, TouchableOpacity, FlatList, View, Button } from 'react-native';
import Firebase from '../Firebase';
import { Header, Spinner }  from '../common';
import { Actions } from 'react-native-router-flux';
import Autocomplete from 'react-native-autocomplete-input';
import elasticlunr from '../../libraries/elasticlunr';
import moment from '../../libraries/moment';

// const firebase = require('firebase');

var globalResults = []

// if (!firebase.apps.length) { // if firebase is not loaded
//   firebase.initializeApp({
//   apiKey: 'AIzaSyAsoGSE6jisMEVawlpGCsmrd93gHCgOKmI',
//   authDomain: 'symptoms-checker-a898b.firebaseapp.com',
//   databaseURL: 'https://symptoms-checker-a898b.firebaseio.com',
//   projectId: 'symptoms-checker-a898b',
//   storageBucket: 'symptoms-checker-a898b.appspot.com',
//   messagingSenderId: '183194827166'
//   });
// }

const _ = require('underscore');
require('firebase/firestore');

const db = Firebase.firestore();

const index = elasticlunr(function () {
  this.addField('symptoms')
});


 function getAllSymptoms(db) {
  const docRef = db.collection('Key').doc('Auto Suggestion');
   docRef.get().then((doc) => {  //get all symptoms for auto suggestion
    if (doc.exists) {
          // console.log('Document data:', doc.data());
          for (i = 0; i < doc.data().Symptoms.length; i++){
            var adoc = {
              'id': i + 1,
              'symptoms': doc.data().Symptoms[i]
            }
            index.addDoc(adoc);
          }
      } else {
          // doc.data() will be undefined in this case
          console.log('No such document!');
      }
    }).catch((error) => {
      console.log('Error getting document:', error);
    });
}

getAllSymptoms(db);


function autoSuggestion(db, key) {
  var data = [];
  var query = index.search(key, {expand: true });
  for (i = 0; i < query.length; i++){
    if (selected.includes(query[i].doc.symptoms)){
      continue;
    }
    data.push(query[i].doc.symptoms)
  }
  // console.log(data);
  return data;
}


async function query(input, db) {
   var results = []
    for (i = 0; i < input.length; i++){
            await db.collection('Disease').where('symptoms', 'array-contains', input[i])
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    // console.log(doc.id)
                    var object = doc.data()
                    object.id = doc.data().name
                    object.id2 = doc.data().id
                    results.push(object)
                    console.log(object)
                });
            })
            .catch((error) => {
                console.log('Error getting documents: ', error);
            })
    }
    return results
  }

async function countData(inputArray,db){
  tempArray = []
  occurences = []
  scores = []
  var data = await query(inputArray,db)
  globalResults = data
  console.log(data)
  data.forEach((disease) => {
    tempArray.push(disease.id)
  })
  occurences = _.countBy(tempArray)
  // console.log(occurences)
  count = 0
  for (var key in occurences){
    // console.log(occurences[key])
    for (i = 0; i < data.length; i++){
      if (data[i].id === key){
        scores.push({
        id: data[i].id2,
        disease: key,
        score: Math.round(occurences[key]/data[i].symptoms.length * 100) + '%',
        scoreInNumber: Math.round(occurences[key]/data[i].symptoms.length * 100)
      })
        break;
      }
    }
    count++
  }
  var sorted = scores.slice(0)
  sorted.sort(function(a,b) {
    // return a.scoreInNumber - b.scoreInNumber
    return b.scoreInNumber - a.scoreInNumber
  })

  return sorted
}

var selected = []

class SymptomsCheck extends Component {
  state = { symptoms: [], query: '', loading: false, results: [], selectedDisease: '', placeholder: 'Enter a symptom you are having'}

  removeItem(index) {
    this.setState({
      symptoms: this.state.symptoms.filter((_, i) => i !== index)
    });
    selected = this.state.symptoms.filter((_, i) => i !== index)
    console.log(selected)
  }

async queryItems(inputArray){
    if (_.isEmpty(this.state.symptoms)){
      this.setState({placeholder: "Please input at least one symptom"})
    }
    else {
    this.setState({loading: true, symptoms: []})
    const results = await countData(inputArray, db)
    db.collection('Users').doc(Firebase.auth().currentUser.uid).collection('historyList').add({
      time: moment()
      .format('MMMM Do YYYY - HH:mm'),
      symptoms: inputArray,
      results: results
    })
    this.setState({loading: false, results: results, placeholder: 'Search again'})
    selected = this.state.symptoms
  }
  }


  renderButton(){
    if (this.state.loading === true){
      return <Spinner styles={{}} />;
    }
    if (!_.isEmpty(this.state.results)){
      return (
        <Button title="Search again" onPress={() => {
            this.setState({results: [], placeholder: "Enter a symptom you are having"})
            selected = this.state.symptoms
          }}></Button>
      )
    }
    return(
      <Button title="Search" onPress={() => this.queryItems(this.state.symptoms, db)}></Button>
    )
  }

  renderFlatList(){
    if (!_.isEmpty(this.state.results)) {
      return (
        <View style={{height: "60%"}}>
        <FlatList
        style={styles.list}
        data={this.state.results}
        renderItem={({ item, index }) =>
        <View>
            <View style={styles.listItemCont}>
              <Text style={styles.listItem}>
               {item.disease + ":  " + item.score}
              </Text>
              <Button style={{flex: 1}} title="more info" onPress={ () => {
                  // console.log(globalResults)
                  // console.log(item)
                  // console.log(index)
                  // console.log(globalResults.find(x => x.name === item.disease))
                  // this.state.selectedDisease = globalResults.find(x => x.name === item.disease)
                  // Actions.info({disease: this.state.selectedDisease })
                  console.log(this.state.selectedDisease = globalResults.find(x => x.name === item.disease).id2)
                  Actions.info({disease:this.state.selectedDisease})
                }
              }
                   />
            </View>
            <View style={styles.hr} />
          </View>}
        keyExtractor={(item, index) => index.toString()}
        />
        </View>
      )
    }
    return (
      <View style={{height:"45%"}}>
      <FlatList
      style={styles.list}
      data={this.state.symptoms}
      renderItem={({ item, index }) =>
      <View>
          <View style={styles.listItemCont}>
            <Text style={styles.listItem}>
             {item}
            </Text>
            <Button title="X" onPress={() => this.removeItem(index)}/>
          </View>
          <View style={styles.hr} />
        </View>}
      keyExtractor={(item, index) => index.toString()}
      />
  </View>
    )
  }

  render() {
    const query = this.state.query;
    const data = autoSuggestion(db, query)
    return (
      <View style={styles.container}>
        <Header headerText='Check Symptoms'/>
        <View style={{flex: 2}}>
          <Autocomplete
          placeholder= {this.state.placeholder}
          autoCorrect= {false}
          autoCapitalize="none"
          containerStyle={styles.autoCompleteContainer}
          listStyle={styles.autoCompleteList}
          listContainerStyle={styles.autoCompleteListContainer}
          inputContainerStyle={styles.autoCompleteInputContainer}
          data={data}
          defaultValue={query}
          onChangeText={text => this.setState({ query: text, results: [], placeholder: 'Enter a symptom you are having' })}

          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => this.setState(state => {
              const symptoms = [...state.symptoms, item];
              console.log(symptoms)
              selected = symptoms;
              return {
                symptoms,
                query: ''
              }
            })}>
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      {this.renderFlatList()}
  <View style={{height:"5%"}}>
    {this.renderButton()}
  </View>
</View>
  );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: "#F5FCFF",
    padding: 1
  },
  autoCompleteContainer:{
    flex: 1,
    zIndex: 1
  },
  autoCompleteList: {
    width:"100%",
    marginLeft: 0
  },
  autoCompleteListContainer: {
    margin: 0
  },
  autoCompleteInputContainer: {
  },
  list: {
    width: "100%",
    marginTop: 0
  },
  listItem: {
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 18,
    flex: 4
  },
  hr: {
    height: 1,
    backgroundColor: "blue"
  },
  listItemCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
};


export default SymptomsCheck;
