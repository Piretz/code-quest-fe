import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Main from "../components/Main";

const Home = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <Header />
        {/* Main Content */}
        <Main />
      </div>
    </div>
  );
};

export default Home;
