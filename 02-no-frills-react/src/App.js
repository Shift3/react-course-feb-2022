const Animal = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.type),
    React.createElement("h2", {}, props.breed),
  ]);
}

const App = () => {
  return React.createElement(
    "div", 
    {}, 
    [ 
      React.createElement("h1", {}, "Animal Acquisation"),
      React.createElement(Animal, {name: "Luna", type: "Dog", breed: "Havanese"}),
      React.createElement(Animal, {name: "Pepper", type: "Bird", breed: "Cockatiel"}),
      React.createElement(Animal, {name: "Doink", type: "Cat", breed: "Mix"}),
    ]
    );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));