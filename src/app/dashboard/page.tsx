import React from "react";
import CreditHoursCard from "./components/CreditHoursCard";
import StudentInfo from "./components/StudentInfo";

const Dashboard = () => {
  return (
    <div>
      <StudentInfo />
      <CreditHoursCard />
    </div>
  );
};

export default Dashboard;
