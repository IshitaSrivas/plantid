import { BrowserRouter as Router, Routes, Route, useSearchParams } from "react-router-dom";
import "./App.css";
import PlantDetails from "./components/PlantDeatils";
import Encrypt from "./components/Encrypt";
import plantData from "./components/Details.json"; // Adjust the import path as needed
// Base64 decryption
function decrypt(text) {
  try {
    return decodeURIComponent(escape(atob(text)));
  } catch {
    return "";
  }
}

function PlantDetailsWrapper() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const plant = plantData.find(p => p.id.toString() === id);
  if (!plant) {
    return <div className="text-center text-white-500">Plant not found</div>;
  }
  return (
    <PlantDetails
     name ={plant.name}
     uses={plant.uses}
     botanical_name={plant.botanical_name}
     description={plant.description}
     family={plant.family} 
    />
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<PlantDetailsWrapper />} />
          <Route path="/encrypt" element={<Encrypt />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;