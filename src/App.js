import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // const { userInfo } = useSelector((state) => state.auth);
  // useEffect(() => {
  //   {
  //     userInfo ? navigate("/home") : navigate("/");
  //   }
  // }, []);
  return (
    <>
      <main>
        <Outlet />
      </main>
      <ToastContainer />
    </>
  );
}

export default App;
