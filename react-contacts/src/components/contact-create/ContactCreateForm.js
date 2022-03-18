import {useState} from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useContact } from "../../contexts/contactContext";

const ContactCreateForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [profilePic, setProfilePic] = useState("");

    const { createNewContact } = useContact();
    const history = useHistory();
    const handleFormSubmit = (event) => {
        event.preventDefault();
        createNewContact({
            firstName,
            lastName,
            phoneNumber,
            email,
            address,
            profilePic
        });

        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setEmail("");
        setAddress("");
        setProfilePic("");
        history.pushState("/");
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <Row>
                <div>
                    <img src={profilePic} alt="Profile preview." />
                </div>
                <div>
                    <div>
                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Address"
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Profile Picture Url"
                            name="profilePic"
                            value={profilePic}
                            onChange={(e) => setProfilePic(e.target.value)}
                        />
                    </div>
                    <div>
                        <button style={{cursor: "pointer"}} type="submit">Add Contact</button>
                    </div>
                </div>
            </Row>
        </form>
    )
}

const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

export default ContactCreateForm;