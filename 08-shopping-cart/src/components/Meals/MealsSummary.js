import { useReducer } from 'react';
import classes from './MealsSummary.module.css';

const step = 50;

const limitRGB = (num) => (num < 0 ? 0 : num > 255 ? 255 : num);
const reducer = (state, action) => {
  switch(action.type){
    case "INCREMENT_R":
      return Object.assign({}, state, {r: limitRGB(state.r + step)});
    case "DECREMENT_R":
      return Object.assign({}, state, {r: limitRGB(state.r - step)});
    case "INCREMENT_G":
      return Object.assign({}, state, {g: limitRGB(state.g + step)});
    case "DECREMENT_G":
      return Object.assign({}, state, {g: limitRGB(state.g - step)});
      case "INCREMENT_B":
    return Object.assign({}, state, {b: limitRGB(state.b + step)});
  case "DECREMENT_B":
    return Object.assign({}, state, {b: limitRGB(state.b - step)});
    default:
      return state;
  }
}


const MealsSummary = () => {
  const [{r, g, b}, dispatch] = useReducer(reducer, { r: 0, g:0, b:0});
  return (
    <section className={classes.summary}>
      <h2 style={{color: `rgb(${r}, ${g}, ${b})`}}>Delicious Food, Delivered to you!</h2>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut tortor fermentum, molestie mauris convallis, pharetra ante. Quisque pretium, mauris ac luctus accumsan, lacus quam sollicitudin felis, sed lacinia enim justo id lacus. Nam auctor rutrum risus, non volutpat felis varius eget. Fusce imperdiet ante sed faucibus scelerisque. Sed massa risus, porttitor in velit et, convallis rhoncus sapien. Vestibulum faucibus elit diam, sed consectetur est dapibus vitae. Mauris condimentum quam ac lacus euismod ultricies. Sed vitae tellus vitae magna iaculis euismod. Vivamus lacinia posuere rutrum.
      </p>
      <div>
        <div>
          <span>R</span>
          <button style={{cursor: 'pointer'}} onClick={() => dispatch({type: "INCREMENT_R"})}>+</button>
          <button style={{cursor: 'pointer'}} onClick={() => dispatch({type: "DECREMENT_R"})}>-</button>
        </div>
        <div>
          <span>G</span>
          <button style={{cursor: 'pointer'}} onClick={() => dispatch({type: "INCREMENT_G"})}>+</button>
          <button style={{cursor: 'pointer'}} onClick={() => dispatch({type: "DECREMENT_G"})}>-</button>
        </div>
        <div>
          <span>B</span>
          <button style={{cursor: 'pointer'}} onClick={() => dispatch({type: "INCREMENT_B"})}>+</button>
          <button style={{cursor: 'pointer'}} onClick={() => dispatch({type: "DECREMENT_B"})}>-</button>
        </div>
    </div>
    </section>
  );
}

export default MealsSummary;