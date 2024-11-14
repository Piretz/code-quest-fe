import Sidebar from '../components/Sidebar';
import Header from '../components/header';
import MainContent from '../components/Maincontent';
import StatsPanel from '../components/Stats';
import styles from '../components/Home.module.css';


const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Layout */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Main Content and Stats */}
        <div className="flex">
          <MainContent />
          <StatsPanel />
        </div>
      </div>
    </div>
  );
};

export default Home;


