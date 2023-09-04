// MySQL Node help source:
//   https://www.simplilearn.com/tutorials/nodejs-tutorial/nodejs-mysql
// Asynchronous JS help source:
//   https://code.tutsplus.com/managing-the-asynchronous-nature-of-nodejs--net-36183t

const Q = require('q');
const nocache = require('nocache');
const mysql = require('mysql');
const express = require('express');
const httpPort = 8080;
const dbName = 'nodemysql';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    port: 3306,
    //database: `${dbName}`,
});

// database connection
Q.ninvoke(db, 'connect')
.then(() => {
    console.log('MySQL Connected.');
})
.catch((err) => {
    res.send(err);
    console.log(err);
})
.done();

const app = express();
app.use(nocache());

// how to use the app
app.get('/', (req, res) => {
    res.send(`
        <p><b>Express-MySQL example</b></p>
        <p>Try it out with:</p>
        <ol>
        <li>Create Database at /create-db</li>
        <li>Create Employee Table at /create-table</li>
        <li>Insert Employee at /insert-employee</li>
        <li>Update Employee at /update-employee/{id}?name={name}&designation={designation}</li>
        <li>Delete Employee at /delete-employee/{id}</li>
        <li>Show Employee(s) at /show-employees</li>
        <li>Drop Database at /drop-db</li>
        </ol>
    `);
});

// create the database (if it doesn't exist) and use it
app.get('/create-db', (req, res) => {
    let sqlCreateDB = `CREATE DATABASE ${dbName}`;
    let sqlUseDB = `USE ${dbName}`;
    // start by trying to create the database
    Q.ninvoke(db, 'query', sqlCreateDB)
    .then(() => {
        console.log(`Database ${dbName} created.`);
        console.log("Next will try using it.");
        return Q.ninvoke(db, 'query', sqlUseDB);
    })
    .then(() => {
        console.log("Now using the database.");
        res.send("Database created successfully.");
    })
    .catch((err) => {
        // database already exists so just use it
        if (err.code == 'ER_DB_CREATE_EXISTS') {
            console.log(`Database ${dbName} already exists.`);
            console.log("Next will try using it.");
            Q.ninvoke(db, 'query', sqlUseDB)
            .then(() => {
                console.log("Now using the database.");
                res.send("Database already exists.");
            })
            .catch((err) => {
                res.send(err);
                console.log(err);
            })
            .done();
        } else {
            res.send(err);
            console.log(err);
        }
    })
    .done();
});

// create the employee table -- assumes the database is selected
app.get('/create-table', (req, res) => {
    let sqlCreateTable = "CREATE TABLE employee(id int AUTO_INCREMENT, " +
        "name VARCHAR(255), designation VARCHAR(255), PRIMARY KEY(id))";
    // start trying to create the table
    Q.ninvoke(db, 'query', sqlCreateTable)
    .then(() => {
        console.log("Employee table created.");
        res.send("Employee table created successfully.");
    })
    .catch((err) => {
        if (err.code == 'ER_TABLE_EXISTS_ERROR') {
            let resMessage = "The Employee table already exists.";
            console.log(resMessage);
            res.send(resMessage);
        } else {
            res.send(err);
            console.log(err);
        }
    })
    .done();
});

// insert an employee
app.get('/insert-employee', (req, res) => {
    let data = { name: "Jake Smith", designation: "Chief Executive Officer" };
    let sqlInsertRow = "INSERT INTO employee SET ?";
    // start trying to insert the record
    Q.ninvoke(db, 'query', sqlInsertRow, data)
    .then((query) => {
        console.log("Employee inserted.");
        res.send("Employee inserted successfully.");
    })
    .catch((err) => {
        res.send(err);
        console.log(err);
    })
    .done();
});

// update an employee
app.get('/update-employee/:id', (req, res) => {
    // always sanitize your inputs!
    let data = { name: req.query.name, designation: req.query.designation };
    let where = { id: req.params.id };
    let sqlUpdateRow = "UPDATE employee SET ? WHERE ?";
    // start trying to update the record
    Q.ninvoke(db, 'query', sqlUpdateRow, [ data, where ])
    .then((query) => {
        console.log("Employee updated.");
        console.log(data, where);
        res.send("The employee was updated successfully.");
    })
    .catch((err) => {
        res.send(err);
        console.log(err);
    })
    .done();
});

// delete an employee
app.get('/delete-employee/:id', (req, res) => {
    // always sanitize your inputs!
    let where = { id: req.params.id };
    let sqlDeleteRow = "DELETE FROM employee WHERE ?";
    // start trying to delete the record
    Q.ninvoke(db, 'query', sqlDeleteRow, where)
    .then((query) => {
        console.log("Employee deleted.");
        console.log(where);
        res.send("The employee was deleted successfully.");
    })
    .catch((err) => {
        res.send(err);
        console.log(err);
    })
    .done();
});

// show employees
app.get('/show-employees', (req, res) => {
    let sqlSelect = "SELECT * FROM employee ORDER BY id";
    // start trying to get the records
    Q.ninvoke(db, 'query', sqlSelect)
    .then((query) => {
        // show the records
        let resMessage = "";
        let recordCount = query[0].length;
        // build response message for records
        if (recordCount > 0) {
            console.log("Showing employee records.");
            resMessage += "<p>Showing employee records.</p>";
            for (var i = 0; i < recordCount; i++) {
                resMessage += JSON.stringify(query[0][i]) + "<br/>";
                console.log(query[0][i]);
            }
        } else {
            resMessage = "No employees in the table.";
        }
        res.send(resMessage);
    })
    .catch((err) => {
        res.send(err);
        console.log(err);
    })
    .done();
});

// drop the database
app.get('/drop-db', (req, res) => {
    let sqlDropDB = `DROP DATABASE ${dbName}`;
    // start trying to drop the database
    Q.ninvoke(db, 'query', sqlDropDB)
    .then(() => {
        console.log(`Database ${dbName} has been dropped.`);
        res.send("Database dropped successfully.");
    })
    .catch((err) => {
        if (err.code == 'ER_DB_DROP_EXISTS') {
            let resMessage = `Database ${dbName} doesn't exist. Already dropped.`;
            console.log(resMessage);
            res.send(resMessage);
        } else {
            res.send(err);
            console.log(err);
        }
    })
    .done();
});

app.listen(httpPort, () => {
    console.log(`App listening on http port ${httpPort}`);
});