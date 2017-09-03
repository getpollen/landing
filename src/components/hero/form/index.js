import { h, Component } from 'preact'
import style from './style'
import classNames from 'classnames'

export default class Form extends Component {
  render() {
    return (
      <form className={style.heroForm}>
        <input
          type="email"
          placeholder="Enter your email for updates"
          className={classNames(style.emailInput, 'hiddenXs')}
        />
        <input
          type="email"
          placeholder="Your Email"
          className={classNames(style.emailInput, 'visibleXs')}
        />
        <button className={style.emailSubmit} type="submit">
          <span className={classNames('visibleLg', 'hiddenMd')}>
            Keep me in the know
          </span>
          <span className={classNames('visibleMd', 'hiddenLg')}>Update Me</span>
        </button>
      </form>
    )
  }
}
