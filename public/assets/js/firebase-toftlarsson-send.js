
var database;
var ref;
var submitForm;


// Initialize Firebase
var config = {
      apiKey: "AIzaSyBYqaJoJVA3kJfL3JkAZYNXZ_JdnJGq3-g",
      authDomain: "toftlarsson-dev.firebaseapp.com",
      databaseURL: "https://toftlarsson-dev.firebaseio.com",
      projectId: "toftlarsson-dev",
      storageBucket: "toftlarsson-dev.appspot.com",
      messagingSenderId: "849793705260"
};
firebase.initializeApp(config);

database = firebase.database();

submitForm = document.getElementById('contactForm');

submitForm.onsubmit = function(e) {
      e.preventDefault();

      var dataMessage = {
        navn: submitForm.name.value,
        email: submitForm.email.value,
        mobilnr: submitForm.mobilnr.value,
        subject: submitForm.subject.value,
        message: submitForm.message.value
      };

      ref = database.ref('kontaktFormen');
      ref.push(dataMessage);
      submitForm.reset(); // Reset Form after the data is send
};
