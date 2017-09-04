import { h, Component } from 'preact'
import { Section, Container, Row, Column } from '../grid'
import style from './style'
import classNames from 'classnames'

import Card from '../card'
import { Satellite, Telescope, IPod } from './icons'

export default class Features extends Component {
  render() {
    return (
      <Section className={style.features}>
        <Container columns={20}>
          <Row className={classNames(style.cards, 'collapseSm')}>
            <Column>
              <Card icon={Telescope} title="Discover">
                With our unique recommendation algorithm
                find podcasts and episodes perfectly suited
                to you no matter your mood.
              </Card>
            </Column>
            <Column>
              <Card icon={IPod} title="Enjoy">
                Listen to all of your favorite podcasts
                on all of your devices. Pollen syncs your
                subscriptions and episodes with the cloud.
              </Card>
            </Column>
            <Column>
              <Card icon={Satellite} title="Share">
                Enjoy your favorite podcasts with friends and family.
                Discuss, share and discover with members of the
                community
              </Card>
            </Column>
          </Row>
        </Container>
      </Section>
    )
  }
}
