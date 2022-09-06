import { useEffect, useState } from "react";
import AddContactForm from "../../components/AddContactForm/AddContactForm";
import ContactsList from "../../components/ContactsList/ContactsList";

const ContactManager = () => {
    const [contacts , setContacts] = useState([]);

    const addContactToList = (contact) => {
        setContacts(contacts => [...contacts , contact]);
    }

    return ( 
        <>
            <header>Contact Manager</header>
            <AddContactForm setContact={addContactToList}/>
            <ContactsList contacts={contacts}/>
        </>
     );
}
 
export default ContactManager;