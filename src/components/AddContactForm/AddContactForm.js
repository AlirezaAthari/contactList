import { useState } from "react";
import styles from "../AddContactForm/addContactForm.module.css"

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
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <header className={styles.header}>Add Contact</header>
      <label className={styles.label}>
        Name
        <input className={styles.input} type="text" placeholder="Name" name="name" value={input.name} onChange={inputChangeHandler} />
      </label>
      <label className={styles.label}>
        Email
        <input className={styles.input} type="email" placeholder="Email" name="email" value={input.email} onChange={inputChangeHandler} />
      </label>
      <button className={styles.button} type="submit">Add</button>
    </form>
  );
};

export default AddContactForm;
