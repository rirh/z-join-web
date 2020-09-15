import React from 'react';
import service from './api/axios';
import './App.css'
const url = 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-crypto2server/7c09c100-f1da-11ea-8a36-ebb87efcf8c0.mp4'

function App() {
  const [iso, setIso] = React.useState('')

  React.useEffect(() => {
    const param: any = {
      url: "/iso",
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
    }
    service(param).then(res => {
      console.log(res)
      setIso(JSON.stringify(res))
    })
    const param1: any = {
      url: "auth",
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        "action": "register",
        "username": "wenzhi1",
        "password": "123456"
      }
    }
    service(param1).then(res => {
      console.log(res)
      setIso(JSON.stringify(res))
    })
  }, [])
  return (
    <div className="container">
      <video className="bg-container" playsInline autoPlay muted loop src={url}></video>
      <h1 className="title">{iso || 'Everything is begning!'}</h1>
    </div>
  );
}

export default App;
