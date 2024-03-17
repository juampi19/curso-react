import { useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {


  const [formState, setFormState] = useState({
    username: 'juampi',
    email: 'juampi@gmail.com'
  });


  const { username, email } = formState;

  const onInputChange = ( event ) => {
    setFormState({
      ...formState,
      [ event.target.name ]: event.target.value
    })

  }



  // useEffect( () => {
  //   console.log('useEffect called')
  // }, [] )

  // useEffect( () => {
  //   console.log('The email is change')
  // }, [email] );


  

  return (
    <>
      <h1>Simple Form</h1>

      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={ username }
        onChange={ onInputChange }
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="correo@gmail.com"
        name="email"
        value={email}
        onChange={ onInputChange }
      />


      {
        (username === 'juampi') && <Message />
      }
    </>
  );
};
