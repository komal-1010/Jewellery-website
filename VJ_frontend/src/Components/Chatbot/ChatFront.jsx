import React from 'react'
import img from "../../img/chat-bot.png"
const ChatFront = () => {
  return (
    <div >
        <img src={img} style={{borderRadius:"5px",height:"100px",width:"100px",position:"absolute",bottom:100,right:100}}></img>
    </div>
  )
}

export default ChatFront