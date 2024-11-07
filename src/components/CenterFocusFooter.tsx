import { Button } from 'react-bootstrap';
import { FaPlus, FaCheck } from "react-icons/fa";
import { BiSolidPencil } from "react-icons/bi";

interface Props
{
    mainFunction?:()=>void;
    mainIcon:"plus"|"tick"|"pencil";
    mainFormId?:string;
    leftFunction?:()=>void;
    leftIcon?:"plus"|"tick"|"pencil";
    rightFunction?:()=>void;
    rightIcon?:"plus"|"tick"|"pencil";
}

const CenterFocusFooter=({
  mainFunction,
  mainIcon,
  mainFormId,
  leftFunction,
  leftIcon,
  rightFunction,
  rightIcon
}:Props) => {
  return (
    <footer>
      {leftFunction &&
      <Button className="secondary-ftr-btn"
      onClick={leftFunction}>

      </Button>}

      <Button
      className="main-ftr-btn big-icon"
      form={mainFormId}
      type="submit"
      onClick={mainFunction}>
        {mainIcon==="plus"&&<FaPlus />}
        {mainIcon==="pencil"&&<BiSolidPencil/>}
        {mainIcon==="tick"&&<FaCheck/>}
      </Button>

      {rightFunction &&
      <Button className="secondary-ftr-btn"
      onClick={rightFunction}>
        
      </Button>}
    </footer>
  );
};

export default CenterFocusFooter;
