import { useState, useEffect} from 'react';
import { ContactContext} from './contactContext';
import { deleteContact, getContacts, createContact  } from "../utils/contacts";
import { getMockContacts } from "../utils/mockContacts";

export const ContactContextProvider = ({children}) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const storedContacts = getContacts();
    setContacts(storedContacts.length ? storedContacts: getMockContacts)
  }, []);

  const removeContact = (contactId) => {
    const newContacts = contacts.filter(c => c.id !== contactId);
    deleteContact(contactId);
    setContacts(newContacts)
   
  }

  const createNewContact = (contact) => {
    const newContact = createContact(contact);
    setContacts([newContact, ...contacts]);
  } 

  return (
    <ContactContext.Provider value={{contacts, removeContact, createNewContact}}>
      {children}  
    </ContactContext.Provider>
  );
}