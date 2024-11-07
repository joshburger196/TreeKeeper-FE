import { Button } from "react-bootstrap";
import { IoMdArrowRoundBack } from "react-icons/io";
import "./BackButton.css"
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate=useNavigate();
  
  const navigateToParentUrl=()=>{
    const url = window.location.pathname;
    let backButtonUrl = "";
    if (url.charAt(url.length - 1) === "/") {
      backButtonUrl = url.slice(0, url.lastIndexOf("/"));
      backButtonUrl = backButtonUrl.slice(0, backButtonUrl.lastIndexOf("/"));
    } else {
      backButtonUrl = url.slice(0, url.lastIndexOf("/"));
    }
    if(!backButtonUrl) backButtonUrl="/"
    
    navigate(backButtonUrl)
  }

  return (
    <Button
        variant="clear-primary d-flex flex-column justify-content-center"
        className="back-btn mid-icon"
        onClick={navigateToParentUrl}>
        <IoMdArrowRoundBack></IoMdArrowRoundBack>
    </Button>
  )
}

export default BackButton