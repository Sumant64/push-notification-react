import { useEffect } from "react";
import { generateToken, messaging } from "./notification/firebase";
import { onMessage } from "firebase/messaging";


function App() {

  useEffect(() => {
    generateToken();
    onMessage(messaging, (payload) => {
      console.log(payload);
    })
  }, [])

  return (
    <>
      <h1>push notification</h1>
    </>
  );
}

export default App;
