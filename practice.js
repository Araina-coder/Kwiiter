const firebaseConfig = {
    apiKey: "AIzaSyBvm6nHnnAWrA6YNPun7UWlquarRKqFxvk",
    authDomain: "kwitter-197ff.firebaseapp.com",
    databaseURL: "https://kwitter-197ff-default-rtdb.firebaseio.com",
    projectId: "kwitter-197ff",
    storageBucket: "kwitter-197ff.appspot.com",
    messagingSenderId: "808556000971",
    appId: "1:808556000971:web:2fb8ff7ee0f624074d4d4e"
};
firebase.initializeApp(firebaseConfig);


function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
    document.getElementById("user_name").value = "";
    window.alert("user is added");


}
