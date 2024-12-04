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

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div style={{ overflow: 'hidden', height: '100vh' }}>
      {/* Header with Navigation Bar */}
      <header
        style={{
          backgroundColor: '#223F77',
          padding: '16px 0',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 2,
        }}
      >
        <nav className="container mx-auto flex justify-between items-center">
          <ul className="flex space-x-10 ml-auto">
            {['Home', 'About', 'Courses', 'Contact Us', 'Login'].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  onClick={() => handleLinkClick(link)}
                  style={{
                    color: activeLink === link ? 'black' : 'white',
                    fontSize: '1.25rem',
                    cursor: 'pointer',
                    transition: 'color 0.3s ease',
                  }}
                  className="hover:text-gray-200"
                >
                  {link}
                </a>
              </li>
            ))}
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
          src="/assets/back button.png" // Replace with your image path
          alt="Go Back to Homepage"
          width={586} // Adjust the width
          height={0} // Adjust the height
          style={{
            position: 'absolute',
            top: '175px', // Adjust spacing from the top
            left: '590px', // Center image horizontally
            transform: 'translateX(-50%)', // Center image horizontally
            zIndex: 3, // Ensure it's above the header
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
            width={1600}
            height={1600}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1,
              objectFit: 'contain',
            }}
          />

          {/* Foreground Image */}
          <Image
            src="/assets/character.png"
            alt="Login Illustration"
            width={550}
            height={550}
            style={{
              position: 'relative',
              zIndex: 4,
              marginTop: '30px',
              marginLeft: '1000px',
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
              zIndex: 5,
            }}
          >
            {/* Username Input */}
            <label
              htmlFor="username"
              style={{
                color: 'white',
                fontSize: '1rem',
                opacity: 0.7,
                marginLeft: '-2920px',
                marginTop:'-60px',
              }}
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              style={{
                padding: '7px',
                borderRadius: '3px',
                border: '1px solid #ccc',
                backgroundColor: '#273239',
                color: 'white',
                width: '400px',
                height: '40px',
                fontSize: '1rem',
                marginLeft: '-2600px',
              }}
            />

            {/* Password Input */}
            <label
              htmlFor="password"
              style={{
                color: 'white',
                fontSize: '1rem',
                opacity: 0.7,
                marginLeft: '-2920px',
              }}
            >
              Password
            </label>
            <div style={{ position: 'relative', width: '100%' }}>
              <input
                id="password"
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Password"
                style={{
                  padding: '7px',
                  borderRadius: '3px',
                  border: '1px solid #ccc',
                  backgroundColor: '#273239',
                  color: 'white',
                  width: '400px',
                  height: '40px',
                  fontSize: '1rem',
                  marginLeft: '-1500px',
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

            {/* Login Button */}
            <button
              type="submit"
              style={{
                backgroundColor: '#000000',
                color: 'white',
                padding: '7px 0',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer',
                fontSize: '18px',
                width: '400px',
                marginTop: '20px',
                position: 'fixed', // Fixed to stay on the left side
                left: '412px', // Adjust position from the left edge
                top: '530px', // Vertically center it on the screen
                transform: 'translateY(-50%)', // Correct vertical alignment
                zIndex: 10, // Ensure it's above other elements
              }}
            >
              Login
            </button>
          </form>

          {/* Divider Line */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '400px', // Increase the width to make the line longer
              margin: '20px 0',
              marginLeft: '-2600px', // Shift it further left to accommodate the extended line
              marginTop: '70px',
              zIndex: 90,
            }}
          >
            <hr
              style={{
                flex: 1,
                border: '1px solid white',
                opacity: 0.7,
              }}
            />
            <span
              style={{
                color: 'white',
                padding: '0 10px',
                fontSize: '16px',
                opacity: 0.7,
              }}
            >
              or
            </span>
            <hr
              style={{
                flex: 1,
                border: '1px solid white',
                opacity: 0.7,
              }}
            />
          </div>

          {/* Social Login Section */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
            }}
          >
            {/* Facebook Image */}
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <Image
                src="/assets/fb.png"
                alt="Facebook Login"
                width={80}
                height={80}
                style={{
                  position: 'absolute',
                  top: '64%',
                  left: '27%',
                  zIndex: 5,
                  cursor: 'pointer',
                }}
              />
            </a>

            {/* Google Image */}
            <Image
              src="/assets/google.png"
              alt="Google Login"
              width={80}
              height={80}
              style={{
                position: 'absolute',
                top: '64%',
                left: '33%',
                zIndex: 5,
                cursor: 'pointer',
              }}
            />
          </div>

          {/* Forgot Password Section */}
          <div
            style={{
              position: 'absolute',
              top: '70%', // Adjust to place it below the social login icons
              left: '32%', // Center align it relative to the icons
              transform: 'translateX(-50%)', // Ensure alignment with the social login icons
              zIndex: 6,
              textAlign: 'center',
            }}
          >
            <Link href="/reset-password">
              <span
                style={{
                  color: 'white',
                  fontSize: '16px',
                  opacity: 0.7,
                  cursor: 'pointer',
                }}
              >
                Forgot Password? <b style={{ color: '#FF0000' }}>Reset Password</b>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
