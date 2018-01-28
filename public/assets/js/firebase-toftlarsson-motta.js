




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
    ref = database.ref('kontaktFormen');
    ref.on('value', gotData, errData);


function gotData(data) {
      // console.log(data.val());
      var kontaktFormen = data.val();
      var keys = Object.keys(kontaktFormen);
      console.log(keys);
      for (var i = 0; i < keys.length; i++){
        var k = keys[i];
        var email = kontaktFormen[k].email;
        var message = kontaktFormen[k].message;
        var mobilnr = kontaktFormen[k].mobilnr;
        var navn = kontaktFormen[k].navn;
        var subject = kontaktFormen[k].subject;

        console.log(email, message, mobilnr, navn, subject);

      }

}

function errData(err) {
      console.log('Error ' + err);
}
