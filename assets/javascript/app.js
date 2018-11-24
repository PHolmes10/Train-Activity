var config = {
    apiKey: "AIzaSyDqMqZ5j5kWIZ3DuuR3TeywhuAovjOFUsg",
    authDomain: "train-activity-37ec9.firebaseapp.com",
    databaseURL: "https://train-activity-37ec9.firebaseio.com",
    projectId: "train-activity-37ec9",
    storageBucket: "train-activity-37ec9.appspot.com",
    messagingSenderId: "262727002192"
};
firebase.initializeApp(config);

var database = firebase.database();

// button for adding trains
$("#add-train-btn").on("click", function () {
    event.preventDefault();

    // Capturing the user's inputs in the text forms on the page
    var trainName = $("#train-name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var firstTrain = $("#first-train-input").val().trim();
    var frequency = $("#frequency-input").val().trim();



    var newTrain = {
        trainName: trainName,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency
    }

    database.ref().push();

    console.log(newTrain.trainName);
    console.log(newTrain.destination);
    console.log(newTrain.firstTrain);
    console.log(newTrain.frequency);
})