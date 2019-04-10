import React, { Component } from 'react';
import { View } from 'react-native';
import elasticlunr from './libraries/elasticlunr';
import Button from './components/common/Button';

const firebase = require('firebase');
require('firebase/firestore')
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
var db = firebase.firestore();

const _ = require('underscore');
require('firebase/firestore');

var inputArray = ['acid reflux', 'vomiting', 'nausea', 'weight loss', 'runny nose', 'sleepiness', 'hunger', 'loss of appetite', 'dizziness', 'chest pain'];

var index = elasticlunr(function () {
  this.addField('symptoms')
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function timeOut(ms) {
  await sleep(ms);
}



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


async function autoSuggestion(db, key) {
  console.log('getting all symptoms')
  await getAllSymptoms(db)
  console.log('getting all symptoms done')
  return index.search(key, {expand: true });
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

// async function testFunction(inputArray, db, key){
//   const results = [one, two] = await Promise.all([countData(inputArray,db), autoSuggestion(db, key)])
//   return results
// }
//
// var alll = testFunction(inputArray, db, 'cough')
// console.log(alll)

const result = countData(inputArray, db)
console.log(result)

const searchResult = autoSuggestion(db, 'cough')
console.log(searchResult)



class App extends Component {
  componentWillMount() {
  }


  render() {
    return null
}

}


export default App;
