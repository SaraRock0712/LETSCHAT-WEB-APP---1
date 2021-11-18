const firebaseConfig = {
  apiKey: "AIzaSyB0Wna7EAQMAmYelpjsreAhFy-6Fms6OQo",
  authDomain: "letschat-web-app-4381f.firebaseapp.com",
  databaseURL: "https://letschat-web-app-4381f-default-rtdb.firebaseio.com",
  projectId: "letschat-web-app-4381f",
  storageBucket: "letschat-web-app-4381f.appspot.com",
  messagingSenderId: "144743938255",
  appId: "1:144743938255:web:57fec2e85c33d0fb2f5fba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


firebase.initializeApp(firebaseConfig);
    
user_name  = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding ROOM Name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  
console.log("Room Name -" + Room_names);
row = "<div class='room_name' id="+Room_names +" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row; 
 
  });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}