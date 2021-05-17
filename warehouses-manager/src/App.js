import './App.css';
import Fuse from "fuse.js";
import warehouseList from "./warehouses.json"
import WarehouseList from "./warehouse-list"
import SearchBar from "./searchbar"
import {useState} from "react"
function App() {
    const [data, setData] = useState(warehouseList);
    const searchData = (query) => {
    if (!query) {
      setData(warehouseList);
      return;
    }

    const fuse = new Fuse(data, {
      keys: ["name", "city"],
    });

    const result = fuse.search(query);
    const finalResult = [];
    if (result.length) {
      result.forEach((item) => {
        finalResult.push(item.item);
      });
      setData(finalResult);
    } else {
      setData([]);
    }
  };
  return (
    <div className="App">
        <h1>Warehouses Manager</h1>
        <SearchBar placeholder="Search"
        onChange={(e) => searchData(e.target.value)} />
      <WarehouseList warehouses={data} />
    </div>
  );
}

export default App;
