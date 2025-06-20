import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  let intialLoadingValue = 0;
  useEffect(() => {
    const interval = setInterval(() => {
      intialLoadingValue += 1;
      if (intialLoadingValue === 100) {
        setLoading(false);
        clearInterval(interval);
      }
      document.getElementById(
        "loading-spinner"
      ).textContent = `${intialLoadingValue}%`;
    }, 20);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {loading && (
        <div
          className="flex justify-center items-center h-screen text-4xl font-bold"
          id="loading-spinner"
        ></div>
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
