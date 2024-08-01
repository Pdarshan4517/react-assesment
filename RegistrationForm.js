import React from "react";
import useFormValidation from "../hooks/Useformvalidation";


const RegistrationForm =()=>{
    const {values,error ,handleChange,validate}=useFormValidation({
        username: '',
        email: '',
    });
    
    const handlesubmit =(e)=>{
        e.preventDefault();

        if (validate()) {
            console.log('FormData:',values);
            alert('register sucessfully');
        } else {
            console.log('validation error:',error);
        }
    };
    return(
        <div className="form-container" >
      <h2>Registration Form</h2>
      <form onSubmit={handlesubmit}>
      <div className="group">
      <label for="username">Username:</label>
      <input name="username" type="text" id="username" onChange={handleChange} value={values.username}  />
      {error.username && <p className="error">{error.username}</p>} 
      </div>

      <div className="group">
      <label for="email">Email:</label>
      <input name="email" type="email" id="email" onChange={handleChange} value={values.email}  />
      {error.email && <p className="error">{error.email}</p>} 
      </div>
      <div className="group">
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={values.password}
      
      />
      {error.password && <p className="error">{error.password}</p>}
    </div>

    <div className="group">
    <label For="retypePassword">Retype Password:</label>
    <input
      type="password"
      id="retypePassword"
      name="retypePassword"
      value={values.retypePassword}
      onChange={handleChange}
   
    />
    {error.retypePassword && <p className="error">{error.retypePassword}</p>}
  </div>
 
        <div className="group">
          <label For="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={handleChange}
            value={values.firstName || ''}
        
          />
          {error.firstName && <p className="error">{error.firstName}</p>}
        </div>
        <div className="group">
        <label For="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
        
        />
        {error.lastName && <p className="error">{error.lastName}</p>}
      </div>
        <div className="group">
        <label For="phoneNumber">Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          onChange={handleChange}
          value={values.phoneNumber || ''}
        />
        {error.phoneNumber && <p className="error">{error.phoneNumber}</p>}
      </div>

      <div className="group">
      <label For="address">Address:</label>
      <input
        type="text"
        name="address"
        id="address"
        onChange={handleChange}
        value={values.address || ''}
      />
      {error.address && <p className="error">{error.address}</p>}
    </div>
    <div className="group">
    <label For="region">Region:</label>
    <input
      type="text"
      name="region"
      id="region"
      onChange={handleChange}
      value={values.region || ''}
    />
    {error.region && <p className="error">{error.region}</p>}
  </div>
  <div>
  <label For="postcode">Postcode:</label>
  <input
    type="text"
    name="postcode"
    id="postcode"
    onChange={handleChange}
    value={values.postcode || ''}
  />
  {error.postcode && <p className="error">{error.postcode}</p>}
</div>
<div className="group">
<label htmlFor="country">Country:</label>
<input
  type="text"
  name="country"
  id="country"
  onChange={handleChange}
  value={values.country || ''}
/>
{error.country && <p className="error">{error.country}</p>}
</div>
      <button type="submit">Register</button>
      </form>
      </div>
    )
}
export default RegistrationForm;