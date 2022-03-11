import { Link } from "react-router-dom";
import "./Animal.css";
const Animal = (props) => {
  return (
    <div className="animal">
      <Link to={`/details/${props.id}`}>
        <h1>{props.name}</h1>
        <h2>{props.type}</h2>
        <h2>{props.breed}</h2>
      </Link>
    </div>
  );
};

export default Animal;
