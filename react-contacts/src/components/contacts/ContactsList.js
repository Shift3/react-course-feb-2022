import ContactCard from "./ContactCard";
import { useContact } from "../../contexts/contactContext";

const ContactList = () => {
    const { contacts, removeContact } = useContact();

    return (
        <div style={{backgroundColor: "#eee", padding: "2rm"}}>
            {contacts.map((contact) => 
                <ContactCard
                    id = {contact.id}
                    key={contact.id}
                    firstName={contact.firstName} 
                    lastName={contact.lastName} 
                    phoneNumber={contact.phoneNumber} 
                    profilePic={contact.profilePic}
                    onRemove={() => removeContact(contact.id)}
                />
            )}
        </div>
    )
}

export default ContactList;