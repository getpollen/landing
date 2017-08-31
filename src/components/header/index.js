import { h, Component } from 'preact'
import style from './style'

import { Container, Section } from '../grid'
import Logo from '../logo'

export default class Header extends Component {
  render() {
    return (
      <Section>
        <Container className={style.header}>
          <Logo />
        </Container>
      </Section>
    )
  }
}
