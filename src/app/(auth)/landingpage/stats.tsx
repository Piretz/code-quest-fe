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
    <section className="bg-[#003366] text-white py-16 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`px-4 ${index < stats.length - 1 ? "sm:border-r border-gray-400" : ""}`}
          >
            <p className="text-4xl sm:text-5xl font-bold">{stat.value}</p>
            <p className="mt-2 text-sm sm:text-base">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
