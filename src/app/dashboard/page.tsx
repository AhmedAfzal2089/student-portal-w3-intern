import React from "react";
import CreditHoursCard from "./components/CreditHoursCard";
import StudentInfo from "./components/StudentInfo";
import TodaysClasses from "./components/TodaysClasses";
import CurrentCourses from "./components/CurrentCourses";

const Dashboard = () => {
  return (
    <div>
      <StudentInfo />
      <CreditHoursCard />
      <TodaysClasses />
      <CurrentCourses />
    </div>
  );
};

export default Dashboard;
