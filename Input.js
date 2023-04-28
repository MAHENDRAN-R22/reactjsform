//import React from "react";
function Input(props) {
  return (
    <>
      <div className="row">
      <div className="col-sm-9">
      <label htmlFor={props.for} className="form-label">
        {props.labname}
      </label>
      <input
        className={props.className}
        type={props.type}
        placeholder={props.placeholder}
        name={props.htmlFor}
        id={props.for}
        value={props.value}
        onChange={props.onChange}
      />
      {props.error && <p>{props.error}</p>}
      </div>
      </div>
    </>
  );
}
const Select = (props) => {
  return (
    <>
     <div className="row">
     <div className="col-9">
      <label htmlFor="sel2">{props.labname}</label>
      <select
        onChange={props.onChange}
        className={props.className}
        name={props.name}
        value={props.val}
      >
       {props.options.map((option) => {
          return <option  key={option.id} value={option.cntry}>{option.cntry}</option>;
        })}
      </select>
      </div>
          </div>
    </>
  );
};
const Radio = (props) => {
  const val = document.getElementsByName(props.name)
  console.log(val)
  return (
    <>
     <div className="row">
     <div className="col-9">
      <label htmlFor="ex2" style={{ marginTop: "10px" }}>
        {props.labname}
      </label>
      {props.value.map((option) => {
        console.log(option.value)
        return (
          <div className="radio">
            <label>
              <input
              

                type={props.type}
                name={props.name}
                value={option.rad}
                onChange={props.onChange}
              />
              {option.rad}
            </label>
          </div>
        );
      })}
       </div>
          </div>
    </>
  );
};
function Button(props) {
  return (
    <>
     <div className="row">
     <div className="text-center">
     <button type={props.type} className={props.className}>
        {props.labname}
     </button>
     </div>
     </div>
    </>
  );
}

export { Input, Select, Radio, Button };
