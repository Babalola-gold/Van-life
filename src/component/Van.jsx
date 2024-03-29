import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_URL } from "./constantant/api";

const Van = () => {
  const [vans, setVans] = useState([]);
  const [filteredVans, setFilteredVans] = useState([]);
  const URL = `${API_URL}/api/vans`;

  useEffect(() => {
    axios.get(URL)
      .then(response => {
        setVans(response.data);
        setFilteredVans(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filterVansByType = (type) => {
    const filtered = vans.filter(van => van.type.toLowerCase() === type.toLowerCase());
    setFilteredVans(filtered);
  };

  const clearFilter = () => {
    setFilteredVans(vans); 
    };

  return (
    <main>
      <div className="font-bold text-3xl px-10">
        <h1>Explore our van options</h1>
      </div>
      <nav className="px-10 my-10 flex justify-between flex-wrap">
        <div className="flex gap-4 flex-wrap">
          <button className="bg-orange-200 p-3 flex justify-center rounded" onClick={() => filterVansByType('simple')}>
            Simple
          </button>
          <button className="bg-orange-200 p-3 flex justify-center rounded" onClick={() => filterVansByType('luxury')}>
            Luxury
          </button>
          <button className="bg-orange-200 p-3 flex justify-center rounded" onClick={() => filterVansByType('rugged')}>
            Rugged
          </button>
        </div>
        <div>
          <button className="border-b-2 border-black p-1" onClick={clearFilter}>
            Clear Filter
          </button>
        </div>
      </nav>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        {
          filteredVans.map((van) => (
            <Link to={`/api/vans/${van.id}`} key={van.id}>
              <div className="rounded p-5">
                <img src={van.imageUrl} alt={van.name} className="w-full" />
                <h2 className="text-xl font-bold">{van.name}</h2>
                <p className="text-gray-600">${van.price}</p>
                <button className="bg-orange-200 p-3 rounded">
                  {van.type}
                </button>
              </div>
            </Link>
          ))
        }
      </div>
    </main>
  );
};

export default Van;
