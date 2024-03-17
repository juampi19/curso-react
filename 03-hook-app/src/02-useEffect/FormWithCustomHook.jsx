import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  
  const { onInputChange, username, email, password, onResetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });


  // const { username, email, password } = formState; 


  return (
    <>
      <h1>Simple Form with costum hook</h1>

      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={ username ? username : '' }
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="correo@gmail.com"
        name="email"
        value={ email ? email : '' }
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={ password ? password : '' }
        onChange={onInputChange}
      />


      <button onClick={ onResetForm } className="btn btn-primary mt-2">Reset</button>

    </>
  );
};
