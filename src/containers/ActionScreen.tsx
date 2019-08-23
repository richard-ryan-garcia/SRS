import * as React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { FaBarcode, FaReply } from 'react-icons/fa';

import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { TabSection } from '../components/TabSection/TabSection';
import { BasicForm as Form } from '../components/Form/Form';

// TODO: Create a shared actionType enum
export interface ActionScreenProps {
  actionType: string;
}

export const ActionScreen: React.FC<ActionScreenProps> = ({ actionType }) => {
  const alertMessage = 'this is an alert message! ';
  const alertType = 'success';

  return (
    <div>
      <Header title="Unified Store Walk" />
      <div className={`sub-header ${actionType}`}>
        <button className={`${actionType}`}>
          <a href="#/store-walk">
            <FaReply />
          </a>
        </button>
        <button className={`${actionType}`}>
          <FaBarcode />
        </button>
      </div>
      <div className="action-screen">
        <Container>
          <Row>
            <Col>
              <div className="page-header">Mr Bubble Bath Orig Bubble</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form />
            </Col>
          </Row>
          {alertMessage ? (
            <Row>
              <Col>
                <Alert variant={alertType}>{alertMessage}</Alert>
              </Col>
            </Row>
          ) : (
            <div />
          )}
          <Row>
            <Col />
          </Row>
          <Row>
            <Col>
              <TabSection actionType={actionType} />
            </Col>
          </Row>

          <Row>
            <Col>
              <Button className={`action-btn ${actionType}`}>
                <div id="overlay-action-btn" />
                {actionType.toUpperCase()}
              </Button>
            </Col>
          </Row>
        </Container>
        <Footer withMargin={true} />
      </div>
    </div>
  );
};