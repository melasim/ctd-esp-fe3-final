import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [user, setUser] = useState({
    nombre: '',
    email: ''
  })
  const [show, setShow] = useState(false)
  const [err, setErr] = useState(false)
  const regexMail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  const validMail = () => regexMail.test(user.email)

    const handleSubmit = (event) => {
      event.preventDefault()
      if(user.nombre.length > 4 && validMail()){
          setShow(true)
          setErr(false)
      } else {
          setShow(false)
          setErr(true)
      }
  }
  return (
    <div className="contacto">
      <form className="form" onSubmit={handleSubmit}>
        <label>Nombre completo</label>
        <input type="text" value={user.nombre} onChange={(e) => setUser({...user, nombre: e.target.value})}/>
        <label>Email</label>
        <input type="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}/>
        <button type="submit">Enviar</button>
      </form>
      {err ? 'No ha colocado la información correcta' : null}
      {show && `Gracias  ${user.nombre}, te contactaremos cuando antes vía mail`}
    </div>
  );
};

export default Form;
