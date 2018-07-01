<template>
  <div id="app">
    <h1>Items in Firebase</h1>
    <div v-for="item in items" :key="item.id">
      <h3>{{ item.title }}</h3>
      <h4>{{ item.author }}</h4>
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld'
import Firebase from 'firebase'
let config = {
  apiKey: "AIzaSyAWvqSSZBRtn3JQTUhJl9zxz9i_zc7uQMk",
  authDomain: "collex-6a629.firebaseapp.com",
  databaseURL: "https://collex-6a629.firebaseio.com",
  projectId: "collex-6a629",
  storageBucket: "collex-6a629.appspot.com",
  messagingSenderId: "414898349696"
}
let app = Firebase.initializeApp(config);
let db = app.database()
let itemsRef = db.ref('items');
export default {
  name: 'App',
  firebase:{
    items: itemsRef
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
