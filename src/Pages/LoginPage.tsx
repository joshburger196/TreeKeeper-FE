import { FormEvent } from "react";
import { Button, Form } from "react-bootstrap"

const LoginPage = () => {
  const handleSumbit=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formObj = Object.fromEntries(formData);
    console.log(formObj);
  }

  return (
    <div className="auth-form-parent">
      <div className="container-sm d-flex flex-column justify-content-center auth-form-container">
          <h1 className="text-center">Log in</h1>
          <Form onSubmit={handleSumbit}>
            <Form.Group controlId="username">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                name="username"/>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                name="password"/>
            </Form.Group>

            <div className="d-flex justify-content-center">
                <Button type="submit"
                  href="/universes"
                  className="m-2">Log in</Button>
                <Button variant="outline-secondary"
                  className="m-2"
                  href="/register">Register</Button>
            </div>
          </Form>
      </div>
    </div>
  );
};

export default LoginPage;