import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import { useEffect, useState } from "react";
// import loader from "./assets/loader.svg";
import { getUserData } from "./api/apiAction";
import { useDispatch } from "react-redux";
import { set_user_data } from "./store/mainSlice";
import { authData } from "./store/thunkStore";

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

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const data = await getUserData();
  //     dispatch(set_user_data(data));
  //     setUserData(data);
  //   };
  //   fetchUser();
  // }, []);
  useEffect(() => {
    dispatch(authData());
  }, []);
  return (
    <div>
      {loading && (
        <div className="flex flex-col justify-center items-center h-screen text-4xl font-bold gap-6 bg-gray-400">
          <span className="text-4xl w-32">Loading...</span>
          <div className="w-96 bg-gray-300 h-4 rounded-full overflow-hidden">
            <div
              className="bg-blue-600 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${loadingPercentage}%` }}
            ></div>
          </div>
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
