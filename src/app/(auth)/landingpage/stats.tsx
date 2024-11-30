"use client";
import React from "react";

const Stats = () => {
  const stats = [
    { value: "500+", label: "Courses" },
    { value: "500+", label: "Students" },
    { value: "100+", label: "Tutors" },
    { value: "1000+", label: "Graduates" },
  ];

  return (
    <section className="bg-[#003366] text-white py-20 grid grid-cols-2 sm:grid-cols-4 text-center">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`text-lg px-4 ${index !== stats.length - 1 ? "border-r border-white " : ""}`} // Add border-right except for the last item
        >
          <p className="text-5xl font-bold">{stat.value}</p>
          <p className="mt-4 text-center">{stat.label}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
