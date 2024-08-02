// const express = require('express');
// const createMyCustomApi = express.Router();
// const fs = require('fs');




// // Define routes
// createMyCustomApi.get('/getAllMembers', (req, res) => {
//   fs.readFile("./members_Array.json",  (err, data) => {
//     if(err){
//       res.status(500).send(err.message)
//     }
//     res.status(200).send(data.toString());
//   });
// });



// createMyCustomApi.post('/addNewMember', (req, res) => {
//   let data = fs.readFileSync("./members_Array.json"); //diavazoume to array pou exoume hdh
//   let myObject = JSON.parse(data); // to knaoume js object me parsing
//   let newData = req.body; // dilwnoume newData to reqbody apo postman
//     myObject.push(newData); // pusharo sto yparoxn js object to body
//       console.log(myObject);
//     let newArray = JSON.stringify(myObject);
//     fs.writeFile("./members_Array.json", newArray, err => {
//       if(err) throw err;
//       console.log(newArray)
//     });
//     res.sendStatus(200);
// });


// createMyCustomApi.put('/updateExistMember', (req, res) => {
//   const {memberId, role , firstname, lastname} = req.body
//   if(!memberId) {
//     return res.status(400).send('Member ID is required');
//   }
//   const memberIndex = data.findIndex(member => member.memberId === memberId);
//   if (memberId === -1) {
//     return res.status(404).send("Member not found");
//   }
//   const updatedMember = {
//     memberId,
//     role : role,
//     firstname : firstname ,
//     lastname : lastname
//   };

//   data[memberIndex] = updatedMember


//   saveData(data)
//   res.status(201).send('Member updated successfully');
// });



// let data = require('./members_Array.json'); // swsto datapath


// const saveData = (data) => {
//   fs.writeFileSync('members_Array.json', JSON.stringify(data, null, 2)); // gia na grapsoume sto json arxeio
// };

// createMyCustomApi.delete(`/removeMember/:memberId`, (req, res) => {
//     const memberId = req.params.memberId;       
//     const initialLength = data.length; // store initial length of our data


//     data = data.filter(member => member.memberId !== memberId); // filtrarisma , create new array , xwris to member pou diagrafoume


//     if(data.length < initialLength) {  // check ama mikrine to length diladi an diagraftike daga kai save
//       saveData(data);
//       res.status(204).send();
//     }else {
//       res.status(404).send('Member not found')
//     }

// });



// module.exports = createMyCustomApi;