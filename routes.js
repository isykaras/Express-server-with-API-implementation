const express = require('express');
const createMyCustomApi = express.Router();
const fs = require('fs');




// Define routes
createMyCustomApi.get('/getAllMembers', (req, res) => {
  fs.readFile("./members_Array.json",  (err, data) => {
    if(err){
      res.status(500).send(err.message)
    }
    res.status(200).send(data.toString());
  });
});



createMyCustomApi.post('/addNewMember', (req, res) => {
  let data = fs.readFileSync("./members_Array.json"); //diavazoume to array pou exoume hdh
  let myObject = JSON.parse(data); // to knaoume js object me parsing
  let newData = req.body; // dilwnoume newData to reqbody apo postman
    myObject.push(newData); // pusharo sto yparoxn js object to body
      console.log(myObject);
    let newArray = JSON.stringify(myObject);
    fs.writeFile("./members_Array.json", newArray, err => {
      if(err) throw err;
      console.log(newArray)
    });
    res.sendStatus(200);
});

createMyCustomApi.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Update user ${userId}`);
});

createMyCustomApi.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Delete user ${userId}`);
});

module.exports = createMyCustomApi;