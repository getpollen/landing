import { h, Component } from 'preact'

import Home from '../pages/home'

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <Home />
      </div>
    )
  }
}
