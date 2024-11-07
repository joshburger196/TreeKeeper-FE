import { Route, Routes, useNavigate } from "react-router-dom"
import SkillTreeListPage from "./SkillTreeListPage"
import { testData } from '../assets/staticDevData';
import HeaderBar from "../components/HeaderBar";

const UniverseListPage = () => {

  const navigate=useNavigate();

  return (
    <>
      <Routes>
        <Route path="" element={
          <>
          <HeaderBar title="Your Universes"/>
          <div className="container first-container">

            <div className="list-group">
              {testData.map(universe=>(
                  <a className="list-group-item list-group-item-action"
                  onClick={()=>navigate(universe.id)}
                  key={universe.id}>
                    {universe.name}
                  </a>
                ))}
            </div>

          </div>
          </>
        }/>
      
        <Route path=":unid/*" element={<SkillTreeListPage />} />
      </Routes>
    </>
  )
}

export default UniverseListPage