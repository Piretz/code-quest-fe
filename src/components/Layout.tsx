
import { ReactNode } from "react";
import { FaHome, FaBook, FaClipboard, FaComments, FaLightbulb } from "react-icons/fa";


interface Layout {
  children: ReactNode;
}

const Layout: React.FC<Layout> = ({ children }) => {
  return (
    <div className="flex h-screen bg-darkBlue text-white">
      {/* Sidebar */}
      <aside className="w-20 bg-accentPurple flex flex-col items-center py-4">
        <div className="text-2xl font-bold mb-6">QCUNITE</div>
        <nav className="flex flex-col space-y-6">
          <FaHome className="text-xl hover:text-accentYellow cursor-pointer" />
          <FaBook className="text-xl hover:text-accentYellow cursor-pointer" />
          <FaClipboard className="text-xl hover:text-accentYellow cursor-pointer" />
          <FaComments className="text-xl hover:text-accentYellow cursor-pointer" />
          <FaLightbulb className="text-xl hover:text-accentYellow cursor-pointer" />
        </nav>
        <div className="mt-auto text-sm text-accentYellow">Dark</div>
        
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-accentYellow">
          <h1 className="text-lg font-bold">BEGINNER LEVEL 6</h1>
          <div className="flex items-center space-x-4">
            <span className="font-bold">Time:</span>
            <span className="bg-accentYellow text-darkBlue px-3 py-1 rounded">2:00 MINS</span>
            <button className="bg-successGreen text-darkBlue px-4 py-1 rounded font-bold">
              RUN
            </button>
          </div>
        </header>

        {/* Body */}
        <main className="flex flex-1">
          {/* Terminal */}
          <section className="w-2/3 p-4 border-r border-accentYellow">
            <h2 className="text-lg font-semibold">TERMINAL</h2>
            
          </section>

          {/* Results */}
          <section className="w-1/3 flex flex-col p-4 space-y-4">
            {/* Test Cases */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold">Test Cases</h2>
              <div className="grid grid-cols-3 gap-2 mt-2">
                <div className="bg-successGreen text-center py-2">✔</div>
                <div className="bg-errorRed text-center py-2">✖</div>
                <div className="bg-errorRed text-center py-2">✖</div>
              </div>
            </div>

            {/* Error Messages */}
            <div className="border-t border-accentYellow pt-4">
              <h2 className="text-lg font-semibold">Error Message</h2>
              <p className="text-sm text-gray-300">No errors found</p>
            </div>
          </section>
          
        </main>
      </div>
    </div>
    
  );
};

export default Layout;
