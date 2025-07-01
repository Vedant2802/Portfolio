import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import { useEffect, useState } from "react";
import loader from "./assets/loader.svg";
import { getUserData } from "./api/apiAction";
import { useDispatch } from "react-redux";
import { set_user_data } from "./store/mainSlice";

function App() {
  const [loading, setLoading] = useState(true);
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();

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
    }, 40);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUserData();
      dispatch(set_user_data(data));
      setUserData(data);
    };
    fetchUser();
  }, []);

  // console.log(userData);

  return (
    <div>
      {loading && (
        <div className="flex justify-center items-center h-screen text-4xl font-bold gap-3 bg-gray-400">
          {/* <img
            src={loader}
            alt="loader"
            className="w-[250px] h-[250px] animate-spin"
          /> */}
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
