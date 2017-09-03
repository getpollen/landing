import { h, Component, cloneElement } from 'preact'
import classNames from 'classnames'
import style from './style'
import pickSetting from '../breakpoints'

export default class Row extends Component {
  render() {
    const children = this.props.children.map(child =>
      cloneElement(child, {
        columns: this.props.columns,
        size: this.props.size
      })
    )
    const { collapsed } = this._collapsedState()
    return (
      <div
        className={classNames(
          style.row,
          { [style.rowCollapsed]: collapsed },
          this.props.className
        )}
      >
        {children}
      </div>
    )
  }

  _collapsedState() {
    return pickSetting(this.props.size, this.props, { collapsed: false })
  }
}
