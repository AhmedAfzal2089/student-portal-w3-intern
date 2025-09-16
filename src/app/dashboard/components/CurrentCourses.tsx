import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, User, CalendarDays, BarChart } from "lucide-react";

// Importing the JSON file
import courseData from "@/app/data/courses.json";

const getAttendanceBadgeColor = (attendance: number) => {
  if (attendance >= 85) return "bg-green-100 text-green-700";
  if (attendance >= 75) return "bg-yellow-100 text-yellow-700";
  return "bg-red-100 text-red-700";
};

const CurrentCourses = () => {
    return (
      <Card className="p-6 rounded-lg w-full mt-5">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="rounded-md bg-teal-100 p-2">
            <BookOpen className="h-6 w-6 text-teal-500" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Current Courses</h3>
            <p className="text-sm text-muted-foreground">
              Spring 2025 • {courseData.length} Enrolled Courses
            </p>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courseData.map((course, index) => (
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
      </Card>
    );
};

export default CurrentCourses;
