import axios from "axios";

const DoctorApprovalRequest = ({request}) => {

  const requestHandler=async(e)=>{
    e.preventDefault();


    if(e.target.value==='approve'){

      const payload={
        name:request.name,
        email:request.email,
        mobile:request.mobile,
        username:request.username,
        password:request.password,
        gender:request.gender,
        speciality:request.speciality,
        state:request.state,
        city:request.city,
        address:request.address,


      }

      const res=await axios.post('/doctor/permanent-doctor',payload)

      console.log(res.data);



    }
    else if(e.target.value==='reject'){

      const payload={
        id:request._id,
        status:"rejected"
      }
      const res=await axios.put("doctor/changeStatus",payload);

      console.log(res.data)
    }

  }
  

  return (
    <div>
      {request.name}

      <button value="approve" onClick={requestHandler}>
        Approve
      </button>
      <button value="reject" onClick={requestHandler}>
        Reject
      </button>
    </div>
  );
};

export default DoctorApprovalRequest;
