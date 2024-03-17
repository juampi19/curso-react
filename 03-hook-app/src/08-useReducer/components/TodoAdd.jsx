import { useState } from "react";
import { useForm } from "../../hooks/useForm";


export const TodoAdd = ({ onNewTodo }) => {

  const { description, onInputChange, onResetForm } = useForm({
    description : ''
  })
  const [error, setError] = useState(false);



  const handleSubmit = ( e ) => {
    e.preventDefault();


    if( description.length <= 0 ) {
      setError( true );
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description
    }
    
    onNewTodo( newTodo );
    onResetForm();
    setError(false);

  }

  return (
    <form onSubmit={ handleSubmit }>
      { error &&  <p className="bg-danger rounded p-2 text-center fw-bold text-uppercase text-white">El campo es obligatorio</p>  }
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        value={ description  }
        name="description"
        onChange={ onInputChange }
      />

      <button className="btn btn-outline-primary mt-2" type="submit">
        Agregar
      </button>
    </form>
  );
};
