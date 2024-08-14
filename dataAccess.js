const fs = require('fs');

const saveData = (data) => {
    fs.writeFileSync('members_Array.json', JSON.stringify(data, null, 2));
};


const loadData = () => {
    const rawData = fs.readFileSync('./members_Array.json');
    return JSON.parse(rawData);
};

module.exports = { saveData, loadData };