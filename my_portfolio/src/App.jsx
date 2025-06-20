import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import { use, useEffect, useState } from "react";
import loader from "./assets/loader.svg";
import { getUserData } from "./api/apiAction";

function App() {
  const [loading, setLoading] = useState(true);
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [userData, setUserData] = useState(null);

  const evaluationLogic = (value, interval) => {
    const newValue = value + 1;
    if (newValue === 100) {
      setLoading(false);
      clearInterval(interval);
    }
    return newValue;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingPercentage((prev) => {
        return evaluationLogic(prev, interval);
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUserData();
      setUserData(data);
    };
    fetchUser();
  }, []);

  return (
    <div>
      {loading && (
        <div className="flex justify-center items-center h-screen text-4xl font-bold gap-3">
          <img
            src={loader}
            alt="loader"
            className="w-[250px] h-[250px] animate-spin"
          />
          <span className="fixed ml-5">{loadingPercentage}%</span>
        </div>
      )}
      {!loading && (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
