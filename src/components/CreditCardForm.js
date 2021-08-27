import React from "react";
import Form from 'react-bootstrap/Form'
import { Button, Alert, Row, Col } from "react-bootstrap";
import useForm from "../useForm";
import Cards from "react-credit-cards";
import "./CreditCardForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-credit-cards/es/styles-compiled.css";
export default function CreditCardForm() {
  const { handleChange, handleFocus, handleSubmit, values, errors } = useForm();
  return (
    <div className="container">
      <div className="box justify-content-center align-items-center">
        <div className="form-div">
          <div className="credit-card">
            <Cards
              cvc={values.cvc}
              expiry={values.expiration}
              focused={values.focus}
              name={values.name}
              number={values.number}
            />
          </div>
          <Form onSubmit={handleSubmit}>
<Form.Group>
<Form.Label  style={{ fontSize: 12 }}>Card Number</Form.Label>
              <Form.Control
                type="number"
                id="number"
                name="number"
                placeholder="Card Number"
                value={values.number}
                onChange={handleChange}
                onFocus={handleFocus}
                isValid={errors.cnumber}
              />
            </Form.Group>
            <Form.Group>
<Form.Label style={{ fontSize: 12 }}>Card Name</Form.Label>
              <Form.Control
                type="text"
                id="name"
                name="name"
                placeholder="Cardholder Name"
                value={values.name}
                onChange={handleChange}
                onFocus={handleFocus}
                isValid={errors.cname}
              />
            </Form.Group>
            
            <Row>
              <Col>
                <Form.Group>
<Form.Label style={{ fontSize: 12 }}>Expiration Date</Form.Label>
                  <Form.Control
                    type="text"
                    id="expiration"
                    name="expiration"
                    placeholder="Expiration"
                    value={values.expiration}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    isValid={errors.cexp}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
<Form.Label style={{ fontSize: 12 }}>CVV</Form.Label>
                  <Form.Control
                    type="number"
                    id="cvc"
                    name="cvc"
                    placeholder="CVV"
                    value={values.cvc}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    isValid={errors.ccvv}
                  />
                </Form.Group>
              </Col>
						</Row>
<div className="d-grid gap-2">
						 <Button
              size={"block"}
              id="validateButton"
              type="submit"
            >
              Validate
            </Button>
</div>
          </Form>
          </div>
          <Alert
            id="alertMessage"
            data-testid="alertMessage"
            variant={errors.variant}
            show={errors.show}
          >
            {errors.message}
          </Alert>{" "}
        </div>
      </div>
  );
}
