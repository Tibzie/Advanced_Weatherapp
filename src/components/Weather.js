import React from 'react';
import { Row, Col, UncontrolledAlert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Weather = props => (
  <div>
    {
      props.city && props.temperature && props.descicon && props.condition &&
      <Row className="main-tab">
        <Col sm="4" className="main-info">{props.city}</Col>
        <Col sm="4" className="main-info">{props.temperature}&deg;C</Col>
        <Col sm="4" className="main-info">
        <img src={`http://openweathermap.org/img/w/${props.descicon}.png`} alt="weather icon"/> {props.condition}</Col>
      </Row>
    }
    {
      props.error &&
      <UncontrolledAlert color="danger" fade={false} className="error-message">
      {props.error}
      </UncontrolledAlert>

    }
    {
      props.humidity && props.temp_min && props.temp_max && props.description &&
      <Row className="sub-tab">
        <Col sm="4" className="sub-info"><strong>Humidity:</strong> {props.humidity}</Col>
        <Col sm="4" className="sub-info">
          <FontAwesomeIcon icon="temperature-low" size="lg"/> {props.temp_min}&deg;C
          <FontAwesomeIcon className="temp-high" icon="temperature-high" size="lg"/> {props.temp_max}&deg;C
        </Col>
        <Col sm="4" className="sub-info"><strong>Description:</strong> {props.description}</Col>
      </Row>
    }
  </div>
);

export default Weather;
