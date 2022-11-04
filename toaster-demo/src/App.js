import { ToastContainer } from "react-toaster-lib";
import { useSelector } from "react-redux";

import MainLayout from "./layouts/MainLayout/MainLayout";

function App() {
  const { containerPosition } = useSelector((state) => state.settings);

  return (
    <>
      <MainLayout />
      <ToastContainer position={containerPosition} />
    </>
  );
}

export default App;
