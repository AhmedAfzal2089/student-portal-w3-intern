import React from "react";
import { Card } from "@/components/ui/card";
import { GraduationCap, User2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const StudentInfo = () => {
  return (
    <Card>
      <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-0 px-4 py-4">
        {/* Left Section (Student Info) */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-4">
          <User2 className="rounded-xl bg-teal-500 text-white p-4" size={50} />
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <span className="font-semibold text-xl">Ali Mutahir</span>
            <span>L1F260792</span>
            <span className="text-sm text-muted-foreground">
              Faculty of Information and Computer Science
            </span>
            <Badge className="bg-teal-100 text-teal-700 w-fit mt-1">
              <GraduationCap className="mr-1 h-4 w-4" />
              Bs Computer Science
            </Badge>
          </div>
        </div>

        {/* Right Section (Stats) */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-15 mt-4 md:mt-0">
          {/* CGPA */}
          <div className="bg-muted flex flex-col gap-1 h-20 rounded-2xl px-6 items-center justify-center min-w-[120px]">
            <span className="text-xs font-medium text-gray-500">CGPA</span>
            <span className="text-xl font-bold text-gray-900">3.23</span>
          </div>

          {/* Earned Credits */}
          <div className="bg-muted flex flex-col gap-1 h-20 rounded-2xl px-6 items-center justify-center min-w-[120px]">
            <span className="text-xs font-medium text-gray-500">
              EARNED CREDITS
            </span>
            <span className="text-xl font-bold text-emerald-600">69</span>
          </div>

          {/* Total Credits */}
          <div className="bg-muted flex flex-col gap-1 h-20 rounded-2xl px-6 items-center justify-center min-w-[120px]">
            <span className="text-xs font-medium text-gray-500">
              TOTAL CREDITS
            </span>
            <span className="text-xl font-bold text-gray-900">133</span>
          </div>

          {/* In Progress */}
          <div className="bg-muted flex flex-col gap-1 h-20 rounded-2xl px-6 items-center justify-center min-w-[120px]">
            <span className="text-xs font-medium text-gray-500">
              IN PROGRESS
            </span>
            <span className="text-xl font-bold text-orange-500">10</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default StudentInfo;
