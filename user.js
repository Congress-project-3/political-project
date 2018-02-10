// Initialize Firebase
  var config = {
    apiKey: 'AIzaSyCWy6-GZpjtMjr8_QmoUtNj6VCx0xH3IZk',
    authDomain: "https://blinkfirst-246d9.firebaseapp.com",
    databaseURL: 'https://blinkfirst-246d9.firebaseio.com',
    projectId: "blinkfirst-246d9",
    storageBucket: 'https://blinkfirst-246d9.appspot.com',
    messagingSenderId: "84669971766"
  };
  firebase.initializeApp(config);


  // var firebaseref = new Firebase("https://blinkfirst-246d9.firebaseapp.com");
  var database = firebase.database();
  var auth = firebase.auth();
  var user = firebase.auth().currentUser;
  console.log(config);

  //Collect User Email
$("#signupbutton").click(function(event){
   event.preventDefault();
emailnew = $("#emailSignup").val();
database.ref().push({ email: emailnew});
console.log(emailnew);
  });


  //User signup function
 $('#signupbutton').click(function() {

        var email = $('#emailSignup');    
              

      if(email.val()){

    firebase.auth().createUserWithEmailAndPassword(email.val(), pass.val()).then(function(user){
        console.log('everything went fine');
        console.log('user object:' + user);
        //you can save the user data here.
    }).catch(function(error) {
        console.log('there was an error');
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode + ' - ' + errorMessage);
    });
    