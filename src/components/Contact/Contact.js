const Contact = ({contact , onDelete}) => {
    return (
        <div>
            <p>{contact.name}</p>
            <p>{contact.email}</p>
            <button onClick={onDelete}>delete</button>
        </div>
     );
}
 
export default Contact;