import React from 'react';
import { ajax } from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    var word = "people"

    ajax({
      method: 'GET',
      url: `/api/${word}`,
      error: (err) => console.error(err),
      success: (data) => {
        console.log("Success");
      }
    });
  }

  render () {
    return (
      <div>
      </div>
    )
  }
}

export default App;