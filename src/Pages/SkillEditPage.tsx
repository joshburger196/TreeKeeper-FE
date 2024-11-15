import { Navigate, Route, Routes, useNavigate, useParams } from "react-router-dom"

import HeaderBar from "../components/HeaderBar"
import { getSkillById, getSkillRequirements, getSkillsBySkillTreeId } from '../assets/staticDevData';
import { FormEvent } from 'react';
import CenterFocusFooter from "../components/CenterFocusFooter"
import SkillForm from "../components/SkillForm";

const SkillEditPage = () => {
  const navigate=useNavigate()

  //needed ids
  const {unid, stid,skid}=useParams()
  if(!skid){return <Navigate to="/error/no-skill-id-given"/>}
  if(!stid){return <Navigate to="/error/no-skilltree-id-given"/>}
  if(!unid){return <Navigate to="/error/no-universe-id-given"/>}

  //needed objects
  const skill=getSkillById(skid)
  const requiredSkill=getSkillRequirements(skid,stid,unid);
  const requirableSkills=getSkillsBySkillTreeId(stid);
  if(!skill){return <Navigate to={"/error/skill-with-id-"+skid+"-not-found"}/>}
  if(requiredSkill===undefined){return <Navigate to={"/error/skill-required-by-"+skid+"-not-found"}/>}
  if(!requirableSkills){return <Navigate to={"/error/skills-in-skilltree-"+stid+"-requirable-by-"+skid+"-not-found"}/>}


  const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    sendSkillDataToBE(formData);
  }

  const sendSkillDataToBE=(formData:FormData)=>
  {
    const formObj = Object.fromEntries(formData);
    console.log(formObj);
    //send
    //wait
    //success
    onEditSuccess();
  }

  const onEditSuccess=()=>
  {
    navigate(-1)
    //Ideally, this should go to the parent url, not to the history
  }


  return (
    <>
    <Routes>
      <Route path=""
      element={
        <>
        <HeaderBar title={"Edit "+skill.name}></HeaderBar>

        <SkillForm
        skillName={skill.name}
        skillDescription={skill.description}
        reqSkillId={requiredSkill?.id}
        requirableSkills={requirableSkills}
        onSubmit={(e)=>handleSubmit(e)}
        />

        <CenterFocusFooter
          mainIcon="tick"
          mainFormId="skillForm"/>
        </>
      }
      />
      <Route path="edit/*" element={<SkillEditPage/>}/>
    </Routes>
    </>
  )
}

export default SkillEditPage