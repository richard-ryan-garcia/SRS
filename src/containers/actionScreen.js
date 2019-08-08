import React from 'react';
import Header from '../components/Header';
import SubHeader from '../components/Header/subHeader';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import TabSection from '../components/TabSection';
import Form from '../components/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import {FaBarcode, FaReply} from 'react-icons/fa';
import FloatingAction from '../components/Button/floatingAction';


const ActionScreen = (props) => {
  // const {actionType, alertMessage, alertType} = props;
  const actionType= 'replenishment';
  const alertMessage='this is an alert message! '
  const alertType = 'warning'
  return (
    <div>
      <Header title='Unified Store Walk'/>
      <div className='sub-header'>
        <button ><FaReply  /></button> 
        <button ><FaBarcode/></button> 
      </div>
    <div className='action-screen' >
      <Container>
        <Row>
          <Col>
            <div className='page-header'>Mr Bubble Bath Orig Bubble</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form/>
          </Col>
        </Row>
        {
          (alertMessage) ? (
            <Row>
              <Col>
                <Alert variant={alertType} >
                  {alertMessage}
                </Alert>
              </Col>
            </Row>
          ) : (<div/>)
        }
        <Row>
          <Col>
          </Col>
        </Row>
        <Row>
          <Col>
            <TabSection actionType={actionType}/>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button className='action-btn adjustments'>
              <div id="overlay-action-btn"></div>
              Replenish
            </Button>
          </Col>
        </Row>

      </Container>
      <Footer withMargin={true} />
    </div>
    </div>
  );
}

export default ActionScreen;