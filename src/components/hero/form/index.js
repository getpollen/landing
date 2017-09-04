import { h, Component } from 'preact'
import style from './style'
import classNames from 'classnames'

const fakeSubmit = () =>
  new Promise((resolve, reject) => window.setTimeout(reject, 2000))

export default class Form extends Component {
  render() {
    return (
      <form className={style.heroForm} onSubmit={this.submitEmail.bind(this)}>
        <input
          type="email"
          value={this.state.email}
          onInput={this.updateEmail.bind(this)}
          placeholder="Enter your email for updates"
          className={classNames(style.emailInput, 'hiddenXs')}
        />
        <input
          type="email"
          value={this.state.email}
          onInput={this.updateEmail.bind(this)}
          placeholder="Your Email"
          className={classNames(style.emailInput, 'visibleXs')}
        />
        <button
          className={classNames(style.emailSubmit, {
            [style.emailSubmitting]: this.state.submitting,
            [style.emailSuccess]: this.state.success,
            [style.emailError]: this.state.error
          })}
          type="submit"
        />
      </form>
    )
  }

  updateEmail(e) {
    if (this.isDisabled()) {
      return
    }
    return this.setState({
      email: e.target.value,
      submitting: false,
      error: false,
      success: false
    })
  }

  submitEmail(e) {
    e.preventDefault()
    if (this.isDisabled()) {
      return
    }
    this.setState({
      submitting: true,
      error: false,
      success: false
    })
    fakeSubmit()
      .then(() =>
        this.setState({
          submitting: false,
          error: false,
          success: true
        })
      )
      .catch(() =>
        this.setState({
          submitting: false,
          error: true,
          success: false
        })
      )
  }

  isDisabled() {
    return this.state.submitting || this.state.success
  }
}
