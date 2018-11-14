import React from 'react';
import { Row, Col } from 'reactstrap';


const Weather = props => (
  <div>
    {
      props.city && props.temperature && props.descicon && props.description &&
      <Row className="main-tab">
        <Col sm="4" className="main-info">{props.city}</Col>
        <Col sm="4" className="main-info">{props.temperature}</Col>
        <Col sm="4" className="main-info"><img src={`http://openweathermap.org/img/w/${props.descicon}.png`} alt="weather icon"/> {props.description}</Col>
        <hr/>
      </Row>
    }
    {
      props.error && <div>{props.error}</div>
    }
  </div>
);

export default Weather;
