const express = require('express');
//db file in on gitignore
const connection = require('./../../helpers/db');
const router = express.Router();



router.post('/signup', function(req, res, next) {
   const insertValues = `INSERT INTO users (email, password, name, lastname) VALUES (?,?,?,?)`;
   const userValue = req.body;
   console.log("userValue",userValue);
   connection.query(insertValues,[userValue.email, userValue.password, userValue.name, userValue.lastname], (error, results, fields) => {       
  
    if(error) res.status(500).end();
      res.send('User added!'); 
    
   })
});

module.exports = router;