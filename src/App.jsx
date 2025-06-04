import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./Components/CoffeeCard";
import { useState } from "react";
import Banner from "./Components/Banner";

function App() {
  const loadedData = useLoaderData();
  const [coffees, setCoffees] = useState(loadedData);

  return (
    <>
      {/* Banner */}
      <div className="w-11/12 mx-auto mb-10">
        <Banner />
      </div>

      <h2 className="text-3xl font-semibold text-center">Hot Coffees Store</h2>

      <div className="grid md:grid-cols-2 m-4 w-10/12 mx-auto">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </>
  );
}

export default App;
