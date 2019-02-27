import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export default class App extends React.Component {
  state = {
    beers: []
  };
  constructor() {
    super();
    this.getBeers();
  }

  getBeers() {
    fetch(`https://private-06e98-blep.apiary-mock.com/debilci`)
      .then(data => data.json())
      .then(beers => {
        this.setState({ beers: beers.plebNames });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let beerNames = this.state.beers.map(beer => (
      <body>
        <li>
          <strong>
            {" "}
            {beer.name} - {beer.iq}
          </strong>
        </li>
      </body>
    ));
    return <div> {beerNames}</div>;
    //<div> {JSON.stringify(this.state.beers)}</div>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
