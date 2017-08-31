import { h, Component, cloneElement } from 'preact'
import style from './style'
import classNames from 'classnames'

export default class Container extends Component {
  render() {
    const children = this.props.children.map(child =>
      cloneElement(child, { columns: this.props.columns || 12 })
    )
    return (
      <div className={classNames(style.container, this.props.className)}>
        {children}
      </div>
    )
  }
}
