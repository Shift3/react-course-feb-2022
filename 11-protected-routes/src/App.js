import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Home';
import Nav from './Nav';
import Dashboard from './Dashboard';
import Pricing from './Pricing';
import Settings from './Settings';
import Login from './Login';
import RequiredAuth from './RequiredAuth';
import { AuthProvider } from './Auth';

function App() {
  return (
    <AuthProvider>
      <h1>My protected App</h1>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/dashboard" element={
            <RequiredAuth>
              <Dashboard />
            </RequiredAuth>
          } />
          <Route path="/settings" element={
            <RequiredAuth>
              <Settings />
            </RequiredAuth>
          } />
          <Route path="/login" element={<Login />}/>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
