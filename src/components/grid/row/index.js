import { h, Component, cloneElement } from 'preact'
import classNames from 'classnames'
import style from './style'

export default class Row extends Component {
  render() {
    return (
      <div className={classNames(style.row, this.props.className)}>
        {this.props.children}
      </div>
    )
  }
}
