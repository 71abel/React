import React,{useState} from 'react';
import './contactForm.css';
function ContactForm() {
   const[formData,setFormData] = useState({name:'',email:'',phonenumber:''});
   const[errors,setErrors] = useState({});

   function validateEmail(email) {
    return email.includes("@") && email.includes(".");
   }
   
   function handleInputChange (event) {
       const {name,value} = event.target;
        setFormData({...formData,[name]:value});
     
      if (name === 'email') {
        if (!value){
            setErrors((preErrors)=>({ ...preErrors, email: 'Email is required'}));
        } else if (!validateEmail(value)){ 
            setErrors((preErrors)=>({...preErrors, email: 'Invalid Email'}));
          }else {
            setErrors((prevErrorrs)=>{
                const {email, ...rest} = prevErrorrs;
                return rest;
            });
        }
    }
    if (name === 'name') {
        if (!value){
            setErrors((preErrors)=>({...preErrors, name: 'Name is required'}));
        } else {
            setErrors((prevErrorrs)=>{
                const {name, ...rest} = prevErrorrs;
                return rest;
            });
        }
    }
}
    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData);
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleInputChange}/><br/>
            <span style={{color: "red"}}>{errors.name}</span><br/>
            <input type="text" name="email" placeholder="Email" onChangeCapture={handleInputChange} /><br/>
            <span style={{color: "red"}}>{errors.email}</span><br/>
            <input type="tel" name="phone" placeholder="Phone number" onChange={handleInputChange}/><br/>
            <button type="submit" disabled={!(formData.name && formData.email && !errors.email)}>submit</button>
        </form>
        <span>name: {formData.name}</span><br/>
        <span>email: {formData.email}</span><br/>
        <span>phone number: {formData.phonenumber}</span><br/>
        </>
    );
}
export default ContactForm;



