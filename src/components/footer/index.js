import { h, Component } from 'preact'
import { Section, Container, Row, Column } from '../grid'
import Curve from './curve'
import style from './style'

export default class Features extends Component {
  render() {
    return (
      <Section>
        <Curve />
        <Container columns={2}>
          <Row className={style.footer}>
            <Column>© <strong>Pollen</strong> 2017</Column>
            <Column>Made with love in <strong>Atlanta</strong></Column>
          </Row>
        </Container>
      </Section>
    )
  }
}
