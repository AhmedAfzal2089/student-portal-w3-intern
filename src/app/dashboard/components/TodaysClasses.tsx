import React from "react";
import { Card } from "@/components/ui/card";
import { Calendar, BookOpen, User, Clock3, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Dummy data
const classSchedule = [
  {
    title: "Web Application Development",
    code: "CSSE3143",
    instructor: "Asad Kamal",
    time: "09:00 AM - 10:30 AM",
    location: "Lab 1",
    type: "Lab",
  },
  {
    title: "Operating Systems",
    code: "CSCS3553",
    instructor: "Dr. Adnan Ghafoor",
    time: "10:45 AM - 12:15 PM",
    location: "Room 204",
    type: "Lecture",
  },
  {
    title: "Data Communication",
    code: "CSCS3113",
    instructor: "Ms. Ayesha Malik",
    time: "01:00 PM - 02:30 PM",
    location: "Room 103",
    type: "Lecture",
  },
];

const TodaysClasses = () => {
  return (
    <Card className="p-6 rounded-lg w-full max-w-screen mt-4">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-4">
        <div className="rounded-md bg-teal-100 p-2">
          <Calendar className="h-6 w-6 text-teal-500" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">Todays Classes</h3>
          <p className="text-sm text-muted-foreground">Monday, Sep 15</p>
        </div>
      </div>

      {/* Scrollable Class Cards */}
      <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
        {classSchedule.map((cls, index) => (
          <div
            key={index}
            className="border rounded-xl p-4 flex justify-between items-start"
          >
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4 text-teal-500" />
                <h4 className="font-semibold">{cls.title}</h4>
              </div>
              <p className="text-sm text-muted-foreground">{cls.code}</p>

              <div className="flex items-center text-sm space-x-2 mt-1">
                <User className="w-4 h-4 text-gray-500" />
                <span>{cls.instructor}</span>
              </div>

              <div className="flex items-center text-sm space-x-2">
                <Clock3 className="w-4 h-4 text-gray-500" />
                <span>{cls.time}</span>
              </div>

              <div className="flex items-center text-sm space-x-2">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span>{cls.location}</span>
              </div>
            </div>

            <Badge className="bg-blue-100 text-blue-600">{cls.type}</Badge>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4 text-sm">
        <p className="text-muted-foreground">
          {classSchedule.length} classes scheduled
        </p>
        <a
          href="#"
          className="text-sm text-emerald-600 font-medium hover:underline"
        >
          View Full Schedule
        </a>
      </div>
    </Card>
  );
};

export default TodaysClasses;
