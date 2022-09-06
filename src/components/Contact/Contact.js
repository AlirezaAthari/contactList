const Contact = ({contact}) => {
    console.log("contact");
    return (
        <div>
            <p>{contact.name}</p>
            <p>{contact.email}</p>
            <button>delete</button>
        </div>
     );
}
 
export default Contact;