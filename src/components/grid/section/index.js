import { h, Component, cloneElement } from 'preact'
import style from './style'
import classNames from 'classnames'

export default class Section extends Component {
  render() {
    return (
      <div className={classNames(style.section, this.props.className)}>
        {this.props.children}
      </div>
    )
  }
}
