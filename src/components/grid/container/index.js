import { h, Component, cloneElement } from 'preact'
import style from './style'
import classNames from 'classnames'

export default class Container extends Component {
  render() {
    return (
      <div className={classNames(style.container, this.props.className)}>
        {this.props.children}
      </div>
    )
  }
}
