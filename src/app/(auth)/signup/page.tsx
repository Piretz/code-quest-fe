'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [activeLink, setActiveLink] = useState(''); // Track the active link

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLinkClick = (link: React.SetStateAction<string>) => {
    setActiveLink(link);
  };

  return (
    <div
      style={{ overflow: 'hidden', height: '100vh',}}>
      {/* Header with Navigation Bar */}
      <header
        style={{
          backgroundColor: '#223F77',
          padding: '16px 0',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 10,
        }}
      >
        <nav className="container mx-auto flex justify-between items-center">
          <ul className="flex space-x-10 ml-auto">
            <li>
              <a
                href="#home"
                onClick={() => handleLinkClick('Home')}
                style={{
                  color: activeLink === 'Home' ? 'black' : 'white',
                  fontSize: '1.25rem',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
                }}
                className="hover:text-gray-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => handleLinkClick('About')}
                style={{
                  color: activeLink === 'About' ? 'black' : 'white',
                  fontSize: '1.25rem',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
                }}
                className="hover:text-gray-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#courses"
                onClick={() => handleLinkClick('Courses')}
                style={{
                  color: activeLink === 'Courses' ? 'black' : 'white',
                  fontSize: '1.25rem',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
                }}
                className="hover:text-gray-200"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => handleLinkClick('Contact Us')}
                style={{
                  color: activeLink === 'Contact Us' ? 'black' : 'white',
                  fontSize: '1.25rem',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
                }}
                className="hover:text-gray-200"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="login"
                onClick={() => handleLinkClick('Login')}
                style={{
                  color: activeLink === 'Login' ? 'black' : 'white',
                  fontSize: '1.25rem',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
                }}
                className="hover:text-gray-200"
              >
                Login
              </a>
            </li>
            <li>
              <Link href="/signup">
                <b
                  onClick={() => handleLinkClick('Sign Up')}
                  style={{
                    color: activeLink === 'Sign Up' ? 'black' : 'white',
                    fontSize: '1.25rem',
                    cursor: 'pointer',
                    transition: 'color 0.3s ease',
                  }}
                  className="hover:text-gray-200"
                >
                  Sign Up
                </b>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Clickable Image at the Top */}
      <Link href="/">
        <Image
          src="/assets/SG.png" // Replace with your image path
          alt="Go Back to Homepage"
          width={550} // Adjust the width
          height={0} // Adjust the height
          style={{
            position: 'absolute',
            top: '203px', // Adjust spacing from the top
            left: '120px', // Adjust spacing from the left
            zIndex: 15, // Ensure it's above the header
            cursor: 'pointer', // Make it clear the image is clickable
          }}
        />
      </Link>

      {/* Login Section with Dark Blue Background */}
      <div
        style={{
          backgroundColor: '#223F77',
          height: '100vh',
          width: '100vw',
          margin: 0,
          padding: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row-reverse',
          paddingTop: '60px',
          gap: '50px',
        }}
      >
        {/* BACKGROUND */}
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          {/* Background Image */}
          <Image
            src="/assets/bg.png"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            style={{
              position: 'absolute',
              top: '50%',
              left: '17%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1,
            }}
          />

          {/* Foreground Image */}
          <Image
            src="/assets/final.png"
            alt="Login Illustration"
            width={450}
            height={500}
            style={{
              position: 'relative',
              zIndex: 2,
              marginTop: '90px',
              marginLeft: '900px',
            }}
          />
        </div>

        {/* Login Form */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
              width: '100%',
              maxWidth: '400px',
              position: 'relative',
              zIndex: 2,
            }}
          >
            {/* Full Name Input */}
            <label htmlFor="name" style={{ color: 'white', fontSize: '1rem', marginTop: '100px', marginLeft: '10px', opacity: 1 }}>
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Ex: Johnny Seens"
              style={{
                padding: '10px',
                borderRadius: '3px',
                border: '1px solid #ccc',
                backgroundColor: '#273239',
                color: 'white',
                width: '100%',
                fontSize: '1rem',
                marginLeft:'330px',
              }}
            />

                  {/* Email Input */}
          <label
            htmlFor="email"
            style={{ color: 'white', fontSize: '1rem', marginLeft: '-20px', opacity: 1 }}
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your Email"
            style={{
              padding: '10px',
              borderRadius: '3px',
              border: '1px solid #ccc',
              backgroundColor: '#273239',
              color: 'white',
              width: '100%',
              fontSize: '1rem',
              marginLeft: '330px',
            }}
            />

            {/* Username Input */}
            <label htmlFor="username" style={{ color: 'white', fontSize: '1rem', opacity: 1 }}>
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Choose a username"
              style={{
                padding: '10px',
                borderRadius: '3px',
                border: '1px solid #ccc',
                backgroundColor: '#273239',
                color: 'white',
                width: '100%',
                fontSize: '1rem',
                marginLeft:'330px',

              }}
            />

            {/* Birthday Input */}
            <label htmlFor="birthday" style={{ color: 'white', fontSize: '1rem', marginLeft: '1170px', marginTop: '-270px',opacity: 1 }}>
              Birthday
            </label>
            <input
              id="birthday"
              type="date"
              style={{
                padding: '10px',
                borderRadius: '3px',
                border: '1px solid #ccc',
                backgroundColor: '#273239',
                color: 'white',
                width: '100%',
                fontSize: '1rem',
                marginLeft:'1500px',
                
              }}
            />

            {/* Password Input */}
            <label htmlFor="password" style={{ color: 'white', fontSize: '1rem', marginLeft: '1170px', opacity: 1 }}>
              Password
            </label>
            <div style={{ position: 'relative', width: '100%' }}>
              <input
                id="password"
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Enter your password"
                style={{
                  padding: '10px',
                  borderRadius: '3px',
                  border: '1px solid #ccc',
                  backgroundColor: '#273239',
                  color: 'white',
                  width: '100%',
                  fontSize: '1rem',
                  marginLeft: '750px',
                }}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'transparent',
                  border: 'none',
                  color: '#ccc',
                  cursor: 'pointer',
                }}
              >
                <i className={passwordVisible ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
              </button>
            </div>

            {/* Confirm Password Input */}
            <label htmlFor="confirm-password" style={{ color: 'white', fontSize: '1rem', marginRight: '-1230px', opacity: 1 }}>
              Confirm Password 
            </label>
            <input
              id="confirm-password"
              type="password"
              placeholder="Confirm your password"
              style={{
                padding: '10px',
                borderRadius: '3px',
                border: '1px solid #ccc',
                backgroundColor: '#273239',
                color: 'white',
                width: '100%',
                fontSize: '1rem',
                marginLeft:'1500px',
              }}
            />

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                backgroundColor: '#000000',
                color: 'white',
                padding: '10px 0',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer',
                fontSize: '18px',
                width: '20%',
                marginTop: '100px',
                marginLeft:'2000px',
              }}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}