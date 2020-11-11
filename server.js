// 1.Require express
const express = require("express");
// 2.
const app = express();
// 3.
const  PORT = process.env.PORT || 8080;

//5. middleware to parse incoming body
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// view routes
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"));
});

// api routes
app.get("/api/config", (req,res) => {
    res.json({
        success: true,
    });
});

const donuts = [
    {
        name: "glazed",
        price: "$0.99"
    },
    {
        name: "Cereal Killer",
        price: "$3.99"
    },
    {
        name:"Lemon Filled",
        price: "$1.99"

    },
];

app.get("/api/donuts", (req,res) => {
    res.json(donuts);
})

app.get("/api/donuts/:name", (req,res) => {
    for (let i = 0; i< donuts.length; i++){
        if (donuts[i].name === req.params.name) {
            return res.json(donuts[i]);
        }
    }
});

app.post("/api/donuts", (req,res) => {
    donuts.push(req.body);
    res.json(donuts);
})

// 4.
app.listen (PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});

