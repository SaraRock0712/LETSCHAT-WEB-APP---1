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

function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}