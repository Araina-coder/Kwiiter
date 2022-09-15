var firebaseConfig = {
    apiKey: "AIzaSyBvm6nHnnAWrA6YNPun7UWlquarRKqFxvk",
    authDomain: "kwitter-197ff.firebaseapp.com",
    databaseURL: "https://kwitter-197ff-default-rtdb.firebaseio.com",
    projectId: "kwitter-197ff",
    storageBucket: "kwitter-197ff.appspot.com",
    messagingSenderId: "808556000971",
    appId: "1:808556000971:web:2fb8ff7ee0f624074d4d4e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");


function send() {
    msg = document.getElementById("msg").value;
    firebase.datebase().ref(room_name).push({
        name: user_name,
        messege: msg,
        like: 0
    });
    document.getElementById("msg").value = "";

}



function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                console.log(firebase_message_id);
                console.log(message_data);
                name = messege_data["name"];
                messege = messege_data["messege"];
                like = messege_data["like"];
                name_width_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'> </h4>";
                messege_width_tag = "<h4 class='messege_h4'>" + messege + "</h4>";
                likebutton = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + "onclick='updatelike(this.id)'>";
                span_width_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:+" + like + "</span> </button> <hr>";
                row = name_width_tag + messege_width_tag + likebutton + span_width_tag;
                document.getElementById("output").innerHTML += row += ;





                //End code
            }
        });
    });
}
getData();

function updatelike(messege_id) {
    console.log("clicked on liked button-" + messege_id);
    buttonid = messege_id;
    likes = document.getElementById(buttonid).value;
    updatedlike = Number(likes) + 1;
    firebase.database().ref(room_name).child(messege_id).update({
        like: updatedlike
    });
}
