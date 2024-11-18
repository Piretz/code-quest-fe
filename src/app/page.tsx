// import Sidebar from "../components/Terminal";

// const Dashboard = () => {
//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <Sidebar />
      
//     </div>
//   );
// };

// export default Dashboard;

import Layout from "@/components/Layout";

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-xl font-bold"></h1>
        <p className="mt-2 text-gray-300"></p>
      </div>
    </Layout>
  );
};

export default Home;



