import React, { useState, useEffect } from "react";
import "../App.css";
import Studenttable from "./Student-table";
import { Input, Select, Radio,Button } from "./Input";
import {contact,options,radio} from "../contacts";
var headingStyle = {
  textAlign: "center",
  color: "hsl(240, 97% ,27%)",
  fontWeight: "bold",
};
var isSubmit = false;

function Studentform(props) {
  const initialvalues = {fname:"",regno:"",mail:"",mbl:"",optradio:"",univ:""}
  const [formValues, setformValues] = useState(initialvalues);
  const [formErrors, setformErrors] = useState({});
  const [showTable, setshowTable] = useState([]);
  //const [isChecked, setIsChecked] = useState(true);

  //const [isSubmit, setIsSubmit] = useState(false);
 
  const Inputchange = (e) => {
    const { name, value } = e.target;
    setformValues((data) => ({
      ...data,
      [name]: value,
    }));
  };
  const radiorest = ()=>{
    const val = document.getElementsByName('optradio')
    val.forEach(value=>value.checked=false)

  }
 
  const handlereset = ()=>{
    setformValues(initialvalues)
   // setIsChecked(false)
   radiorest()
   
  }
  useEffect(() => {
    if (Object.keys(formErrors).length=== 0 && isSubmit ) {
      setshowTable((data) => [...data, formValues]);
      handlereset();
    }
  }, [formErrors]);
  const handlesubmit = (e) => {
    e.preventDefault();
    isSubmit=true
    console.log(typeof date)
    setformErrors(validate(formValues));
   // setIsSubmit(true);
  


  };
  const validate = (values) => {
    console.log("error");
    const errors = {};
    const regex = /^\S+@\S+\.\S+$/;
    if (!values.fname) {
      errors.fname = "firstname is required";
    } else if (values.fname.length < 3) {
      errors.fname = "enter a valid name";
    }
    if (!values.regno) {
      errors.regno = "regno is required";
    }
    if (!values.mail) {
      errors.mail = "mailid is required";
    } else if (!regex.test(values.mail)) {
      errors.mail = "mailid is not valid";
    }
    if (!values.mbl) {
      errors.mbl = "mobile number is required";
    } else if (values.mbl.length !== 10) {
      errors.mbl = "mobile number is required";
    }
    return errors;
  };
  return (

    // Inputchange

    <>
      <div>
        <form action="" className="was-validated" name="myForm" onSubmit={handlesubmit} >
          <h1 style={headingStyle}>REGISTRATION FORM</h1>
          {contact.map((val) => {
            return (
              <Input id={val.id} labname={val.labname} htmlFor={val.htmlFor}  className={val.className} type={val.type} placeholder={val.placeholder}  name={val.name} onChange={Inputchange} value={formValues[val.name]}  error={formErrors[val.name]}/>
           );
          })}
            <Radio  labname="GENDER" type="radio" name="optradio"  onChange={Inputchange}  value={radio}  />
            <Select style={{ marginTop: "10px" }} labname="SELECT YOUR UNIVERSITY" onChange={Inputchange} className="form-control" options={options} value={options} val={formValues.univ}  name="univ" />
            <Button type="submit" className="btn btn-primary" labname="Submit"/>
          </form>
        <Studenttable data={showTable} />
      </div>
    </>
  );
}
export default Studentform;
