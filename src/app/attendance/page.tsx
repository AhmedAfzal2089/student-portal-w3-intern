import React from "react";

const attendanceData = [
  {
    course: "Web Development",
    total: 42,
    present: 36,
    absent: 6,
    percent: 85.7,
    status: "Good Standing",
    statusColor: "green",
  },
  {
    course: "Object Oriented Programming",
    total: 38,
    present: 32,
    absent: 6,
    percent: 84.2,
    status: "Good Standing",
    statusColor: "green",
  },
  {
    course: "Data Structures",
    total: 45,
    present: 41,
    absent: 4,
    percent: 91.1,
    status: "Good Standing",
    statusColor: "green",
  },
  {
    course: "Database Systems",
    total: 40,
    present: 35,
    absent: 5,
    percent: 87.5,
    status: "Good Standing",
    statusColor: "green",
  },
  {
    course: "Computer Networks",
    total: 35,
    present: 28,
    absent: 7,
    percent: 80,
    status: "Below Average",
    statusColor: "yellow",
  },
  {
    course: "Software Engineering",
    total: 48,
    present: 30,
    absent: 18,
    percent: 62.5,
    status: "Poor Attendance",
    statusColor: "red",
  },
];

const getStatusClasses = (color: string) => {
  switch (color) {
    case "green":
      return "bg-green-100 text-green-700";
    case "yellow":
      return "bg-yellow-100 text-yellow-700";
    case "red":
      return "bg-red-100 text-red-700";
    default:
      return "";
  }
};

const getProgressBarColor = (color: string) => {
  switch (color) {
    case "green":
      return "bg-green-500";
    case "yellow":
      return "bg-yellow-400";
    case "red":
      return "bg-red-500";
    default:
      return "bg-gray-400";
  }
};

export default function AttendanceOverview() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-1">Attendance Overview</h1>
      <p className="text-base text-gray-600 mb-6">
        Your attendance record across all courses
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {attendanceData.map((course) => (
          <div
            key={course.course}
            className="bg-white rounded-lg p-5 shadow-md flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-semibold text-xl text-gray-900">
                {course.course}
              </h2>
              <span
                className={`text-sm font-semibold px-2.5 py-0.5 rounded-full ${getStatusClasses(
                  course.statusColor
                )}`}
              >
                {course.percent.toFixed(1)}%
              </span>
            </div>

            <div className="flex justify-between text-center text-base font-semibold text-gray-900 mb-2">
              <div>
                <p className="text-2xl">{course.total}</p>
                <p className="text-sm font-normal">Total</p>
              </div>
              <div>
                <p className="text-2xl text-green-600">{course.present}</p>
                <p className="text-sm font-normal">Present</p>
              </div>
              <div>
                <p className="text-2xl text-red-600">{course.absent}</p>
                <p className="text-sm font-normal">Absent</p>
              </div>
            </div>

            <div className="w-full h-3 bg-gray-300 rounded-full overflow-hidden mb-3">
              <div
                style={{ width: `${course.percent}%` }}
                className={`${getProgressBarColor(
                  course.statusColor
                )} h-3 rounded-full`}
              />
            </div>

            <p
              className={`font-semibold text-base ${
                course.statusColor === "green"
                  ? "text-green-600"
                  : course.statusColor === "yellow"
                  ? "text-yellow-600"
                  : "text-red-600"
              } flex items-center`}
            >
              {course.statusColor === "green" && "✓"}
              {course.statusColor === "yellow" && "⚠"}
              {course.statusColor === "red" && "✗"}{" "}
              <span className="ml-2">{course.status}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
