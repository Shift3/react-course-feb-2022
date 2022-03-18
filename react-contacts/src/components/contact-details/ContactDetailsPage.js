import { useParams } from "react-router-dom";
import ContactDetailsCard from "./ContactDetailsCard";
import { useContact } from "../../contexts/contactContext"

const ContactDetailsPage = () => {
    const {id} = useParams();
    const { contacts} = useContact();
    const contact = contacts.filter(c => c.id === parseInt(id))[0];
    return (
        <div>
            <ContactDetailsCard contact={contact} />
        </div>
    )
}

export default ContactDetailsPage;