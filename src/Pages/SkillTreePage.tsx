import { Navigate, Route, Routes, useNavigate, useParams } from "react-router-dom"
import { getSkillTreeById, getSkillById } from '../assets/staticDevData';
import HeaderBar from "../components/HeaderBar";
import SkillDetailPage from "./SkillDetailPage";
import CenterFocusFooter from "../components/CenterFocusFooter";
import SkillEditPage from "./SkillEditPage";

const SkillTreePage = () => {
  const navigate=useNavigate()

  const {stid}=useParams();
  if(!stid){return <Navigate to="/error/no-skilltree-id-given"/>}

  const skillTree=getSkillTreeById(stid);
  if(!skillTree){return <Navigate to={"/error/skilltree-with-id-"+stid+"-not-found"}/>}

  const handleAddSkill=()=>
  {
    navigate("new");
  }

  return (
    <>
    <Routes>
      <Route path="" element={
        <>
        <HeaderBar title={skillTree.name}/>
        <div className="container first-container">
          <div className="list-group">
            {skillTree.skillNodes.map(skillNode=>
              {
                const skill=getSkillById(skillNode.skillId);
                if(!skill){console.log(`Couldn't find skill with id:${skillNode.skillId}`);return}
                
                return(
                  <a className="list-group-item list-group-item-action"
                  onClick={()=>navigate(skill.id)}
                  key={skill.id}>
                  {skill.name}
                  </a>)
              })}
          </div>
        </div>
        <CenterFocusFooter mainFunction={handleAddSkill} mainIcon="plus"></CenterFocusFooter>
        </>
      }/>
      <Route path="new" element={<SkillEditPage />} />
      <Route path=":skid/*" element={<SkillDetailPage />} />
    </Routes>
    </> 
  )
}

export default SkillTreePage