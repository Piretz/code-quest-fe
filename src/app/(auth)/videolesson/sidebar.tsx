"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Sidebar: React.FC = () => {
  return (
    <aside className="fixed left-0 top-0 flex flex-col items-center space-y-1 pt-32 h-full w-20">
      {/* Sidebar Buttons (Top Section) */}
      {[ 
        { href: "/Selectmode", src: "/assets/btnhome.png", label: "Home" },
        { href: "/videolesson", src: "/assets/btnlesson.png", label: "Lessons" },
        { href: "/achievements", src: "/assets/btnachi.png", label: "Achievements" },
        { href: "/chats", src: "/assets/btnchat.png", label: "Message" },
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
