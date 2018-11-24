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

    database.ref().push(newTrain);

    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#first-train-input").val("");
    $("#frequency-input").val("");

});

database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());

    var trainName = childSnapshot.val().trainName;
    var destination = childSnapshot.val().destination;
    var firstTrain = childSnapshot.val().firstTrain;
    var frequency = childSnapshot.val().frequency;

    console.log(trainName);
    console.log(destination);
    console.log(firstTrain);
    console.log(frequency);


    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(destination),
        $("<td>").text(firstTrain),
        $("<td>").text(frequency),
    );

    $("#train-table > tbody").append(newRow);
});