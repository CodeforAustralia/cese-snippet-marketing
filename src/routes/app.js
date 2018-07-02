import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Home from './home';

class App extends Component {
  render() {
    return (
      <Router>
        <Home path="/" />
      </Router>
    );
  }
}

export default App;
