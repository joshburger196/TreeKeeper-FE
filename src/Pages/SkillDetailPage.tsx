import { Navigate, Route, Routes, useNavigate, useParams } from "react-router-dom"
import HeaderBar from "../components/HeaderBar"
import { getSkillById, getSkillRequirements } from "../assets/staticDevData";
import SkillEditPage from "./SkillEditPage";
import CenterFocusFooter from "../components/CenterFocusFooter";

const SkillDetailPage = () => {
  const {unid, stid,skid}=useParams()
  const navigate=useNavigate();

  if(!skid){return <Navigate to="/error/no-skill-id-given"/>}
  if(!stid){return <Navigate to="/error/no-skilltree-id-given"/>}
  if(!unid){return <Navigate to="/error/no-universe-id-given"/>}

  const skill=getSkillById(skid)
  const requiredSkill=getSkillRequirements(skid,stid,unid);

  if(!skill){return <Navigate to={"/error/skill-with-id-"+skid+"-not-found"}/>}
  if(requiredSkill===undefined){return <Navigate to={"/error/skill-required-by-"+skid+"-not-found"}/>}

  const handleEditSkill=()=>
  {
    navigate("edit")
  }

  return (
    <>
    <Routes>
      <Route path=""
      element={
        <>
        <HeaderBar title={skill.name}></HeaderBar>
        <div className="first-container"></div>
        {requiredSkill && <div className="container">
          <p className="text-danger">Requirements: {requiredSkill.name}</p>
        </div>}
        <div className="container">
          <h6>Description:</h6>
          <p>{skill.description}</p>
        </div>
        <CenterFocusFooter
        mainFunction={handleEditSkill}
        mainIcon="pencil" />
        </>
      }
      />
      <Route path="edit/*" element={<SkillEditPage/>}/>
    </Routes>
    </>
  )
}

export default SkillDetailPage