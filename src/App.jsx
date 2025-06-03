import { useLoaderData } from "react-router-dom";
import "./App.css";
import Banner from "./Components/Banner";
import Navber from "./Components/Navber";
import CoffeeCard from "./Components/CoffeeCard";

function App() {

  const coffees = useLoaderData()

 
  return (
    <>
      <div>
        {/* Navber */}
        <nav>
          <Navber />
        </nav>

        {/* Banner */}
        <div className="w-11/12 mx-auto mb-10">
          <Banner />
        </div>
      </div>

    <h2 className="text-3xl font-semibold text-center">Hot Coffees Store</h2>

    <div>
      {
        coffees.map((coffee) => <CoffeeCard key={coffee._id}>{coffee}</CoffeeCard>)
      }
    </div>




    </>
  );
}

export default App;
