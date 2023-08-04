const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app =  express()
app.use(cors())

const db = mysql.createConnection({
    host : "localhost",
    user : 'root',
    password : '',
    database: 'compareverything'
})

app.get('/',(re,res)=>{
    return res.json("Form Backend Side");
})
 
app.get('/product',(req,res)=>{
    const sql="select * from product";
    db.query(sql,(err,data)=>{
          if(err) return res.json(err);
          return res.json(data);
    })
})
app.get('/login',(req,res)=>{
    const sql="select * from admin";
    db.query(sql,(err,data)=>{
          if(err) return res.json(err);
          return res.json(data);
    })
})
app.get('/moreindi',(req,res)=>{
    const {value} =req.query;
    const sql=`select * from product WHERE Pid != '%${value}%' `
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});
app.get('/searchres',(req,res)=>{
    const {value} = req.query;
    const sql=`select * from product  WHERE  PDisc LIKE '%${value}%'`
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});
app.get('/mobile',(req,res)=>{
    const sql=`select * from product WHERE Category LIKE '%${'Mobile'}%'`;
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});
app.get('/electronics',(req,res)=>{
    const sql=`select * from product WHERE Category LIKE '%${'Electronics'}%'`;
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});
app.get('/fashion',(req,res)=>{
    const sql=`select * from product WHERE Category LIKE '%${'Fashion'}%'`;
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});
app.get('/homeappliances',(req,res)=>{
    const sql=`select * from product WHERE Category LIKE '%${'HA'}%'`;
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});
app.get('/beauty',(req,res)=>{
    const sql=`select * from product WHERE Category LIKE '%${'Beauty'}%'`;
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});
app.get('/furniture',(req,res)=>{
    const sql=`select * from product WHERE Category LIKE '%${'Furniture'}%'`;
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});
app.get('/books',(req,res)=>{
    const sql=`select * from product WHERE Category LIKE '%${'Books'}%'`;
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});
app.listen(3005,()=>{
    console.log("listening");
})