import { h, Component } from 'preact'

import style from './style'

export default class Phone extends Component {
  render() {
    return (
      <div className={style.titleContainer}>
        <h1>A Podcast App made by Podcast Junkies</h1>
        <h2>Experience a new way to listen to the World</h2>
      </div>
    )
  }
}
