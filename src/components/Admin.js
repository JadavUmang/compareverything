import React,{useState,useEffect} from 'react'
import './CSS/Admin.css';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweepRounded';
import { Link } from 'react-router-dom';
function Admin(props) {
    const [data, setData] = useState([]);
    const [ProductID, setProductID] = useState();
    const [pname,setPname] = useState();
    const [Qty,setQty] = useState();
    const [PA,setPA] = useState();
    const [PF,setPF] = useState();
    const [PLS,setPLS] = useState();
    const [PI,setPI] = useState();
    const [PD,setPD] = useState();
    const [PT,setPT] = useState();
    const [PC,setPC] = useState();
    const [PAL,setPAL] = useState();
    const [PFL,setPFL] = useState();
    const [PLSL,setPLSL] = useState();
    useEffect(() => {
      fetch("http://localhost:3005/product")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
    }, []);
    function EditData(){
    console.log(ProductID+"------------------------------------");
    console.log(pname+" "+Qty+" "+PA+" "+PF+" "+PLS+" "+PI+" "+PD+" "+PT+" "+PC+" "+PAL+" "+PFL+" "+PLSL+" ");
    useEffect(()=>{
      fetch(`http://localhost:3005/edit?value=${encodeURIComponent(pname,Qty,PA,PF,PLS,PI,PD,PT,PC,PAL,PFL,PLSL)}`)
        .then((res)=>res.json())
        .then((data)=> setData(data))
        .catch((err)=> console.log(err));
    },[]);
  }
  return (
    <>
        <div className='insert__btn'><Link to='/Insert' className="btn btn-outline-success btn-lg">Insert</Link></div>
        <div className='borderdiv'></div>
        <div className='Admin__root'>
      <table className={`table ${props.mode==='light'?'':'table-dark'} table-bordered`}>
      <thead className='table-dark'>
        <tr className='table__row'>
          <th>Pid</th>
          <th>Pname</th>
          <th>Quantity</th>
          <th>Price Amazon</th>
          <th>Price Flipcart</th>
          <th>Price Local Seller</th>
          <th>Product Image</th>
          <th>Product Discription</th>
          <th>Product Type</th>
          <th>Category</th>
          <th>Amazon Link</th>
          <th>Flipkart Link</th>
          <th>Local Seller Link</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody className='table__body'>
            {data.map((item, index) => (
              <tr key={index}>
                <td><input className={`form-control ${props.mode==='light'?'input__light':'input__dark'}`} type='text'onChange={(e)=>{
                  setProductID(e.target.value)
                  if(item.Pid!==ProductID){
                    setProductID(e.target.value)
                  }else{
                    setProductID(item.Pid);
                  }
                  }} placeholder={item.Pid }/></td>
                <td><input className={`form-control ${props.mode==='light'?'input__light':'input__dark'}`} type='text'onChange={(e)=>{
                  setPname(e.target.value)
                  if(item.Pname!==pname){
                    setPname(e.target.value)
                  }else{
                    setPname(item.Pname);
                  }
                  }} placeholder={item.Pname}/></td>
                <td><input className={`form-control ${props.mode==='light'?'input__light':'input__dark'}`} type='text'onChange={(e)=>{
                  setQty(e.target.value)
                  if(item.Qty!==Qty){
                    setQty(e.target.value)
                  }else{
                    setQty(item.Qty);
                  }
                  }} placeholder={item.Qty}/></td>
                <td><input className={`form-control ${props.mode==='light'?'input__light':'input__dark'}`} type='text'onChange={(e)=>{
                  setPA(e.target.value)
                  if(item.PriceAmazon!==PA){
                    setPA(e.target.value)
                  }else{
                    setPA(item.PriceAmazon);
                  }
                  }} placeholder={item.PriceAmazon}/></td>
                <td><input className={`form-control ${props.mode==='light'?'input__light':'input__dark'}`} type='text'onChange={(e)=>
                  {
                    setPF(e.target.value)
                    if(item.PriceFlipcart!==PF){
                      setPF(e.target.value)
                    }else{
                      setPF(item.PriceFlipcart);
                    }
                    }
                  } placeholder={item.PriceFlipcart}/></td>
                <td><input className={`form-control ${props.mode==='light'?'input__light':'input__dark'}`} type='text'onChange={(e)=>
                  {
                    setPLS(e.target.value)
                    if(item.PriceLS!==PLS){
                      setPLS(e.target.value)
                    }else{
                      setPLS(item.PriceLS);
                    }
                    }
                  } placeholder={item.PriceLS}/></td>
                <td><input className={`form-control ${props.mode==='light'?'input__light':'input__dark'}`} type='text'onChange={(e)=>{
                    setPI(e.target.value)
                    if(item.PImage!==PI){
                      setPI(e.target.value)
                    }else{
                      setPI(item.PImage);
                    }
                    }} placeholder={item.PImage} /></td>
                <td><input className={`form-control ${props.mode==='light'?'input__light':'input__dark'}`} type='text'onChange={(e)=>
                  {
                    setPD(e.target.value)
                    if(item.PDisc!==PD){
                      setPD(e.target.value)
                    }else{
                      setPD(item.PDisc);
                    }
                    }
                  } placeholder={item.PDisc}/></td>
                <td><input className={`form-control ${props.mode==='light'?'input__light':'input__dark'}`} type='text'onChange={(e)=>
                  {
                    setPT(e.target.value)
                    if(item.PType!==PT){
                      setPT(e.target.value)
                    }else{
                      setPD(item.PType);
                    }
                    }
                  } placeholder={item.PType}/></td>
                <td><input className={`form-control ${props.mode==='light'?'input__light':'input__dark'}`} type='text'onChange={(e)=>
                  {
                    setPC(e.target.value)
                    if(item.Category!=PC){
                      setPC(e.target.value)
                    }else{
                      setPC(item.Category);
                    }
                    }
                  } placeholder={item.Category}/></td>
                <td><input className={`form-control ${props.mode==='light'?'input__light':'input__dark'}`} type='text'onChange={(e)=>
                  {
                    setPAL(e.target.value)
                    if(item.AmazonLink!=PAL){
                      setPAL(e.target.value)
                    }else{
                      setPAL(item.AmazonLink);
                    }
                    }
                  } placeholder={item.AmazonLink}/></td>
                <td><input className={`form-control ${props.mode==='light'?'input__light':'input__dark'}`} type='text'onChange={(e)=>
                  {
                    setPFL(e.target.value)
                    if(item.FlipkartLink!=PFL){
                      setPFL(e.target.value)
                    }else{
                      setPFL(item.FlipkartLink);
                    }
                    }
                  } placeholder={item.FlipkartLink}/></td>
                <td><input className={`form-control ${props.mode==='light'?'input__light':'input__dark'}`} type='text'onChange={(e)=>
                  {
                    setPLSL(e.target.value)
                    if(item.LS!=PLSL){
                      setPLSL(e.target.value)
                    }else{
                      setPLSL(item.LS);
                    }
                    }
                  } placeholder={item.LS+" "}/></td>
                <td><button type='button' className={`btn table__buttons ${props.mode ==='light'?'table__buttons__light':'table__buttons__dark'}`}onClick={EditData}><EditNoteIcon color='success'/></button></td>
                <td><button type='button' className={`btn table__buttons ${props.mode ==='light'?'table__buttons__light':'table__buttons__dark'}`}><DeleteSweepIcon color='success'/></button></td>
              </tr>
            ))}
        </tbody>
          
       
      </table>
    </div>
    </>
  )
}

export default Admin
