const express = require('express');
const membersAPI = express.Router();
const fs = require('fs');

let data = require('./members_Array.json');

const saveData = (data) => {
  fs.writeFileSync('members_Array.json', JSON.stringify(data, null, 2));
};


// Define routes
membersAPI.get('/getAllMembers', (req, res) => {
  fs.readFile("./members_Array.json", (err, data) => {
    if (err) {
      res.status(500).send(err.message)
    }
    res.status(200).send(data.toString());
  });
});



membersAPI.post('/addNewMember', (req, res) => {
  let data = fs.readFileSync("./members_Array.json"); // Reading the existing data
  let myObject = JSON.parse(data); // Parsing the data to js obj
  let newData = req.body; // required body from postman
  const { memberId, role, firstname, lastname } = req.body;
  if (!memberId || !role || !firstname || !lastname) {
    return res.status(400).send('All fields (memberId, role, firstname, lastname) are required');
  }
  myObject.push(newData); //pushing body into data
  let newArray = JSON.stringify(myObject);
  fs.writeFile("./members_Array.json", newArray, err => {
    if (err) throw err;
  });
  res.sendStatus(200);
});


membersAPI.put('/updateExistMember', (req, res) => {
  const { memberId, role, firstname, lastname } = req.body
  if (!memberId) {
    return res.status(400).send('Member ID is required');
  }
  const memberIndex = data.findIndex(member => member.memberId === memberId);
  if (memberId === -1) {
    return res.status(404).send("Member not found");
  }
  const updatedMember = {
    memberId,
    role: role,
    firstname: firstname,
    lastname: lastname
  };

  data[memberIndex] = updatedMember


  saveData(data)
  res.status(201).send('Member updated successfully');
});


membersAPI.delete(`/removeMember/:memberId`, (req, res) => {
  const memberId = req.params.memberId;
  const initialLength = data.length; // store initial length of our data

  data = data.filter(member => member.memberId !== memberId); // filtrarisma , create new array without the deleted one.


  if (data.length === initialLength) {
    res.status(404).send('Member not found')
  }
  saveData(data);
  res.status(204).send();
});



module.exports = membersAPI;