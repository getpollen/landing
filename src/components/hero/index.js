import { h, Component } from 'preact'
import { Section, Container, Row, Column } from '../grid'
import style from './style'

import Phone from './phone'
import Curve from './curve'
import Title from './title'
import Form from './form'

export default class Hero extends Component {
  render() {
    return (
      <Section>
        <Container>
          <Row>
            <Column width={7} className={style.heroContent}>
              <Title />
              <Form />
            </Column>
            <Column width={4} offset={1}>
              <Phone />
            </Column>
          </Row>
        </Container>
        <Curve />
      </Section>
    )
  }
}
