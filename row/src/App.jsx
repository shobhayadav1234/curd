import Update from "./Tabledet/Update";
import AddStudent from "./Tabledet/AddStudent";
import StudentTable from "./Tabledet/StudentTable";
import { Routes, Route } from "react-router-dom";



function App() {
return(
      

    <Routes>

        <Route path="/" element={<StudentTable></StudentTable>}></Route>
        <Route path="/Add" element={<AddStudent></AddStudent>}></Route>
        <Route path="/Update/:id" element={<Update></Update>}></Route>

    </Routes>
    
)

}

export default App;


