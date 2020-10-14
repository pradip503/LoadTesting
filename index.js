const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/intense', (req, res) => {

  res.send('Hello Intense!');
  
});

const port = process.env.PORT|| 4500;
app.listen(port, (error) => {
    if(error){
        console.log(error);
    } else {
    console.log('Example app listening on port 4500!');
    }
});
