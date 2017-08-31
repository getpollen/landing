import { h, Component } from 'preact'
import style from './style'

export default class Form extends Component {
  render() {
    return (
      <form className={style.heroForm}>
        <input
          type="email"
          placeholder="Enter your email for updates"
          className={style.emailInput}
        />
        <button className={style.emailSubmit} type="submit">
          Keep me in the Know
        </button>
      </form>
    )
  }
}
