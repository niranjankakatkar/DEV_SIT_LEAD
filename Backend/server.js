const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24
    }
}))

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'lead_generation'
})

app.get("/getalluser", (req, res) => {
    const sql = "SELECT * FROM user_master ";
    db.query(sql, (err, data) => {
        if (err){ 
             res.json("Fail to fetch");
        }
         res.send(data);
        
    })
})

app.get("/getuserdatasingle", (req, res) => {
    const sql = "SELECT * FROM user_master where token_id=?";
    db.query(sql, [ req.session.token_id], (err, data) => {
        if (data.length > 0) {
            return res.json({ 
                Fname: data[0].fname
              
             });
        } else {
            return res.json({ Login: false });
        }
        
    })
})

app.get('/session_get', (req, res) => {

    if (req.session.token_id) {

        return res.json({
            valid: true,
            token_id: req.session.token_id
        })
    } else {
        return res.json({
            valid: false
        })
    }
})

app.post('/login_auth', (req, res) => {
    const sql = "SELECT * FROM login WHERE username=? AND pass=?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) return res.json("Login Fail");
        if (data.length > 0) {
            req.session.token_id = data[0].token_id;
            console.log("from niru" + req.session.token_id);
            return res.json({ Login: true });
        } else {
            return res.json({ Login: false });
        }

    })
})

app.post('/getProfileData', (req, res) => {
    const sql = "SELECT * FROM user_master WHERE token_id=?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) return res.json("Login Fail");
        if (data.length > 0) {
            req.session.token_id = data[0].token_id;
            console.log("from niru" + req.session.token_id);
            return res.json({ Login: true });
        } else {
            return res.json({ Login: false });
        }

    })
})


app.post('/useradd',(req, res) => {
    const sql ="INSERT INTO user_master(`fname`, `mname`, `lname`, `mobile_no`, `email`, `address`, `country`, `state`, `city`, `pincode`, `dob`, `pancard`) VALUES (?)";
    const values=[
        req.body.fname,
        req.body.mname,
        req.body.lname,
        req.body.mobile_no,
        req.body.email,
        req.body.address,
        req.body.country,
        req.body.state,
        req.body.city,
        req.body.pincode,
        req.body.dob,        
        req.body.pancard
    ]
    db.query(sql, [values],(err, data) => {
        if(err) return res.json("Error");
        return res.json("ssss"+data);
    })
})

app.get("/getsingleuser/:id", (req, res) => {
    const sql = "SELECT * FROM user_master where id = ?";
    const id = req.params.id;
    db.query(sql,[id], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
        
    })
})

app.post('/useredit/:id',(req, res) => {
    const sql ="update user_master set `fname`=?, `mname`=?, `lname`=?, `mobile_no`=?, `email`=?, `address`=?, `country`=?, `state`=?, `city`=?, `pincode`=?, `dob`=?, `pancard`=? where id=?";
    const values=[
        req.body.fname,
        req.body.mname,
        req.body.lname,
        req.body.mobile_no,
        req.body.email,
        req.body.address,
        req.body.country,
        req.body.state,
        req.body.city,
        req.body.pincode,
        req.body.dob,        
        req.body.pancard
    ]
    const id= req.params.id;
    db.query(sql, [...values,id],(err, data) => {
        if(err) return res.json("Error");
        return res.json("ssss"+data);
    })
})

app.post('/userdelete/:id',(req, res) => {
    const sql ="delete from user_master where id=?";
   
    const id= req.params.id;
    db.query(sql, [id],(err, data) => {
        if(err) return res.json("Error");
        return res.json("ssss"+data);
    })
})

app.get('/', (req, res) => {
    return res.json("From Backend");
})



app.listen(8081, () => {
    console.log("Listening");
})