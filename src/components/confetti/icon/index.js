import { h, Component } from 'preact'

import * as _ from 'lodash/fp'
import style from './style'

import Circle from './circle'
import Heart from './heart'
import Square from './square'
import Squiggle from './squiggle'
import Star from './star'

const ICONS = [Circle, Heart, Square, Squiggle, Star]
const ICON_SIZE = 30
const LOWER_BOUND = -0.05
const UPPER_BOUND = 1.05

const createRandomIcon = props => {
  return _.merge(
    {
      icon: _.sample(ICONS),
      x: _.random(LOWER_BOUND, UPPER_BOUND, true),
      y: _.random(LOWER_BOUND, UPPER_BOUND, true),
      velocityX: _.random(-0.001, 0.001, true),
      velocityY: _.random(-0.001, 0.001, true),
      opacity: _.random(0.3, 0.5, true),
      rotation: _.random(0, 360)
    },
    props
  )
}

export default class Icon extends Component {
  constructor(props) {
    super(props)
    this.state = createRandomIcon(props)
  }

  render() {
    return <this.state.icon class={style.icon} {...this._transformation()} />
  }

  componentWillReceiveProps({ frame }) {
    if (this.props.frame != frame) {
      this.setState({
        x: this._move(this.state.x, this.state.velocityX),
        y: this._move(this.state.y, this.state.velocityY)
      })
    }
  }

  _transformation() {
    return {
      x: this.state.x * window.innerWidth,
      y: this.state.y * window.innerHeight,
      rotation: this.state.rotation,
      opacity: this.state.opacity
    }
  }

  _move(position, velocity) {
    let newPosition = position + velocity
    if (newPosition > UPPER_BOUND) {
      newPosition = LOWER_BOUND
    } else if (newPosition < LOWER_BOUND) {
      newPosition = UPPER_BOUND
    }
    return newPosition
  }
}
