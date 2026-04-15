import { salesData } from "../data/data";
import LineChartComponent from "./charts/LineChartComponent";
import BarChartComponent from "./charts/BarChartComponent";

function Analytics({ selectedCategory, setSelectedCategory }) {
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

  const avgSales =
    filteredData.length > 0
      ? totalSales / filteredData.length
      : 0;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Analytics Overview</h2>

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

      <p><strong>Total Sales:</strong> ₹{totalSales}</p>
      <p><strong>Average Sales:</strong> ₹{avgSales.toFixed(2)}</p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1 1 300px" }}>
          <LineChartComponent data={filteredData} />
        </div>

        <div style={{ flex: "1 1 300px" }}>
          <BarChartComponent data={filteredData} />
        </div>
      </div>
    </div>
  );
}

export default Analytics;