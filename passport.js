const passport = require('passport');
const GoogleStrategy = require('passport-google-strategy').Strategy;


passport.serializeUser(function(user, done){
    return done(null, user);
});

passport.deserializeUser(function(user, done){
    return done(null, user);
});


passport.use(new GoogleStrategy({
    clientID:"449724975312-rg4063ah4fbnto0jp2vmk3fchptp3797.apps.googleusercontent.com",
    clientSecret:"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",
    callbackURL: "http://localhost:8080/users/auth/google/callback",
    passReqToCallback   : true
},
function(request, accessToken, refreshToken, profile, done){
    return done(null, profile);
}
));
// module.exports = passport;