import { FormEvent } from "react";
import { Button,Form } from "react-bootstrap"

const RegistrationPage = () => {
  const submit=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formObj = Object.fromEntries(formData);
    console.log(formObj);
  }

  return (
    <div className="auth-form-parent">
      <div className="container-sm d-flex flex-column justify-content-center auth-form-container">
        <h1 className="text-center">Register</h1>
        <Form onSubmit={submit}>
          <Form.Group controlId="username">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              name="username"/>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>New Password:</Form.Label>
            <Form.Control
              type="password"
              name="password"/>
          </Form.Group>

          <Form.Group controlId="confirm-password">
            <Form.Label>Confirm Password:</Form.Label>
            <Form.Control
              type="password"
              name="confirm-password"/>
          </Form.Group>

          <div className="d-flex justify-content-center">
              <Button variant="outline-secondary"
                href="/login"
                className="m-2">Log in</Button>
              <Button type="submit"
                className="m-2">Register</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default RegistrationPage;