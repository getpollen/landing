import { h, Component } from 'preact'
import style from './style'

import Svg from './svg'

export default class Header extends Component {
  render() {
    return (
      <div className={style.logoContainer}>
        <Svg className={style.logoSvg} />
        <span className={style.logoText}>Pollen</span>
      </div>
    )
  }
}
