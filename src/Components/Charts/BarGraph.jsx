import React from "react";
import { Bar } from "react-chartjs-2"; // Import Bar component
import { LinearScale, CategoryScale } from "chart.js"; // Import necessary scales
import data from "../Api/Data.json";

// ... Rest of your code ...

const BarGraph = () => {
  const { data: chartData } = data;

  const labels = chartData.map((item) => item.name);
  const studentsData = chartData.map((item) => item.students);

  const barChartData = {
    labels: labels,
    datasets: [
      {
        label: "Students Enrolled",
        backgroundColor: "#4F46E5",
        borderColor: "#4F46E5",
        borderWidth: 1,
        hoverBackgroundColor: "#6C63FF",
        hoverBorderColor: "#6C63FF",
        data: studentsData,
      },
    ],
  };

  CategoryScale.id = "category"; // Ensure that 'category' scale is registered
  LinearScale.id = "linear";
  const options = {
    scales: {
      x: {
        type: "category", // Use 'category' scale for the x-axis if you are using category labels
      },
      y: {
        beginAtZero: true, // Start the y-axis at zero
      },
    },
  };

  return (
    <div className="w-full max-w-md m-auto">
      <h2 className="text-2xl font-bold text-center mb-4">
        Student Enrollment
      </h2>
      <div className="bg-white shadow-md p-4">
        <Bar data={barChartData}  />
      </div>
    </div>
  );
};

export default BarGraph;
