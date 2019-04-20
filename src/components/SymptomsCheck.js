import React, { Component } from 'react';
import { Text, TouchableOpacity, FlatList, View, Button } from 'react-native';
import { Header, Spinner }  from './common';
import Autocomplete from 'react-native-autocomplete-input';
import elasticlunr from '../libraries/elasticlunr';

const firebase = require('firebase');

if (!firebase.apps.length) { // if firebase is not loaded
  firebase.initializeApp({
  apiKey: 'AIzaSyAsoGSE6jisMEVawlpGCsmrd93gHCgOKmI',
  authDomain: 'symptoms-checker-a898b.firebaseapp.com',
  databaseURL: 'https://symptoms-checker-a898b.firebaseio.com',
  projectId: 'symptoms-checker-a898b',
  storageBucket: 'symptoms-checker-a898b.appspot.com',
  messagingSenderId: '183194827166'
  });
}

const _ = require('underscore');
require('firebase/firestore');

const db = firebase.firestore();

const index = elasticlunr(function () {
  this.addField('symptoms')
});


async function getAllSymptoms(db) {
  const docRef = db.collection('Key').doc('Auto Suggestion');
  await docRef.get().then((doc) => {  //get all symptoms for auto suggestion
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

// async function autoSuggestion(db, key) {
//   var data = [];
//   console.log('getting all symptoms')
//   await getAllSymptoms(db)
//   console.log('getting all symptoms done')
//   var query = index.search(key, {expand: true });
//   for (i = 0; i < query.length; i++){
//     data.push(query[i].doc.symptoms)
//   }
//   console.log(data);
// }

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
            await db.collection('Disease').where('Symptoms', 'array-contains', input[i])
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    // console.log(doc.id)
                    var object = doc.data()
                    object.id = doc.id
                    results.push(object)
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
  // console.log(data)
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
        // scores.push('Disease: ',key,' ' +  occurences[key]/data[i].Symptoms.length * 100)
        scores.push({
        disease: key,
        score: Math.round(occurences[key]/data[i].Symptoms.length * 100) + '%'
        })
        break;
      }
    }
    count++
  }

  return scores
}

var inputArray = ['acid reflux', 'vomiting', 'nausea', 'weight loss', 'runny nose', 'sleepiness', 'hunger', 'loss of appetite', 'dizziness', 'chest pain'];
var selected = []


class SymptomsCheck extends Component {
  state = { symptoms: [], query: '', loading: false, results: []}

  removeItem(index) {
    this.setState({
      symptoms: this.state.symptoms.filter((_, i) => i !== index)
    });
    selected = this.state.symptoms.filter((_, i) => i !== index)
    console.log(selected)
  }

async queryItems(inputArray){
    this.setState({loading: true, symptoms: []})
    const results = await countData(inputArray, db)
    this.setState({loading: false, results: results})
  }

  renderButton(){
    if (this.state.loading === true){
      return <Spinner styles={{}} />;
    }
    return(
      <Button title="Search" onPress={() => this.queryItems(this.state.symptoms, db)}></Button>
    )
  }

  renderFlatList(){
    if (!_.isEmpty(this.state.results)) {
      return (
        <FlatList
        style={styles.list}
        data={this.state.results}
        renderItem={({ item, index }) =>
        <View>
            <View style={styles.listItemCont}>
              <Text style={styles.listItem}>
               {item.disease + ":  " + item.score}
              </Text>
            </View>
            <View style={styles.hr} />
          </View>}
        keyExtractor={(item, index) => index.toString()}
        />
      )
    }
    return (
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
    )
  }

  render() {
    const query = this.state.query;
    const data = autoSuggestion(db, query)
    return (
      <View style={styles.container}>
        <Header headerText='Check Symptoms'/>
        <View style={{flex: 1}}>
          <Autocomplete
          placeholder='Enter a symptom you are having'
          autoCorrect= {false}
          autoCapitalize="none"
          containerStyle={styles.autoCompleteContainer}
          listStyle={styles.autoCompleteList}
          listContainerStyle={styles.autoCompleteListContainer}
          inputContainerStyle={styles.autoCompleteInputContainer}
          data={data}
          defaultValue={query}
          onChangeText={text => this.setState({ query: text })}

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
      <View styles={{flex: 3, paddingBottom: 20}}>
        {this.renderFlatList()}
  </View>
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
    flex: 1
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
    fontSize: 18

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
