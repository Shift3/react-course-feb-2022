import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBounday from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";

class Details extends Component {
  state = { loading: true };

  async componentDidMount() {
    const results = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await results.json();
    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }

  render() {
    if (this.state.loading) {
      return <h2>loading...</h2>;
    }

    const { animal, breed, city, state, description, name, images } =
      this.state;

    //throw new Error("error thrown here");
    return (
      <div>
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
        <ThemeContext.Consumer>
          {([theme]) => (
            <button style={{ backgroundColor: theme, color: "#fff" }}>
              Buy {animal}
            </button>
          )}
        </ThemeContext.Consumer>
        <p>{description}</p>

        <Carousel images={images} />
      </div>
    );
  }
}

const DetailsWithRouter = withRouter(Details);

export default function DetailsErrorBounday(props) {
  return (
    <ErrorBounday>
      <DetailsWithRouter {...props} />
    </ErrorBounday>
  );
}
