import { useState } from "react";
import axios from "axios";

const Form = () => {

   const [form, setForm]  = useState({
      email:"",
      name:"",
      phone:""
   });

   const [errors, setErrors] = useState({
      email:"",
      name:"",
      phone:"",
      sbmt:""
   })

   const changeHandler = (event) =>{
      const property = event.target.name;
      const value=  event.target.value;
      validate({...form, [property]: value}); /* al validate y al setform se le pasa el estado para que valide antes de pasar al estado*/
      setForm({...form, [property]: value});
   }

   const validate = (formData) => { // Añade formData como argumento para obtener el valor actual del campo de correo electrónico
      if (formData.email.trim() === '') { // Verifica si el campo de correo electrónico está vacío
        setErrors({ ...errors, email: '' }); // Borra el mensaje de error
      } else if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
        setErrors({ ...errors, email: '' }); // El correo es válido, borra el mensaje de error
      } else {
        setErrors({ ...errors, email: 'email incorrecto' }); // El correo es incorrecto, muestra el mensaje de error
      }

      if (formData.name.trim() === '') { // Verifica si el campo de correo electrónico está vacío
         setErrors({ ...errors, name: '' }); // Borra el mensaje de error
       } else if (/^[a-zA-Z]+$/.test(formData.name)) {
         setErrors({ ...errors, name: '' }); // El correo es válido, borra el mensaje de error
       } else {
         setErrors({ ...errors, name: 'nombre incorrecto' }); // El correo es incorrecto, muestra el mensaje de error
       }
    };

   const submitHandler = (event) => {
      event.preventDefault();
      if (form.email && form.name && form.phone){
      const response = axios.post("http://localhost:3001/users", form)
      .then(res=>alert(res))
      .catch(err=>alert(err))
      }else{
         setErrors({...errors, sbmt: "datos incompletos"});
         setTimeout(()=>{
            setErrors({...errors, sbmt: ""});
         },2000)
      }
   }

    return (
        <>
           <form onSubmit={submitHandler}>

            <div>
               <label>Email</label>
               <input type="text" value={form.email} onChange={changeHandler} name="email"/>
               {errors.email && <span>{errors.email}</span>}
            </div>

            <div>
               <label>Name</label>
               <input type="text" value={form.name} onChange={changeHandler} name="name"/>
               {errors.name && <span>{errors.name}</span>}
            </div>

            <div>
               <label>Phone</label>
               <input type="text" value={form.phone} onChange={changeHandler} name="phone"/>
            </div>

            <button type="submit">SUBMIT</button>
            {errors.sbmt && <span>{errors.sbmt}</span>}
           </form>
        </>
    )
};

export default Form;