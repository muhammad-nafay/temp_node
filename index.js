const express =  require('express');
const connection = require('./mysql');  


const app =  express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.get('/', async (req, res)=>{
    try {

        res.status(200).send('OK');
        
    } catch (error) {
        res.status(500).send(error.message);        
    }
});



app.get('/employee', async (req,res) => {

    try {

        const sql = 'SELECT * FROM EmployeeDB.employee;';
        const result = await connection.execute(sql);
        res.status(200).send(result);
        
    } catch (error) {
        res.status(500).send(error.message);        
    }

});


app.get('/getusers', async (req,res) => {

    try {

        const sql = 'SELECT * FROM EmployeeDB.User;';
        console.log(sql)
        const result = await connection.execute(sql);
        res.status(200).send(result[0]);
        
    } catch (error) {
        res.status(500).send(error.message);        
    }

});


app.get('/getuser', async (req,res) => {

    try {
       // console.log(req)
        console.log(req.query.id)

        const sql =`SELECT * FROM EmployeeDB.User where id =${req.query.id}`;
        console.log(sql)
        const result = await connection.execute(sql);
        res.status(200).send(result[0]);
        
    } catch (error) {
        res.status(500).send(error.message);        
    }

});


app.get('/deleteuser/:id', async (req,res) => {

    try {

        const sql = 'DELETE FROM EmployeeDB.User where id = ?;';
        const result = await connection.execute(sql,[id]);
        res.status(200).send(result[0]);
        
    } catch (error) {
        res.status(500).send(error.message);        
    }

});


const port = 3000;
app.listen(3000, ()=>{
    console.log(`Server is listening on PORT ${port}`);
});


// app.delete('/employeeS/:id', (req,res) => {
//     mysqlConnection.query('Delete FROM EmployeeDB.employee where EmpId = ?',[req.params.id], (err, rows, fields) => {
//         if(!err) {
//             console.log(rows)
//             res.send('Deleted Successfully1')
//         } else {
//             console.log(err)
//         }
//     })
// })


































































// app.get('/employee', async (req,res) => {

//     try {
        
//         // const sql = 'SELECT * FROM EmployeeDB.employee;'
//         // let result =  await mysqlConnection.query(sql); 
//         response.status(200).send("OK");

//     } catch (error) {
//         res.status(500).send(error.message);
        
//     }   
   
// })

// // app.get('/employee/:id', (req,res) => {
// //     mysqlConnection.query('SELECT EmpID FROM EmployeeDB.employee;', (err, rows, fields) => {
// //         if(!err) {
// //             console.log(rows)
// //             res.send(rows)
// //         } else {
// //             console.log(err)
// //         }
// //     })
// // })

// // app.delete('/employeeS/:id', (req,res) => {
// //     mysqlConnection.query('Delete FROM EmployeeDB.employee where EmpId = ?',[req.params.id], (err, rows, fields) => {
// //         if(!err) {
// //             console.log(rows)
// //             res.send('Deleted Successfully1')
// //         } else {
// //             console.log(err)
// //         }
// //     })
// // })


// app.listen(3000, () => {
//     console.log("Express server is running on localhost at port no: 3000")
// });
