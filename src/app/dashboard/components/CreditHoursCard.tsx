import { Card } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { BookOpen, ChartSpline, GitGraph } from "lucide-react";
import React from "react";

const CreditHoursCard = () => {
  const completed = 69;
  const total = 133;
  const percentage = Math.round((completed / total) * 100);
  const gpa = 3.37;
  const maxGpa = 4;
  const percentage2 = Math.round((gpa / maxGpa) * 100);
  return (
    <>
      <div className="flex gap-2 ">
        <Card className="w-[50%] mt-5 p-6 rounded-lg">
          {/* Header */}
          <div className="flex items-center space-x-3 mb-4">
            <div className="rounded-md bg-teal-100 p-2">
              <BookOpen className="h-6 w-6 text-teal-500" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Credit Hours</h3>
              <p className="text-sm text-muted-foreground">Academic Progress</p>
            </div>
          </div>

          {/* Circular Progress */}
          <div className="flex justify-center my-4">
            <div className="relative w-32 h-32">
              <svg
                className="transform -rotate-90"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="text-gray-300"
                  strokeWidth="3"
                  stroke="currentColor"
                  fill="none"
                  cx="18"
                  cy="18"
                  r="15.9155"
                />
                <circle
                  className="text-teal-500"
                  strokeWidth="3"
                  strokeDasharray={`${percentage}, 100`}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  cx="18"
                  cy="18"
                  r="15.9155"
                />
              </svg>

              {/* Centered Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-lg font-bold">{percentage}%</p>
                <p className="text-xs text-muted-foreground">
                  {completed} | {total}
                </p>
                <p className="text-xs text-muted-foreground">Credits</p>
              </div>
            </div>
          </div>

          {/* Legend and Hrs Info */}
          <div className="mt-6 flex justify-between text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-teal-500"></div>
              <p>Completed</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <p>Remaining</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">{completed} hrs</p>
              <p className="text-muted-foreground">
                {total - completed} hrs left
              </p>
            </div>
          </div>
        </Card>
        <Card className="w-full md:w-[50%] mt-5 p-6 rounded-lg">
          {/* Header */}
          <div className="flex items-center space-x-3 mb-4">
            <div className="rounded-md bg-teal-100 p-2">
              <ChartSpline className="h-6 w-6 text-teal-500" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">GPA</h3>
              <p className="text-sm text-muted-foreground">
                Academic Performance
              </p>
            </div>
          </div>

          {/* Circular Progress */}
          <div className="flex justify-center md:justify-center my-4">
            <div className="relative w-32 h-32">
              <svg
                className="transform -rotate-90"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="text-gray-300"
                  strokeWidth="3"
                  stroke="currentColor"
                  fill="none"
                  cx="18"
                  cy="18"
                  r="15.9155"
                />
                <circle
                  className="text-teal-500"
                  strokeWidth="3"
                  strokeDasharray={`${percentage}, 100`}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  cx="18"
                  cy="18"
                  r="15.9155"
                />
              </svg>

              {/* Centered Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <p className="text-lg font-bold text-foreground">
                  {percentage2}%
                </p>
                <p className="text-xs text-muted-foreground">
                  {gpa} / {maxGpa}
                </p>
                <p className="text-xs text-muted-foreground">GPA</p>
              </div>
            </div>
          </div>

          {/* Footer Info */}
          <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center text-sm gap-3">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-teal-500"></div>
              <p>Current GPA</p>
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <p>Letter Grade</p>
            </div>

            <div className="text-right flex flex-col items-end">
              <p className="font-semibold text-base">{gpa}</p>
              <Badge className="bg-blue-100 text-blue-600">B+</Badge>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default CreditHoursCard;
