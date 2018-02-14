const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
//const keys = require('./keys');

passport.use(
    new GoogleStrategy({
        //options for google strat

        callbackURL: '/auth/google/redirect',
        clientID: '277006327585-egqk98evf2erij05f6e4q5epc3vrjhnb.apps.googleusercontent.com',
        clientSecret: 'uTKWX86mRAlK1dUeJuqcG65n'


    },()=>{
        //passport callback function
        console.log('we hit our passport callback!!!');
    })

)
