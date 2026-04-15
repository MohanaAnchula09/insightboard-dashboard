import { salesData } from "../data/data";

function Reports({ selectedCategory, setSelectedCategory }) {
  // Filter logic
  const filteredData =
    selectedCategory === "All"
      ? salesData
      : salesData.filter(
          (item) => item.category === selectedCategory
        );

  // Export function (dynamic)
  const exportToCSV = () => {
    const csvData = filteredData.map(
      (item) => `${item.name},${item.sales},${item.category}`
    );

    const csvContent =
      "Month,Sales,Category\n" + csvData.join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv",
    });

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "report.csv";
    a.click();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Reports</h2>

      {/* 🔽 Filter */}
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

      {/* 📤 Export */}
      <button onClick={exportToCSV} style={{ marginBottom: "20px" }}>
        Export Report
      </button>

      {/* 📊 Table */}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Month</th>
            <th>Sales</th>
            <th>Category</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.sales}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Reports;