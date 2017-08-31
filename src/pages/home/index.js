import { h, Component } from 'preact'
import style from './style'

import Header from '../../components/header'
import Hero from '../../components/hero'
import Confetti from '../../components/confetti'
import Features from '../../components/features'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Confetti />
        <Header />
        <Hero />
        <Features />
      </div>
    )
  }
}
