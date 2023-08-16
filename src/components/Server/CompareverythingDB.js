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
app.post('/insert', (req,res)=> {

    const pname = req.body.pname;
    const qty = req.body.qty;
    const prcamz = req.body.prcamz;
    const prcflp = req.body.prcflp;
    const prcls = req.body.prcls;
    const pimg = req.body.pimg;
    const pdisc = req.body.pdisc;
    const ptype = req.body.ptype;
    const ctgy = req.body.ctgy;
    const amzlnk = req.body.amzlnk;
    const flplnk = req.body.flplnk;

    db.query("INSERT INTO product (Pname, Qty,PriceAmazon,PriceFlipkart,PriceLS,PImage,PDisc,PType,Category,AmazonLink,FlipkartLink) VALUES (?,?,?,?,?,?,?,?,?,?,?)",[pname,qty,prcamz,prcflp,prcls,pimg,pdisc,ptype,ctgy,amzlnk,flplnk], (err,res)=>{
       if(err)return res.json(err); 
       return res.json(data);
    });   
});
app.post('/edit',(req,res)=>{

    const pid = req.params.pid;
    const pname = req.body.pname;
    const qty = req.body.qty;
    const prcamz = req.body.prcamz;
    const prcflp = req.body.prcflp;
    const prcls = req.body.prcls;
    const pimg = req.body.pimg;
    const pdisc = req.body.pdisc;
    const ptype = req.body.ptype;
    const ctgy = req.body.ctgy;
    const amzlnk = req.body.amzlnk;
    const flplnk = req.body.flplnk;
    db.query("UPDATE product SET Pname = ?, Qty=?, PriceAmazon=?, PriceFlipkart=?,PriceLS=?,PImage=?,PDisc=?,PType=?,Category=?,AmazonLink=?,FlipkartLink=? WHERE Pid = '"+{pid}+"'",[pname,qty,prcamz,prcflp,prcls,pimg,pdisc,ptype,ctgy,amzlnk,flplnk], (err,res)=>{
        if(err)return res.json(err); 
       return res.json(data);
        });    
    });
app.listen(3005,()=>{
    console.log("listening");
})