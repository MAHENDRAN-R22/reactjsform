import '../App.css';
import Studentform from './Studentform';
 
function Studenttable(props)
{      var tableHeading = {
        textAlign: "center",
        color:"hsl(240, 97%, 27%)", 
        fontWeight:" bold"

    }
    var tableCon = {
         bottom:"5px"
  }
    return (
        <div className="container" style={tableCon}>
	<h1 style={tableHeading}>STUDENT DETAILS</h1>
	<table className="table">
		<thead className="table-dark">
			<tr>
				<th>First Name</th>
				<th>Email</th>
				<th>Mobile Num</th>
				<th>DOB</th>
				<th>Gender</th>
				<th>university</th>
				<th>Action</th>
			</tr>
		</thead>
		<tbody style={{color:"hsl(240, 97%, 27%)"}}>
		{
		props.data.map((data,index)=>{
			console.log("hai")
			  return(
			<>	
		 <tr key={index}>
			 <td>{data.fname}</td>
			  <td>{data.mail}</td>
			  <td>{data.mbl}</td>
			  <td>{data.dob}</td>
			  <td>{data.optradio}</td>
			  <td>{data.univ}</td>
			  <td>
				  <a href="#/form"> <input type="button" className="btn btn-primary"
						  value="Edit" /></a>
				  <input type="button" className="btn btn-danger" value="Delete" />
			  </td>
			  </tr>
			  </>
			    )
		  })
		}
		</tbody>
			
    </table>

      </div>
)
    
}
export default Studenttable;