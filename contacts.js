const contact = [{

        id: 1,
        labname: "ENTER YOUR NAME",
        htmlFor: "fname",
        className: "form-control",
        type: "text",
        placeholder: "ENTER YOUR NAME",
        name: "fname",
       

    }, {
        id: 2,
        labname: "ENTER YOUR REGNO",
        htmlFor: "regno",
        className: "form-control",
        type: "number",
        placeholder: "ENTER YOUR REGNO",
        name: "regno",

    },
    {
        id: 3,
        labname: "ENTER YOUR EMAIL",
        htmlFor: "mail",
        className: "form-control",
        type: "email",
        placeholder: "ENTER YOUR MAILID",
        name: "mail",

    }, {
        id: 4,

        htmlFor: "mbl",
        labname: "ENTER MOBILE NUMBER",
        className: "form-control",
        type: "number",
        placeholder: "ENTER YOUR NUMBER",
        name: "mbl",

    },
    {
        id: 5,
        htmlFor: "dob",
        labname: "ENTER YOUR DOB",
        className: "form-control",
        type: "date",
        name: "date",
    }



]
const options = [{id:0,cntry:""},{id:1,cntry:"ANNA UNIVERSITY"},{id:2,cntry:"SRM UNIVERSITY"},{id:3,cntry:"PERIYAR UNIVERSITY"},{id:4,cntry:"VELS UNIVERSITY"},{id:5,cntry:"MGR UNIVERSITY"}];
const radio = [{id:0,rad:"MALE"},{id:1,rad:"FEMALE"},{id:2,rad:"OTHER"}];
export {contact,options,radio}