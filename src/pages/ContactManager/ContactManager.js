import { useState } from "react";
import AddContactForm from "../../components/AddContactForm/AddContactForm";
import ContactsList from "../../components/ContactsList/ContactsList";
import styles from "../ContactManager/contactManager.module.css"

const ContactManager = () => {
    const [contacts , setContacts] = useState([]);

    const addContactToList = (contact) => {
        setContacts(contacts => [...contacts , contact]);
    }

    const deleteContact = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id));
    }

    return ( 
        <>
            <header className={styles.header}>Contact Manager</header>
            <AddContactForm setContact={addContactToList}/>
            <ContactsList contacts={contacts} deleteHandler={(id) => deleteContact(id)}/>
        </>
     );
}
 
export default ContactManager;