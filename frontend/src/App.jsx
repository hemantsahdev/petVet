
import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import DoctorRegistration from './pages/doctor/DoctorRegistration';
import Homepage from './pages/Homepage';
import DoctorApprovalRequest from './components/DoctorApprovalRequest';
import axios from 'axios';
import PendingRequests from './pages/admin/PendingRequests';


axios.defaults.baseURL = "http://localhost:3000";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />

        {/* doctor paths */}
        <Route
          path="/doctor/doctor-registration"
          element={<DoctorRegistration />}
        />

        {/* admin paths */}
        <Route
          path="/admin/pendingDoctorRequests"
          element={<PendingRequests />}
        />
      </Routes>
    </Router>
  );
}

export default App