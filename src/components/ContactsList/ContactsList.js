import Contact from "../Contact/Contact";

const ContactsList = ({contacts , deleteHandler}) => {
    const renderContacts = () => {
        if(contacts.length === 0)
            return <p></p>;
        return contacts.map(contact => <Contact key={contact.id} contact={contact} onDelete={() => deleteHandler(contact.id)} />)
    };

    return <div>{renderContacts()}</div>
}
 
export default ContactsList;