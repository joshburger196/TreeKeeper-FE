import { Navigate, Route, Routes, useNavigate, useParams } from "react-router-dom"

import HeaderBar from "../components/HeaderBar"
import { getSkillsBySkillTreeId } from '../assets/staticDevData';
import { FormEvent } from 'react';
import CenterFocusFooter from "../components/CenterFocusFooter"
import SkillForm from "../components/SkillForm";

const CreateSkillPage = () => {
  const navigate=useNavigate()

  //needed ids
  const {unid, stid}=useParams()
  if(!stid){return <Navigate to="/error/no-skilltree-id-given"/>}
  if(!unid){return <Navigate to="/error/no-universe-id-given"/>}

  //needed objects
  const requirableSkills=getSkillsBySkillTreeId(stid);
  if(!requirableSkills){return <Navigate to={"/error/skilltree-"+stid+"-not-found"}/>}


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
        <HeaderBar title="Create Skill"></HeaderBar>

        <SkillForm
        requirableSkills={requirableSkills}
        onSubmit={(e)=>handleSubmit(e)}
        />

        <CenterFocusFooter
          mainIcon="tick"
          mainFormId="skillForm"/>
        </>
      }
      />
      <Route path="edit/*" element={<CreateSkillPage/>}/>
    </Routes>
    </>
  )
}

export default CreateSkillPage