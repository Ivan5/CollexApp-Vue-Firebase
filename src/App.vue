<template>
  <div id="app">
    <div v-for="item in items" :key="item.id">
      <img :src="imgpath(item)" alt="">
      <a :href="item.pageurl">
      <h3>{{ item.title }}</h3>
      <h4>{{ item.author }}</h4></a>
    </div>
  </div>
</template>

<script>
//Grab the number from the end of the query string.
var catid = parseInt(window.location.href.split("=").pop());

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
    //items: itemsRef
    items:itemsRef.orderByChild('categoryid').equalTo(catid)
    
  },
  methods:{
    imgpath(img){
      return "/static/images/"+img.imgname+".jpg";
    }
  }
}
</script>

<style scoped>
#app {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 120px 0 0 0;
}

#app div{
  width: 300px;
  height: 185px;
  border: solid 1px gray;
  border-radius: 2px;
  margin: 0.5em;
  box-shadow: 2px 2px 2px silver;
  position: relative;
}

#app div img{
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  z-index: 10;
}

#app div h3{
  position: absolute;
  z-index: 15;
  margin:0;
  top: 0;
  left: 8px;
  font-size: 18pt;
}
#app div h4{
  position: absolute;
  z-index: 15;
  margin:0;
  top: 24pt;
  left: 8px;
  font-size: 14pt;
}

#app div a{
  display: block;
  position: absolute;
  z-index: 20;
  background: linear-gradient(black,transparent);
  width: 100%;
  height: 100%;
  color: #fff;
  text-shadow: 1px 1px black;
}
</style>
