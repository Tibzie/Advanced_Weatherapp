import React from 'react';
import { Jumbotron,
  Form,
  FormGroup,
  Label,
  Input,
  Button } from 'reactstrap';

const SearchForm = () => (
      <div>
        <Jumbotron>
          <h1 className="display-3">Welcome to our app</h1>
          <p className="lead">Please enter your desired city and country in the fields below.<br />
          </p>
          <hr/>

          <Form>
            <FormGroup>
              <Label for="cityField">City: </Label>
              <Input type="text" name="city" id="cityField" placeholder="city here... e.g.'Budapest'" />
            </FormGroup>

            <FormGroup>
              <Label for="countryField">Country: </Label>
              <Input type="text" name="country" id="countryField" placeholder="country here... e.g.'Hungary'" />
            </FormGroup>
          </Form>
          <Button color="info" className="float-right">Search</Button>
        </Jumbotron>

      </div>
);

export default SearchForm;
