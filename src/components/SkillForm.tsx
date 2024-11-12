import { Route, Routes } from 'react-router-dom';
import SkillEditPage from '../Pages/SkillEditPage';
import { Alert, Form } from 'react-bootstrap';
import { FormEvent, useState } from 'react';
import { Skill } from '../interfaces';

interface Props
{
  skillName?:string;
  reqSkillId?:string;
  skillDescription?:string;
  requirableSkills:Skill[]
  onSubmit:(e:FormEvent<HTMLFormElement>)=>void;
}

const SkillForm = (props:Props) => {

  const requirableSkills=props.requirableSkills;

  //use states
  const [skillName,setSkillName] = useState(props.skillName||"");
  const [reqSkillId,setReqSkillId] = useState(props.reqSkillId||null)
  const [skillDescription,setSkillDescription] = useState(props.skillDescription||"");
  const [validationErrors,setValidationErrors] = useState<string[]>()

  const validateSkillForm=(e:FormEvent<HTMLFormElement>)=>
  {
    e.preventDefault()
    let errors=[]
    //validate
    if(!skillName){errors.push("Skill name must not be empty")}

    if(errors.length>0)
      setValidationErrors(errors);
    else
      props.onSubmit(e)
  }

  return (
    <>
      element={
        <>
        <Form
        id="skillForm"
        className="first-container container"
        onSubmit={(e)=>validateSkillForm(e)}>
          <Form.Group className="mb-3" controlId="skillName">
            <Form.Control
            name="skillName"
            value={skillName}
            placeholder="Skill name"
            onChange={(e)=>setSkillName(e.target.value)}/>
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="skillRequirement">
            <Form.Label>
              <h6 className="text-danger mb-0">Requires:</h6>
            </Form.Label>
            <Form.Select name="skillRequirement"
            defaultValue=""
            value={reqSkillId||""}
            onChange={(event)=>(setReqSkillId(event.target.value))}>
              <option value="">No requirements</option> 
              {
                requirableSkills.map((requirableSkill)=>
                    <>
                      {
                        <option
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

          {validationErrors?.map((error) => (
            <Alert key={error} variant="danger">
              {error}
            </Alert>
          ))}
        </Form>
        
        </>
      }
    </>
    )
}

export default SkillForm