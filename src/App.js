import { useEffect } from "react";
import { generateToken } from "./notification/firebase";


function App() {

  useEffect(() => {
    generateToken();
  }, [])

  return (
    <>

    </>
  );
}

export default App;
