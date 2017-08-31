import { h, Component } from 'preact'

import * as _ from 'lodash/fp'

import Icon from './icon'
import style from './style'

const ICON_NUM = 50
const THROTTLE = 10

export default class Confetti extends Component {
  constructor(props) {
    super(props)
    this.state = {
      frame: 0
    }
  }

  render() {
    return (
      <div class={style.confetti}>
        {_.map(key => <Icon key={key} frame={this.state.frame} />)(
          _.range(ICON_NUM + 1, 1)
        )}
      </div>
    )
  }

  componentWillMount() {
    const update = _.throttle(THROTTLE, () => {
      this._animate()
      this.animation = window.requestAnimationFrame(update)
    })
    this.animation = window.requestAnimationFrame(update)
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.animation)
  }

  _animate() {
    this.setState({ frame: this.state.frame + 1 })
  }
}
