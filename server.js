//create a express server(importing node module)
const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const mongoose=require('mongoose');
//database connection
const url = 'mongodb://localhost/sushan-pizza';
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Database connected...');
    })
    .catch(err => {
        console.log('Connection failed...', err);
    });

//incase the port is not defined in the environment variable, then use 3000
const PORT =process.env.PORT || 3000;
//creating routes
// now we want out templates to be rendered instead of getting text "Hello from server",so here we are using ejs

// app.get('/',(req,res)=>{
//     res.send('Hello from server');
// })

//Assets-when given app.css file link in home.ejs file the css file was not rendered as it always renders html file
//so we need to tell express to serve static files
//error in browser console-Mime type is not set for the file
app.use(express.static('public'));


//setting up ejs(template engine).......
//telling express to use express-ejs-layouts as our layout engine
app.use(expressLayouts);
//telling express where are our views(template files) which is inside resources/views folder
app.set('views',path.join(__dirname,'resources/views'));
//telling express to use ejs as our template engine
app.set('view engine','ejs');

//since we have already told that views is present in resourse folder through app.use('views',path.join(__dirname,'resources/views'));
//so we can directly render the home.ejs file
require('./routes/web')(app)
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})