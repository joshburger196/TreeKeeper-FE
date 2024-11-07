import { Navigate, Route, Routes, useNavigate, useParams } from "react-router-dom"
import { Form } from "react-bootstrap"

import HeaderBar from "../components/HeaderBar"
import { getSkillById, getSkillRequirements, getSkillsBySkillTreeId } from "../assets/staticDevData"
import { useState, FormEvent } from 'react';
import CenterFocusFooter from "../components/CenterFocusFooter"

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
  if(!requirableSkills){return <Navigate to={"/error/skill-in-skilltree-"+stid+"-requirable-by-"+skid+"-not-found"}/>}

  //useStates
  const [skillName,setSkillName] = useState(skill.name);
  const [reqSkillId,setReqSkillId] = useState(requiredSkill!=null&&requiredSkill.id)
  const [skillDescription,setSkillDescription] = useState(skill.description);

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
        <HeaderBar title={"Edit "+skillName}></HeaderBar>
        <Form
        id="skillForm"
        className="first-container container"
        onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="skillName">
            <Form.Control
            name="skillName"
            value={skillName}
            onChange={(e)=>setSkillName(e.target.value)}/>
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="skillRequirement">
            <Form.Label>
              <h6 className="text-danger mb-0">Requires:</h6>
            </Form.Label>
            <Form.Select name="skillRequirement"
            onChange={(event)=>(setReqSkillId(event.target.value))}>
              <option value="">No requirements</option> 
              {
                requirableSkills.map((requirableSkill)=>
                    <>
                      {
                        requirableSkill.id!=skill.id &&
                        //the condition above ensures skill doesn't appear
                        //in its own requirable skills list
                        <option
                        selected={reqSkillId===requirableSkill.id}
                        value={requirableSkill.id}>
                          {requirableSkill.name}
                        </option>
                      }
                    </>
                )
              }
            </Form.Select>
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="skillDescription">
            <Form.Label><h6 className="mb-0">Description:</h6></Form.Label>
            <Form.Control
            as="textarea"
            rows={6}
            name="skillDescription"
            value={skillDescription}
            onChange={(e)=>setSkillDescription(e.target.value)}/>
          </Form.Group>
        </Form>
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