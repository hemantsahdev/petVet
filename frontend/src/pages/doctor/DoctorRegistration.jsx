import React, { useState } from 'react'
import axios from 'axios';

const DoctorRegistration = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [gender, setGender] = useState('')
  const [speciality, setSpeciality] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [address, setAddress] = useState('');

  const [message, setMessage] = useState('')


    
    const submitHandler=async(e)=>{
        e.preventDefault();

        const payload={
            name,email,mobile,username,password,gender,speciality,state,city,address
        }
         const res = await axios.post("/doctor/doctor-registration",payload);
         console.log(res);
         setMessage(res.data.message);

    }

    if(message){
      return (
        <h1>Your details have been submitted </h1>
      )
    }

  return (
    <>
    
      <h1>Doctor Registration</h1>
      <form action="">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="mobile">Mobile No.</label>
        <input
          type="number"
          id="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="username">UserName</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="" disabled selected>
            Choose your answer
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <br />
        <br />
        <label htmlFor="speciality">Speciality</label>
        <select
          id="speciality"
          value={speciality}
          onChange={(e) => setSpeciality(e.target.value)}
        >
          <option value="" disabled selected>
            Choose your answer
          </option>

          <option value="animal_behaviour">Animal Behavior</option>
          <option value="Aquatic_animal_medicine">
            Aquatic_animal_medicine
          </option>
          <option value="cardiology">cardiology</option>
          <option value="dentistry">dentistry</option>
          <option value="dermatalogy">dermatalogy</option>
          <option value="nutrition">nutrition</option>
          <option value="poultry">poultry</option>
        </select>
        <br />
        <br />
        <label htmlFor="state">State</label>
        <select
          id="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          <option value="" disabled selected>
            Choose your answer
          </option>

          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Andaman and Nicobar Islands">
            Andaman and Nicobar Islands
          </option>
          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
          <option value="Assam">Assam</option>
          <option value="Bihar">Bihar</option>
          <option value="Chandigarh">Chandigarh</option>
          <option value="Chhattisgarh">Chhattisgarh</option>
          <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
          <option value="Daman and Diu">Daman and Diu</option>
          <option value="Delhi">Delhi</option>
          <option value="Lakshadweep">Lakshadweep</option>
          <option value="Puducherry">Puducherry</option>
          <option value="Goa">Goa</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Haryana">Haryana</option>
          <option value="Himachal Pradesh">Himachal Pradesh</option>
          <option value="Jammu and Kashmir">Jammu and Kashmir</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Kerala">Kerala</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Manipur">Manipur</option>
          <option value="Meghalaya">Meghalaya</option>
          <option value="Mizoram">Mizoram</option>
          <option value="Nagaland">Nagaland</option>
          <option value="Odisha">Odisha</option>
          <option value="Punjab">Punjab</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Sikkim">Sikkim</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Telangana">Telangana</option>
          <option value="Tripura">Tripura</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Uttarakhand">Uttarakhand</option>
          <option value="West Bengal">West Bengal</option>
        </select>

        <br />
        <br />
        <label htmlFor="city">City</label>
        <select
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="" disabled selected>
            Choose your answer
          </option>

          <option value="ludhiana">Ludhiana</option>
          <option value="amritsar">Amritsar</option>
          <option value="patiala">Patiala</option>
        </select>
        <br />
        <br />
        <label htmlFor="address">Address</label>
        <textarea
          id="address"
          cols="30"
          rows="5"
          placeholder="enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>
        <br />
        <br />

        <button type="submit" onClick={submitHandler}>
          Submit
        </button>
      </form>

      {}
    </>
  );
}

export default DoctorRegistration