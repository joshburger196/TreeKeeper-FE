import { Button } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"

const ErrorPage = () => {
  const {errorCode}=useParams()
  const navigate=useNavigate()
  
  const handleNavigateBack=()=>
  {
    navigate(-3);
  }

  return (
    <>
    <div className="auth-form-parent">
      <div className="container d-flex flex-column justify-content-center text-center auth-form-container">
        <h1>Error 404</h1>
        <p className="lead">The page you're looking for wasn't found!</p>
        {errorCode && <small className="text-body-secondary">Error Code: {errorCode}</small>}
        <Button onClick={handleNavigateBack}>Back</Button>
      </div>
    </div>
    </>
  )
}

export default ErrorPage