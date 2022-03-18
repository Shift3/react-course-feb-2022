import { BrowserRouter as Router, Route, Switch } from "react-router-dom" 
import ContactsPage from "./contacts";
import ContactDetailsPage from "./contact-details";
import ContactCreatePage from "./contact-create";
import Navbar from "./Navbar"
import LoginPage from "./login/LoginPage";
import { ContactContextProvider } from "../contexts/ContactContextProvider";


const App = () => {
  
  
  return (
    <ContactContextProvider>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/contacts/add">
          <ContactCreatePage />
        </Route>

        <Route path="/contacts/:id">
          <ContactDetailsPage />
        </Route>

        <Route path="/login">
          <LoginPage />
        </Route>

        <Route path="/">
          <ContactsPage />
        </Route>
      </Switch>
    </Router>
    </ContactContextProvider>
  );
}

export default App;
