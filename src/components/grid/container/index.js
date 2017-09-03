import { h, Component, cloneElement } from 'preact'
import style from './style'
import classNames from 'classnames'

export default class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      size: typeof window === 'undefined' ? 0 : window.innerWidth
    }
  }
  render() {
    const children = this.props.children.map(child =>
      cloneElement(child, {
        columns: this.props.columns || 12,
        size: this.state.size
      })
    )
    return (
      <div className={classNames(style.container, this.props.className)}>
        {children}
      </div>
    )
  }

  componentDidMount() {
    this.updateSize = () => this.setState({ size: window.innerWidth })
    window.addEventListener('resize', this.updateSize)
  }
  componentDidUnmount() {
    window.removeEventListener('resize', this.updateSize)
  }
}
