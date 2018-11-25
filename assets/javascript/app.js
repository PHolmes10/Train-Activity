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

    // var frequencyMinutes = moment.unix(frequency).format('m');
    // console.log(frequencyMinutes);
    var firstTrainConverted = moment(firstTrain, "HH:mm").subtract(1, "years");
    console.log(firstTrainConverted);

    var currentTime = moment();
    console.log("current time is: " + moment(currentTime).format("hh:mm"));

    var diffTime = moment().diff(moment(firstTrainConverted), "minutes");
    console.log("Difference in time: " + diffTime);

    var tRemainder = diffTime % frequency;
    console.log(tRemainder);

    var minutesUntilTrain = frequency - tRemainder;
    console.log("Minutes until train: " + minutesUntilTrain);

    var nextTrain = moment().add(minutesUntilTrain, "minutes");
    console.log("arrival time: " + moment(nextTrain).format("hh:mm a"));

    nextTrain = moment(nextTrain).format("hh:mm a");

    // var firstTrainPretty = moment.unix(firstTrain).format("HH:mm");
    // console.log(firstTrainPretty);

    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(destination),
        $("<td>").text(frequency),
        $("<td>").text(nextTrain),
        $("<td>").text(minutesUntilTrain)
    );

    $("#train-table > tbody").append(newRow);
});
