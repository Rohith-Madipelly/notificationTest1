import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



//firebase
import { messaging } from './firebase'
import { getMessaging, getToken } from "firebase/messaging";


function App() {
  const [count, setCount] = useState(0)

  const requestPermission = async () => {

    const permission = await Notification.requestPermission()
    //permission > default denied granted
    if (permission === "granted") {

      const newSw = await navigator.serviceWorker.register(
        'firebase-messaging-sw.jsx'
      );

      console.error("fewf")
      try {
        const FCMtoken = await getToken(messaging, { vapidKey: 'BHbLTnJkbMLK39kNIHGCmeiTp0WM5Hkc27FXN82GL0zIi6r6TVL3CQRYcEttWuvOl0TAap3NrRRqv6of5mZfeU4', serviceWorkerRegistration: newSw })
        console.log("123", FCMtoken)
        console.error("Token Gen", FCMtoken)
        SaveFCMToken(FCMtoken)
        console.log("Saved Token is ::", FCMtoken)
      }
      catch (e) {
        console.error("Wasteed")
      }



    }
    else if (permission === "denied") {
      // requestPermission()
      alert("You denied for the notification")
    }
  }

  const SaveFCMToken = async (FCMtoken) => {
    console.error("this is the token going to save in db", FCMtoken)
    // try {
    //   const responsed=UserFCMNotificationsToken(FCMtoken)
    //   if (responsed) {
    //     console.error("FCM Token is Saved")
    //   }
    //   else {
    //     console.error("No Response from FCM Token API")
    //   }
    // } catch (error) {
    //   console.error("Error in FCM TOKEN API")
    // }
  }


  useEffect(() => {
    requestPermission()
  }, [])


  return (
    <>
      <h1>Rohith Madipelly</h1>
      <h4>Notification Sender 123</h4>
    </>
  )
}

export default App
