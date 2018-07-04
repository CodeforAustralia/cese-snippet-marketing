import { h } from 'preact';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import Logo from './doe-black-logo.png';

const GefFooter = () => {
  return (
    <footer className="gef-global-footer">
      <Container>
        <div className="gef-global-footer__inner">
          <div className="gef-global-footer__inner__wrapper">
            <Row>
              <Col md={6} lg={7}>
                <Row>
                  <Col md={6}>
                    <ul className="list-unstyled">
                      <li><a native href="">Accessibility</a></li>
                    </ul>
                  </Col>
                  <Col md={6}>
                  </Col>
                </Row>
              </Col>
              <Col md={4} lg={3}>
                <img src={Logo} width={130} height={47} alt="NSW Department of Education logo" />
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </footer>
  )
};

export default GefFooter;
