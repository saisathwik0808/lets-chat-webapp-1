
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyB-3sbXqZsM0DCFZRMKhi3qEq7abeglyr4",
      authDomain: "lets-chat-webapp-3e47f.firebaseapp.com",
      databaseURL: "https://lets-chat-webapp-3e47f-default-rtdb.firebaseio.com",
      projectId: "lets-chat-webapp-3e47f",
      storageBucket: "lets-chat-webapp-3e47f.appspot.com",
      messagingSenderId: "333205073723",
      appId: "1:333205073723:web:cb45960d489dcbdecb111e",
      measurementId: "G-HL6MV9T55L"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
   

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
