import React from 'react';
import { Jumbotron,
  Form,
  FormGroup,
  Label,
  Input,
  Button } from 'reactstrap';


const SearchForm = props => (
      <div className="search-form">
        <Jumbotron>
          <h1 className="display-3">Welcome to our app</h1>
          <p className="lead">Please enter your desired city and country in the fields below.<br />
          </p>
          <hr/>
          <Form onSubmit={props.getWeather}>
            <FormGroup className="city-field">
              <Label for="cityField">City: </Label>
              <Input type="text" name="city" id="cityField" className="city" placeholder="city here... e.g. 'Budapest'" />
            </FormGroup>

            <Button type="reset">Reset</Button>
            <Button color="primary" className="float-right">Search</Button>
          </Form>

        </Jumbotron>

      </div>
);

export default SearchForm;
