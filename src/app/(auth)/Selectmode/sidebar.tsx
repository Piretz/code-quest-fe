"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Sidebar: React.FC = () => {
  return (
    <aside className="flex flex-col items-center space-y-10 pt-24 -translate-x-3 h-0">
      {/* Sidebar Buttons */}
      {[
        { href: "/Selectmode", src: "/assets/btnhome.png", label: "Home" },
        { href: "/lesson", src: "/assets/btnlesson.png", label: "Lessons" },
        { href: "/achievements", src: "/assets/btnachi.png", label: "Achievements" },
        { href: "/darkmode", src: "/assets/btndark.png", label: "Dark Mode" },
        { href: "/info", src: "/assets/btninfo.png", label: "Info" },
        { href: "/landingpage", src: "/assets/btnsignout.png", label: "Sign Out" },
      ].map((btn, index) => (
        <Link href={btn.href} key={index} passHref>
          <button
            className="flex items-center justify-center bg-transparent border-none rounded-full"
            aria-label={btn.label}
          >
            <Image
              src={btn.src}
              alt={btn.label}
              width={90}
              height={50}
              className="object-cover transition-transform transform hover:scale-110 cursor-pointer"
            />
          </button>
        </Link>
      ))}

      {/* Footer Buttons */}
      <div className="mt-auto translate-y-32">
        {[ 
          { href: "/darkmode", src: "/assets/btndark.png", label: "Dark Mode" },
          { href: "/info", src: "/assets/btninfo.png", label: "Info" },
          { href: "/landingpage", src: "/assets/btnsignout.png", label: "Sign Out" },
        ].map((btn, index) => (
          <Link href={btn.href} key={index} passHref>
            <button
              className="flex items-center justify-center bg-transparent border-none rounded-full"
              aria-label={btn.label}
            >
              <Image
                src={btn.src}
                alt={btn.label}
                width={90}
                height={50}
                className="object-cover transition-transform transform hover:scale-110 cursor-pointer"
              />
            </button>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
