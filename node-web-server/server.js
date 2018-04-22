const  express  = require('Express');
const  app = express();
app.get('/',(req,res) => {
    res.send('Hello world welcome to Expess Framework');



});
app.get('/about',(req,res) => {
    res.send('about page');
});
app.get('/json',(req, res)=> {
   res.send({
       name: "Abhilash",
       lastname: "Rainchu",
       likes: ['eating','raoming']
   })
});

app.get('/bad',(req, res)=> {
   res.send({
       errorMessage: " page 404 not found"

   });
});
app.listen(3000);