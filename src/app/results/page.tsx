/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { resultsData } from "@/app/data/resultData"; // adjust this path as needed

export default function ResultsTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("All");

  const terms = [
    "All",
    "Spring 2023",
    "Fall 2023",
    "Spring 2024",
    "Fall 2024",
    "Spring 2025",
  ];

  const filteredData = resultsData.filter((item) => {
    const matchesSearch =
      item.id.toString().includes(searchTerm.toLowerCase()) ||
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sgpa.toString().includes(searchTerm.toLowerCase()) ||
      item.cgpa.toString().includes(searchTerm.toLowerCase());

    const matchesFilter = filterTerm === "All" || item.term === filterTerm;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6 p-4 md:p-8">
      <h2 className="text-2xl font-bold">Your Results</h2>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <Input
          placeholder="Search by term, ID, SGPA, or CGPA..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:max-w-md"
        />
        <Select
          value={filterTerm}
          onValueChange={(value) => setFilterTerm(value)}
        >
          <SelectTrigger className="sm:w-[180px] w-full">
            <SelectValue placeholder="All Terms" />
          </SelectTrigger>
          <SelectContent>
            {terms.map((term) => (
              <SelectItem key={term} value={term}>
                {term}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="rounded-xl border bg-white shadow-sm overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-teal-50 text-base">
              <TableHead>ID</TableHead>
              <TableHead>Term</TableHead>
              <TableHead>Grading Points</TableHead>
              <TableHead>Cumulative GP</TableHead>
              <TableHead>CR</TableHead>
              <TableHead>Total CR</TableHead>
              <TableHead>SGPA</TableHead>
              <TableHead>CGPA</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((result: any) => (
              <TableRow key={result.id}>
                <TableCell>{result.id}</TableCell>
                <TableCell className="font-medium text-teal-700 py-3 px-4">
                  {result.term}
                </TableCell>
                <TableCell>{result.gradingPoints}</TableCell>
                <TableCell>{result.cumulativeGp}</TableCell>
                <TableCell>{result.cr}</TableCell>
                <TableCell>{result.totalCr}</TableCell>
                <TableCell className="text-green-600 font-semibold">
                  {result.sgpa}
                </TableCell>
                <TableCell className="text-blue-600 font-semibold">
                  {result.cgpa}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
