import { useState, useEffect } from 'react'
import { ChatInput } from './components/ChatInput'
import { Chatbot } from 'supersimpledev'
import ChatMessages from './components/ChatMessages'
import WelcomeMessage from './components/WelcomeMessage'
import './App.css'

function App() {
  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || [])
  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages))
  }, [chatMessages])

  useEffect(() => {
    Chatbot.addResponses({
      'your name': 'My name is Heitor',
      'Country': 'Brazil'
    })
  })

  //const [chatMessages, setChatMessages] = array
  // const chatMessages = array[0]
  // const setChatMessages = array[1]

  return (
    <div className="app-container">

      <WelcomeMessage chatMessages={chatMessages} />
      
      <ChatMessages 
        chatMessages={chatMessages}
      />
      <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />

    </ div>
  )
}


export default App
