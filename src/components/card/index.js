import { h, Component } from 'preact'
import style from './style'

export default class Card extends Component {
  render() {
    return (
      <div className={style.card}>
        <div className={style.cardIcon}>
          <this.props.icon />
        </div>
        <div className={style.cardTitle}>
          {this.props.title}
        </div>
        <div className={style.cardText}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
