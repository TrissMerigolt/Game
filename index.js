const express = require('express')
const cors = require('cors');
require('./config/db');
const fs = require('fs')
const {fighter} = require("./models/fighter");

const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/users", (req, res) => {
  const database = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    res.send(database.users)
})

app.get("/api/users/:id", (req, res) => {
   const id = req.params.id
    const database = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    const user = database.users.find(user => user.id === id)
    res.send(user)
})
app.post("/api/users", (req, res) => {
    const database = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    database.users.push(req.body)
    fs.writeFileSync("database.json", JSON.stringify(database))
    res.send(database)
})
app.put("/api/users", (req, res) => {
    const routes = require('./routes/index');
    const id = req.body.id
    res.send (true)
})
app.delete('/user', (req, res) => {
    const id = req.params.id
    const database = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    res.send(true)
})

app.get("/api/fighters", (req, res) => {
    const database = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    res.send(database.fighters)
})

app.get("/api/fighters/:id", (req, res) => {
    const id = req.params.id
    const database = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    const fighter = database.fighters.find(fighters => fighters.id === id)
    res.send(fighter)
})
app.post("/api/fighter", (req, res) => {
    const {createUser} = require("./client/src/services/domainRequest/fightersRequest");
    routes(app);
    res.send("Got a POST request")
})
    app.put("/api/fighter", (req, res) => {
        const routes = require('./routes/index');
        res.send("Got a PUT request at /fighter")
    })
app.delete('/fighter', (req, res) => {
    const id = req.params.id
    const database = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    res.send(true)
})
const {} = require("./client/src/services/domainRequest/fightersRequest");
routes(app);

// const {createUser} = require("./client/src/services/domainRequest/userRequest");
// routes(app);

    app.use('/', express.static('./client/build'));

const port = 3050;
app.listen(port, () => {});

exports.app = app;
