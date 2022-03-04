import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import Header from "./Header";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </Router>
    </>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
