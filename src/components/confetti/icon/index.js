import { h, Component } from 'preact'

import * as _ from 'lodash/fp'
import style from './style'

import Circle from './circle'
// import Heart from './heart'
import Square from './square'
import Squiggle from './squiggle'
import Star from './star'

const ICONS = [Circle, Square, Squiggle, Star]
const ICON_SIZE = 30
const POS_LOWER_BOUND = -0.05
const POS_UPPER_BOUND = 1.05
const ROT_LOWER_BOUND = 0
const ROT_UPPER_BOUND = 360

const createRandomIcon = props => {
  return _.merge(
    {
      icon: _.sample(ICONS),
      x: _.random(POS_LOWER_BOUND, POS_UPPER_BOUND, true),
      y: _.random(POS_LOWER_BOUND, POS_UPPER_BOUND, true),
      velocityX: _.random(-0.0005, 0.0005, true),
      velocityY: _.random(-0.0005, 0.0005, true),
      opacity: _.random(0.3, 0.5, true),
      rotation: _.random(ROT_LOWER_BOUND, ROT_UPPER_BOUND, true),
      rotationVelocity: _.random(-0.5, 0.5, true)
    },
    props
  )
}

const change = _.curry((lowerBound, upperBound, diff, val) => {
  let newVal = val + diff
  if (newVal > upperBound) {
    newVal = lowerBound
  } else if (newVal < lowerBound) {
    newVal = upperBound
  }
  return newVal
})
const move = change(POS_LOWER_BOUND, POS_UPPER_BOUND)
const rotate = change(ROT_LOWER_BOUND, ROT_UPPER_BOUND)

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
        x: move(this.state.velocityX, this.state.x),
        y: move(this.state.velocityY, this.state.y),
        rotation: rotate(this.state.rotationVelocity, this.state.rotation)
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
}
