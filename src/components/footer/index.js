import { h, Component } from 'preact'
import { Section, Container, Row, Column } from '../grid'
import Curve from './curve'
import style from './style'
import classNames from 'classnames'

export default class Footer extends Component {
  render() {
    return (
      <Section>
        <Curve />
        <Container columns={2}>
          <Row className={classNames(style.footer, 'collapseXs')}>
            <Column>© <strong>Pollen</strong> 2017</Column>
            <Column>Made with love in <strong>Atlanta</strong></Column>
          </Row>
        </Container>
      </Section>
    )
  }
}
