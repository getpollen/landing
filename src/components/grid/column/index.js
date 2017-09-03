import { h, Component } from 'preact'
import style from './style'
import classNames from 'classnames'
import pickSetting from '../breakpoints'

export default class Column extends Component {
  render() {
    const { width, offset } = this._dimensionsState()
    const style = {
      width: `${this.calcDistance(width || 1)}%`,
      marginLeft: `${this.calcDistance(offset || 0)}%`
    }
    return (
      <div
        className={classNames(style.column, this.props.className)}
        style={style}
      >
        {this.props.children}
      </div>
    )
  }

  _dimensionsState() {
    return pickSetting(this.props.size, this.props, { width: 1, offset: 0 })
  }

  calcDistance(amount) {
    return (100 * (amount / this.props.columns)).toFixed(2)
  }
}
