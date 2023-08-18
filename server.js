const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
const app = express();
const port = 8080;


app.use(cookieSession({
   name : 'google-auth-session',
   keys : ['key1', 'key2']
}))

app.use(passport.initialize());
app.use(passport.session());


app.get('/', function(req, res) {
    return res.json({
        message: 'You are not logged in, Please login'
    })
});


app.get('/failed', function(req, res) {
   return res.send(failed);
})

app.get('/success', function(req, res) {
    return res.send(`Welcome to ${req.user.email}`);
})


app.get('/google/', 
    passport.authenticate('google',{
      scope:['email', 'profile']
    }
))

app.get('/google/callback', 
    passport.authenticate('google',{
        failureRedirect: '/failed'
    }),
    function(req, res) {
        res.redirect('/success');
    }
)



app.listen(port, function(err){
    if(err){
        console.log('Error while running the server', err);
        return;
    }
    console.log(`Server is running on the port : ${port}`);
})