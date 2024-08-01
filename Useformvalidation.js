import { useState } from "react"



// this hooks is made by custome for validatioon

const useFormValidation = (initialValues) => {
    const [values , setValues] =useState(initialValues);
    const [error , setError] =useState({});

    const validate = () => {
        const newErrors = {};

        // usename

      if (!values.username) {
        newErrors.username='username is required';
      } else if(values.username.length>4){
        newErrors.username='username must be required 4 charecter'
      }  ;

      //email

      const emailpettren=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!values.email) {
        newErrors.email='email is required';
      } else if(!emailpettren.test(values.email)){
        newErrors.email='invalid email pettern';
      }

       // password
    const passwordpettern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!values.password) {
      newErrors.password = 'Password is required';
    } else if (!passwordpettern.test(values.password)) {
      newErrors.password = 'Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character';
    }

      //  retype password
      if (!values.retypePassword) {
        newErrors.retypePassword = 'Please retype your password';
      } else if (values.password !== values.retypePassword) {
        newErrors.retypePassword = 'Passwords do not match';
      }
      //  last name
    const lastNameRegex = /^[A-Za-z\s-]+$/; 
    if (!values.lastName) {
      newErrors.lastName = 'Last name is required';
    } else if (!lastNameRegex.test(values.lastName)) {
      newErrors.lastName = 'Last name can only contain letters, spaces, and hyphens';
    }
      // First Name 
  if (!values.firstName) {
    error.firstName = "First Name is required";
  } else if (!/^[a-zA-Z]+$/.test(values.firstName)) {
    error.firstName = "First Name can only contain letters";
  }
 // Phone Number 
 if (!values.phoneNumber) {
    error.phoneNumber = "Phone number is required";
  } else if (!/^\d{10}$/.test(values.phoneNumber)) {
    error.phoneNumber = "Phone number must be exactly 10 digits";
  }
   // Address 
   if (!values.address) {
    error.address = "Address is required";
  } else if (values.address.length < 10) {
    error.address = "Address must be at least 10 characters long";
  }
  if (!values.region) {
    error.region = "Region is required";
  } else if (!/^[a-zA-Z\s]+$/.test(values.region)) {
    error.region = "Region can only contain letters and spaces";
  }
   // Postcode
   if (!values.postcode) {
    error.postcode = "Postcode is required";
  } else if (!/^\d{5}$/.test(values.postcode)) {
    error.postcode = "Postcode must be exactly 5 digits";
  }
    // Country 
    if (!values.country) {
        error.country = "Country is required";
      } else if (!/^[a-zA-Z\s]+$/.test(values.country)) {
        error.country = "Country can only contain letters and spaces";
      }
      setError(newErrors);
        return Object.keys(newErrors).length === 0;
      
    };
    const handleChange = (e) => {
        setValues({
          ...values,
          [e.target.name]: e.target.value,
        });
      };
      return {
        values,
        error,
        handleChange,
        validate,
      };
    
};
export default useFormValidation;
