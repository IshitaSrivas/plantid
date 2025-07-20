 // Adjust the import path as needed
import cloud from "../assets/cloud.png"; // Adjust path as needed
 // Adjust path as needed

function PlantDetails({name,uses,botanical_name,description,family }) {
 

  return (
    <>
 
      <img className="absolute left-[5vw] top-[3vh]" src={cloud} alt="cloud" />
      <div className="flex w-[90%] flex-col md:flex-row items-center md:items-start h-[90%] bg-[#F0F0F0] rounded-xl shadow-lg p-2 mx-auto">
        <div className="text-3xl font-extrabold text-[#02510B] mt-2">क्या आप जानते हैं?</div>
       
        <div className="w-full h-[100%] overflow-scroll justify-start md:w-3/5 md:h-[100%] flex flex-col md:justify-center items-center p-4">
          <h2 className="text-2xl font-extrabold mb-2 text-[#02510B]">{name}</h2>
           <p className="text-[#2e9e21] text-lg">Family: {family}</p>
          <p className="text-[#2e9e21] text-lg">Botanical Name: {botanical_name}</p>
           <p className="text-gray-700 text-start font-semibold mt-2">{description}</p>
            {
          uses && uses.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-[#02510B]">Uses:</h3>
            <ul className="list-disc items-start font-semibold text-gray-700">
              {uses.map((use, index) => (
                <li key={index} className="mb-1 text-start">{use}</li>
              ))}
            </ul>
          </div>
        )
        }
        </div>
       
      </div>
    </>
  );
}

export default PlantDetails;