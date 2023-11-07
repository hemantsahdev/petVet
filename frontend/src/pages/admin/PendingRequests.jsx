import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DoctorApprovalRequest from '../../components/DoctorApprovalRequest';

const PendingRequests = () => {

    const [requests, setRequests] = useState([])

    useEffect(() => {
      const pendingRequests = async () => {
        const {data} = await axios.get("/admin/pendingDoctorRequests");
        console.log(data);
        setRequests(data.message);
        console.log(data);
      };

      pendingRequests();
    }, []);



  return (
    <div>

        {requests.length>0? (requests.map((request)=>(<DoctorApprovalRequest request={request} key={request._id} />))): (<h1>No Pending Requests</h1>) }


    </div>
  )
}

export default PendingRequests