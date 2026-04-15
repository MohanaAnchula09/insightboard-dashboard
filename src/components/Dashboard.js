import { salesData } from "../data/data";
import LineChartComponent from "./charts/LineChartComponent";
import BarChartComponent from "./charts/BarChartComponent";
import PieChartComponent from "./charts/PieChartComponent";
import "../styles.css";

function Dashboard({ selectedCategory, setSelectedCategory }) {
  const filteredData =
  selectedCategory === "All"
    ? salesData
    : salesData.filter(
        (item) => item.category === selectedCategory
      );
      const totalSales = filteredData.reduce(
        (sum, item) => sum + item.sales,
        0
      );
      const totalRevenue = filteredData.reduce(
        (sum, item) => sum + item.sales * 10,
        0
      );
      let growth = 0;

      if (filteredData.length > 1) {
        const last = filteredData[filteredData.length - 1].sales;
        const prev = filteredData[filteredData.length - 2].sales;

        growth = ((last - prev) / prev) * 100;
      }
  return (
    <div className="container">
      <h3>Sales Dashboard</h3>
      <div style={{ marginBottom: "20px" }}>
          <label>Select Category: </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Furniture">Furniture</option>
          </select>
        </div>
      <div className="flex"> 
        <div className="card">
          <LineChartComponent data={filteredData} />
        </div>

        <div className="card">
          <BarChartComponent data={filteredData} />
        </div>

        <div className="card">
          <PieChartComponent data={filteredData} />
        </div>
      </div>
      <div className="card">
          <div style={{ background: "#3498db", color: "white", padding: "20px" }}>
            <h4>Total Sales</h4>
            <p>{totalSales}</p>
          </div>

          <div style={{ background: "#2ecc71", color: "white", padding: "20px" }}>
            <h4>Revenue</h4>
            <p>{totalRevenue}</p>
          </div>

          <div style={{ background: "#e74c3c", color: "white", padding: "20px" }}>
            <h4>Growth</h4>
            <p>{growth.toFixed(2)}%</p>
          </div>
        </div>
    </div>
  );
}

export default Dashboard;