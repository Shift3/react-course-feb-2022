import { Component, lazy } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBounday from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import classes from "./Details.module.css";

const Modal = lazy(() => import("./Modal"));

class Details extends Component {
  state = { loading: true, showModal: false };

  async componentDidMount() {
    const results = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await results.json();
    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  buyAnimal = () =>
    (window.location =
      "https://www.petfinder.com/search/dogs-for-adoption/?distance=100");

  render() {
    if (this.state.loading) {
      return <h2>loading...</h2>;
    }

    const { animal, breed, city, state, description, name, images, showModal } =
      this.state;

    //throw new Error("error thrown here");
    return (
      <div>
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
        <ThemeContext.Consumer>
          {([theme]) => (
            <button
              style={{ backgroundColor: theme, color: "#fff" }}
              onClick={this.toggleModal}
            >
              Buy {animal}
            </button>
          )}
        </ThemeContext.Consumer>
        <p>{description}</p>

        <Carousel images={images} />

        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to buy {name}</h1>
              <div className={classes.buttons}>
                <button onClick={this.buyAnimal}>Yes</button>
                <button onClick={this.toggleModal}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
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
