const express = require('express');
const membersAPI = express.Router();
const { saveData, loadData } = require('./dataAccess');

membersAPI.get('/getAllMembers', (req, res) => {
  try {
    const data = loadData();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});


membersAPI.post('/addNewMember', (req, res) => {
  try {
    const members = loadData();
    const newMember = req.body;

    const { memberId, role, firstname, lastname } = newMember;

    if (!memberId || !role || !firstname || !lastname) {
      return res.status(400).send('All fields (memberId, role, firstname, lastname) are required');
    }

    const memberExists = members.some(member => member.memberId === memberId);
    if (memberExists) {
      return res.status(409).send(`The Member with the ID of "${memberId}" already exists, Give another ID`);
    }

    members.push(newMember);
    saveData(members);
    res.status(200).send(`New Member added succefully with the ID of "${memberId}"`);
  } catch (err) {
    res.status(500).send(err.message);
  }
});


membersAPI.put('/updateExistMember', (req, res) => {
  const data = loadData();
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

  data[memberIndex] = updatedMember;

  saveData(data);
  res.status(201).send('Member updated successfully');
});


membersAPI.delete(`/removeMember/:memberId`, (req, res) => {
  const memberId = req.params.memberId;
  let data = loadData();
  const initialLength = data.length;

  data = data.filter(member => member.memberId !== memberId);

  if (data.length === initialLength) {
    res.status(404).send('Member not found')
  }
  saveData(data);
  res.status(204).send();
});


module.exports = membersAPI;