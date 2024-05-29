import { useEffect, useState } from "react";
import { generateToken, messaging } from "./notification/firebase";
import { onMessage } from "firebase/messaging";
import axios from "axios";
import { sendMultipleUser } from "./service/notify";


function App() {
  const [token, setToken] = useState('')

  useEffect(() => {
    initialLoad();
    onMessage(messaging, (payload) => {
      console.log(payload);
    })
  }, []);


  const initialLoad = async() => {
    try{
      let token = await generateToken();
      setToken(token);
    } catch(err) {
      console.log(err);
    }
  }

  const sendResponse = async() => {
    try{
      let payload = {
        "fcmToken" : "fIyDTkKBnwfzEZDVH-GioS:APA91bHK8pBOdKJyJF5LrkHSjb_MtHKNzR_KQSKnaa05Gtrkf8GRz7z-bcsBs2u8mpmKn1qDKhKSaRnBUveRS52G6t5gIwTNb47iDo5GEmjO0NzEot68G5FRD96f5GRlQCaDRnkLWLbd",
        "title": "Notification",
        "body": "This is a test notifications"
    }

    let res = await sendMultipleUser(payload);

    console.log(res.data);
    
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <>
      <h1>push notification</h1>
      <p>{token}</p>
      <button onClick={() => sendResponse()}>Send notification to multiple users</button>
    </>
  );
}

export default App;
