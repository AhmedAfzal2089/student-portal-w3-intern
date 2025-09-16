/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { User, CalendarDays, BarChart, BookOpen } from "lucide-react"; // Assuming you're using lucide icons
import { Badge } from "@/components/ui/badge"; // Customize this based on your UI lib

// Course data
const courseData = [
  {
    title: "Web Application Development",
    code: "CSSE3143",
    instructor: "Asad Kamal",
    credits: 3,
    status: "Active",
    gradeLink: "/grades/web-app-dev",
    attendance: 86.0,
  },
  {
    title: "Operating Systems - Lab",
    code: "CSCS3551",
    instructor: "Qaisar Aslam",
    credits: 1,
    status: "Active",
    gradeLink: "/grades/os-lab",
    attendance: 90.0,
  },
  {
    title: "Introduction to Software Engineering",
    code: "CSSE3113",
    instructor: "Muhammad Basit Ali Gillani",
    credits: 3,
    status: "Active",
    gradeLink: "/grades/software-eng",
    attendance: 79.0,
  },
  {
    title: "Operating Systems",
    code: "CSCS3553",
    instructor: "Dr Adnan Ghafoor",
    credits: 3,
    status: "Active",
    gradeLink: "/grades/os",
    attendance: 81.0,
  },
];

// Utility for attendance color
function getAttendanceBadgeColor(attendance: any) {
  if (attendance >= 85) return "bg-green-100 text-green-600";
  if (attendance >= 80) return "bg-yellow-100 text-yellow-600";
  return "bg-red-100 text-red-600";
}

export default function CourseList() {
  const [filter, setFilter] = useState("All");

  const filteredCourses =
    filter === "All"
      ? courseData
      : courseData.filter((course) =>
          filter === "Active"
            ? course.status === "Active"
            : course.status === "Withdrawn"
        );

  const activeCount = courseData.filter((c) => c.status === "Active").length;
  const withdrawnCount = courseData.filter(
    (c) => c.status === "Withdrawn"
  ).length;

  return (
    <div className="p-6 rounded-lg bg-white shadow mt-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-3">
          <div className="rounded-md bg-teal-100 p-2">
            <BookOpen className="h-6 w-6 text-teal-500" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Course List</h3>
            <p className="text-sm text-muted-foreground">
              Spring 2025 • {courseData.length} Enrolled Courses
            </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex space-x-2">
          {["All", "Active", "Withdrawn"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-3 py-1 rounded-md border ${
                filter === type
                  ? "bg-emerald-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {type === "Withdrawn" ? "Withdraw" : type + " Courses"}
            </button>
          ))}
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCourses.map((course, index) => (
          <div key={index} className="border rounded-xl bg-green-50/20 p-4">
            {/* Top Bar */}
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold text-teal-800">{course.title}</h4>
              <Badge className="bg-green-100 text-green-600">
                {course.status}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-2">{course.code}</p>

            {/* Instructor */}
            <div className="flex items-center space-x-2 text-sm mb-1">
              <User className="w-4 h-4 text-gray-500" />
              <span>{course.instructor}</span>
            </div>

            {/* Credits */}
            <div className="flex items-center space-x-2 text-sm mb-1">
              <CalendarDays className="w-4 h-4 text-gray-500" />
              <span>
                Credits: <span className="font-semibold">{course.credits}</span>
              </span>
            </div>

            {/* Grade */}
            <div className="flex items-center space-x-2 text-sm mb-1">
              <BarChart className="w-4 h-4 text-gray-500" />
              <span>
                Grade:{" "}
                <a
                  href={course.gradeLink}
                  className="text-emerald-600 font-medium hover:underline"
                >
                  view progress
                </a>
              </span>
            </div>

            {/* Attendance */}
            <div className="flex items-center space-x-2 text-sm mt-2">
              <span>Attendance:</span>
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${getAttendanceBadgeColor(
                  course.attendance
                )}`}
              >
                {course.attendance}%
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-6 text-sm text-muted-foreground">
        <div className="flex space-x-4">
          <div className="flex items-center space-x-1">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
            <span>Active Classes ({activeCount})</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="w-2 h-2 rounded-full bg-red-500 inline-block"></span>
            <span>Withdraw ({withdrawnCount})</span>
          </div>
        </div>
        <div>
          Showing {filteredCourses.length} of {courseData.length} courses
        </div>
      </div>
    </div>
  );
}
