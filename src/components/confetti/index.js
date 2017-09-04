import { h, Component } from 'preact'

import * as _ from 'lodash/fp'

import Icon from './icon'
import style from './style'

const ICON_NUM = 50
const THROTTLE = 1000 / 60

export default class Confetti extends Component {
  constructor(props) {
    super(props)
    this.state = {
      frame: 0,
      iconNum: ICON_NUM,
      timestamp: 0
    }
  }

  render() {
    return (
      <div class={style.confetti}>
        {_.map(key => <Icon key={key} frame={this.state.frame} />)(
          _.range(this.state.iconNum, 1)
        )}
      </div>
    )
  }

  componentDidMount() {
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
    const timestamp = Date.now()
    let iconNumChange = 0
    if (this.state.timestamp > 0) {
      const diff = timestamp - this.state.timestamp > 30
      if (diff > 50) {
        iconNumChange = -3
      } else if (diff < 20) {
        iconNumChange = 1
      }
    }
    this.setState({
      frame: this.state.frame + 1,
      iconNum: Math.min(
        Math.max(0, this.state.iconNum + iconNumChange),
        ICON_NUM
      ),
      timestamp: timestamp
    })
  }
}
