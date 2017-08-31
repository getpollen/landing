import { h, Component, cloneElement } from 'preact'
import style from './style'
import classNames from 'classnames'

export default class Row extends Component {
  render() {
    const children = this.props.children.map(child =>
      cloneElement(child, { columns: this.props.columns })
    )
    return (
      <div className={classNames(style.row, this.props.className)}>
        {children}
      </div>
    )
  }
}
