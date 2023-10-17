import express from "express"
import mysql from "mysql"
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"studenthub",
})

con.connect(function(err) {
    if(err) { 
        console.log("Error in Connection");
        console.log(err);
    } else {
        console.log("SQL server Connected");
    }
})
app.listen(8081, ()=> {
    console.log("Running");
})



app.get('/getcourses',(req,res)=>{
  const sql="SELECT * FROM courses";
  con.query(sql,(err,result)=>{
      if(err) return res,json({Error:"Got an error in the sql"});
      return res.json({Status:"Success",Result:result})

  })
})


app.delete('/deletecourse/:id',(req,res)=>{
    const id = req.params.id;
    const sql='DELETE FROM courses WHERE id = ?';
    con.query(sql, [id], (err, result) => {
        if(err) return res.json({Error: "delete course error in sql"});
        return res.json({Status: "Success"})
    })
})


app.put('/updatecourse/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
  
    let sql = 'UPDATE courses SET ? WHERE id = ?';
  
    // Remove id from updatedData
    delete updatedData.id;
  
    con.query(sql, [updatedData, id], (err, result) => {
      if (err) {
        console.error('Error updating course details', err);
        return res.json({ Status: 'Error' });
      }
      return res.json({ Status: 'Success' });
    });
  });


  app.get('/getcourses/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM courses WHERE id = ?';
    con.query(sql, [id], (err, result) => {
      if (err) {
        return res.json({ Error: "get course error in SQL" });
      }
      if (result.length === 0) {
        return res.json({ Error: "Course not found" });
      }
      // Send the course data in the response
      return res.json({ Status: "Success", Result: result });
    });
  });
  