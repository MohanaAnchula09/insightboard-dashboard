import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
  } from "recharts";
  
  function BarChartComponent({ data }) {
    return (
      <BarChart width={500} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" />
        <Bar dataKey="sales" fill="#82ca9d" />
      </BarChart>
    );
  }
  
  export default BarChartComponent;
