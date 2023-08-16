import React from 'react'
import './CSS/Input.css'
function Insert(props) {
  return (
    <>
        <div className={`Input__root ${props.mode ==='light'? 'Input__root__light':'Input__root__dark'}`}>
            <h1>Insert The Following values</h1>

            <div className={`pidiv`}>
            <table>
                <tr>
                    <td>Enter Product Id:</td>
                    <td><input className="form-control d-flex me-2 inputclass" type="text" placeholder="Enter Pid" aria-label="default input example"/></td>
                </tr>
                <tr>
                <td>Enter Product Name:</td>
                    <td><input className="form-control d-flex me-2 inputclass" type="text" placeholder="Enter Pid" aria-label="default input example"/></td>
                </tr>
                <tr>
                <td>Enter Product Quantity:</td>
                    <td><input className="form-control d-flex me-2 inputclass" type="text" placeholder="Enter Pid" aria-label="default input example"/></td>
                </tr>
                <tr>
                <td>Enter Product Price of Amazon:</td>
                    <td><input className="form-control d-flex me-2 inputclass" type="text" placeholder="Enter Pid" aria-label="default input example"/></td>
                </tr>
                <tr>
                <td>Enter Product Price of Flipkart:</td>
                    <td><input className="form-control d-flex me-2 inputclass" type="text" placeholder="Enter Pid" aria-label="default input example"/></td>
                </tr>
                <tr>
                <td>Enter Product Price of Local Seller:</td>
                    <td><input className="form-control d-flex me-2 inputclass" type="text" placeholder="Enter Pid" aria-label="default input example"/></td>
                </tr>
                <tr>
                <td>Enter Product Image Link:</td>
                    <td><input className="form-control d-flex me-2 inputclass" type="text" placeholder="Enter Pid" aria-label="default input example"/></td>
                </tr>
                <tr>
                <td>Enter Product Discription:</td>
                    <td><input className="form-control d-flex me-2 inputclass" type="text" placeholder="Enter Pid" aria-label="default input example"/></td>
                </tr>
                <tr>
                <td>Enter Product Type:</td>
                    <td><input className="form-control d-flex me-2 inputclass" type="text" placeholder="Enter Pid" aria-label="default input example"/></td>
                </tr>
                <tr>
                <td>Enter Product Category:</td>
                    <td><input className="form-control d-flex me-2 inputclass" type="text" placeholder="Enter Pid" aria-label="default input example"/></td>
                </tr>
                <tr>
                <td>Enter Product Amazon Link:</td>
                    <td><input className="form-control d-flex me-2 inputclass" type="text" placeholder="Enter Pid" aria-label="default input example"/></td>
                </tr>
                <tr>
                <td>Enter Product Flipkart Link:</td>
                    <td><input className="form-control d-flex me-2 inputclass" type="text" placeholder="Enter Pid" aria-label="default input example"/></td>
                </tr>
                <tr>
                <td>Enter Product Local Seller Link:</td>
                    <td><input className="form-control d-flex me-2 inputclass" type="text" placeholder="Enter Pid" aria-label="default input example"/></td>
                </tr>
                <tr>
                <button to='/Insert' class="btn btn-outline-success btn-lg">Insert</button>
                </tr>
            </table>
            </div>
    </div>
    </>
  )
}

export default Insert
