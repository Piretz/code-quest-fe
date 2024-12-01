export default function Page() {
  return (
    <div
      style={{
        overflow: 'hidden', // Prevent scrolling by hiding overflow
        height: '100vh',    // Ensure the page takes up the full height
      }}
    >
      {/* Header with Navigation Bar */}
      <header
        style={{
          backgroundColor: '#223F77',  // Background color matching the background
          padding: '16px 0',          // Add some padding for spacing
          position: 'fixed',          // Fix the header position at the top
          top: 0,                     // Make sure it stays at the top
          left: 0,                    // Align it to the left side
          width: '100%',              // Ensure it spans the entire width
          zIndex: 10,                 // Ensure it stays on top of other content
        }}
      >
        <nav className="container mx-auto flex justify-between items-center">
          {/* Aligning navigation items to the right */}
          <ul className="flex space-x-10 ml-auto"> {/* ml-auto pushes the list items to the right */}
            <li><a href="#home" className="text-white text-xl hover:text-gray-200">Home</a></li>
            <li><a href="#about" className="text-white text-xl hover:text-gray-200">About</a></li>
            <li><a href="#courses" className="text-white text-xl hover:text-gray-200">Courses</a></li>
            <li><a href="#contact" className="text-white text-xl hover:text-gray-200">Contact Us</a></li>
            <li><a href="#login" className="text-white text-xl hover:text-gray-200">Login</a></li>
            <li><a href="#signup" className="text-white text-xl hover:text-gray-200">Sign Up</a></li>
          </ul>
        </nav>
      </header>

      {/* Login Section with Dark Blue Background */}
      <div
        style={{
          backgroundColor: '#223F77',  // Background color
          height: '100vh',            // Full height of the viewport
          width: '100vw',             // Full width of the viewport
          margin: 0,                  // Ensure no margin
          padding: 0,                 // Ensure no padding
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',   // Stack the content vertically
          paddingTop: '60px',        // Space for the fixed header, adjust accordingly
        }}
      >
        <h1 style={{ color: 'white', marginBottom: '20px' }}>LOGIN</h1>

        {/* Login Form */}
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          {/* Username Label */}
          <label htmlFor="username" style={{ color: 'white', fontSize: '1.2rem', marginLeft: '-650px' }}>
            Username
          </label>
          {/* Username Input */}
          <input
            id="username"
            type="text"
            placeholder="Username"
            style={{
              padding: '5px',
              borderRadius: '3px',
              border: '1px solid #ccc',
              width: '343px',
              fontSize: '1rem',
              marginLeft: '-400px', // Adjust this value to control how far it moves left
            }}
          />

          {/* Password Label */}
          <label htmlFor="password" style={{ color: 'white', fontSize: '1.2rem', marginLeft: '-650px' }}>
            Password
          </label>
          {/* Password Input */}
          <input
            id="password"
            type="password"
            placeholder="Password"
            style={{
              padding: '5px', // Increased padding for a larger height
              borderRadius: '3px',
              border: '1px solid #ccc',
              width: '343px', // Adjusted width for a larger textbox
              fontSize: '1rem',
              marginLeft: '-400px', // Adjust this value to control how far it moves left
            }}
          />

          {/* Login Button */}
          <button
            type="submit"
            style={{
              backgroundColor: '#000000',
              color: 'white',
              padding: '2px 150px',
              border: 'none',
              borderRadius: '3px',
              cursor: 'pointer',
              fontSize: '18px', // Adjust this value to set the text size
              marginLeft: '-400px', // Adjust this value to control how far it moves left
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
