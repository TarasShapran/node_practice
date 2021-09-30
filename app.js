const fs = require('fs');
const path = require("path");

const manOlder20 = path.join(__dirname, 'files', 'manOlder20')
const manYounger20 = path.join(__dirname, 'files', 'manYounger20')
const womanOlder20 = path.join(__dirname, 'files', 'womanOlder20')
const womanYounger20 = path.join(__dirname, 'files', 'womanYounger20')

/*fs.mkdir(manOlder20, {recursive: true}, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    fs.mkdir(manYounger20, {recursive: true}, (err1) => {
        if (err1) {
            console.log(err1);
            return;
        }
        fs.mkdir(womanOlder20, {recursive: true}, (err2) => {
            if (err2) {
                console.log(err2);
                return;
            }
            fs.mkdir(womanYounger20, {recursive: true}, (err3) => {
                if (err3) {
                    console.log(err3);
                    return;
                }
            });
        });
    });
});*/

const users = [
    {name: 'vika', gender: 'female', age: 19},
    {name: 'oksana', gender: 'female', age: 18},
    {name: 'valya', gender: 'female', age: 21},
    {name: 'nastya', gender: 'female', age: 22},
    {name: 'olena', gender: 'female', age: 23},
    {name: 'taras', gender: 'male', age: 20},
    {name: 'max', gender: 'male', age: 19},
    {name: 'vitya', gender: 'male', age: 18},
    {name: 'roman', gender: 'male', age: 21},
    {name: 'stepan', gender: 'male', age: 22},
];

const writePerson = (pathDir, value) => {
    fs.writeFile(path.join(pathDir, `${value.name}.json`), JSON.stringify(value), (err) => {
        if (err) {
            console.log(err);
            return;
        }
    });
};

users.forEach(value => {
    if (value.age >= 20 && value.gender === 'male') {
        writePerson(manOlder20, value);
        return;
    }

    if (value.age < 20 && value.gender === 'male') {
        writePerson(manYounger20, value);
        return;
    }

    if (value.age >= 20 && value.gender === 'female') {
        writePerson(womanOlder20, value);
        return;
    }

    writePerson(womanYounger20, value);
});










