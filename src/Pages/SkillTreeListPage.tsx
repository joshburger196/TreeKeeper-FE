import { Navigate, Route, Routes, useNavigate, useParams } from "react-router-dom";
import { getUniverseById } from "../assets/staticDevData";
import SkillTreePage from "./SkillTreePage";
import HeaderBar from "../components/HeaderBar";

const SkillTreeListPage = () => {
  const navigate=useNavigate();

  const { unid } = useParams();
  if(!unid){return <Navigate to="/error/no-universe-id-given"/>}

  const universe=getUniverseById(unid);
  if(!universe){return <Navigate to={"/error/universe-with-id-"+unid+"-not-found"}/>}


  return (
    <>
    <Routes>
      <Route path="" element={
        <>
          <HeaderBar title={universe.name}/>
          <div className="container first-container">

            <div className="list-group">
              {universe.skillTrees.map(skillTree=>(
                  <a className="list-group-item list-group-item-action"
                  onClick={()=>navigate(skillTree.id)}
                  key={skillTree.id}>
                    {skillTree.name}
                  </a>
                ))}
            </div>

          </div>
        </>
      }/>
    
      <Route path=":stid/*" element={<SkillTreePage />} />
    </Routes>
    </>
  )
}

export default SkillTreeListPage