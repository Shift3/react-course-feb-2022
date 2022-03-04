import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";

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
    console.log("state: ", this.state);
    if (this.state.loading) {
      return <h2>loading...</h2>;
    }

    const { animal, breed, city, state, description, name, images } =
      this.state;

    return (
      <div>
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
        <button>Buy {animal}</button>
        <p>{description}</p>

        <Carousel images={images} />
      </div>
    );
  }
}

export default withRouter(Details);
