import { useState } from "react";

const AddContactForm = ({setContact}) => {
  const [input , setInput] = useState({name : "" , email: ""});


  const inputChangeHandler = (e) => {
    setInput({...input , [e.target.name] : e.target.value});
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setContact({...input , id: Date.now()});
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <p>Add Contact</p>
      <label>
        Name
        <input type="text" placeholder="Name" name="name" value={input.name} onChange={inputChangeHandler} />
      </label>
      <label>
        email
        <input type="email" placeholder="Email" name="email" value={input.email} onChange={inputChangeHandler} />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddContactForm;
