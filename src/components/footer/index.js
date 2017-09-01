import { h, Component } from 'preact'
import { Section, Container, Row, Column } from '../grid'
import Curve from './curve'
// import style from './style'

export default class Features extends Component {
  render() {
    return <Section><Curve /></Section>
  }
}
