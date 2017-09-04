import { h, Component } from 'preact'
import style from './style'
import classNames from 'classnames'

export default class Column extends Component {
  render() {
    return (
      <div className={classNames(style.column, this.props.className)}>
        {this.props.children}
      </div>
    )
  }
}
