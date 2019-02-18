const express = require('express');
const hbs = require('hbs');
const port= process.env.PORT || 3000;

var app = express();
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');

//Middle-ware
// app.use((req, res, next)=>{
//     var now= new Date().toString();
//     console.log(`${now}: ${req.method} ${req.url}`)
//     next();
// });
// app.use((req, res)=>{
//     res.render('maintenance.hbs' , {
//         pageTitle: 'Maintenance Page',
//         welcomeMessage: 'WE ARE Upgrading a little . Come back Soon. Bye'        
//     });
// })

hbs.registerHelper('getYear',()=>{
    return new Date().getFullYear()
})
hbs.registerHelper('screamIt',(text)=>{
    return text.toUpperCase();
})

app.get('/',(req, res)=>{
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to my first hbs page'        
    });
});

app.get('/about',(req, res)=>{
    res.render('about.hbs', {
        pageTitle: 'About Page',
        welcomeMessage: 'This is about hbs'
    });
});
app.get('/project',(req, res)=>{
    res.render('project.hbs', {
        pageTitle: 'All Project Page',
        welcomeMessage: '\n Here is the updated list .See down:'
    });
});


app.listen(port,()=>{
    console.log(`Server running at ${port}`);
});