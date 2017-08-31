import { h, Component } from 'preact'
import { Section, Container, Row, Column } from '../grid'
import style from './style'

export default class Features extends Component {
  render() {
    return (
      <Section className={style.features}>
        <Container>
          <Row>
            <h1>Hello</h1>
          </Row>
        </Container>
      </Section>
    )
  }
}
