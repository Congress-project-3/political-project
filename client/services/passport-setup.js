const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
//const keys = require('./keys');

passport.use(
    new GoogleStrategy({
        //options for google strat

        
        callbackURL: '/searchvotes',
        clientID: '277006327585-jfr382jo05ms612f9cd4do7vf5h3f67b.apps.googleusercontent.com',
        clientSecret: 'MaALyUzv5gFBAuPXjpjIYYsP'


    },()=>{
        //passport callback function
        console.log('we hit our passport callback!!!');
    })

)
