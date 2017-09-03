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
          <Row sm={{ collapsed: true }}>
            <Column
              lg={{ width: 7 }}
              md={{ width: 8 }}
              className={style.heroContent}
            >
              <Title />
              <Form />
            </Column>
            <Column
              lg={{ width: 4, offset: 1 }}
              md={{ width: 4 }}
              className={style.phone}
            >
              <Phone />
            </Column>
          </Row>
        </Container>
        <Curve />
      </Section>
    )
  }
}
