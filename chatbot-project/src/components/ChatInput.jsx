import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import LoadingImage from '../assets/loading-spinner.gif'
import './ChatInput.css'

export function ChatInput({chatMessages, setChatMessages}) {

  const [inputText, setInputText] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function saveInputText(event) {
    setInputText(event.target.value)
  }

  function verifyEventsInput(event) {
    if(event.key === 'Enter') {
      sendMessage()
    }
    else if(event.key === 'Escape') {
      setInputText('')
    }
  }

  async function sendMessage() {
    if(inputText !== '' && isLoading === false) {
      setInputText('')
      setIsLoading(true)
      const newChatMessages = [
        ...chatMessages, 
        {
          message: inputText,
          sender: 'user',
          id: crypto.randomUUID()
        }
      ]

      setChatMessages([...newChatMessages,
        {
          message: <img className="loading-image" src={LoadingImage}/>,
          sender: 'robot',
          id: ''
        }
      ])

      const response = await Chatbot.getResponseAsync(inputText)
      setChatMessages([
        ...newChatMessages, 
        {
          message: response,
          sender: 'robot',
          id: crypto.randomUUID()
        }
      ])

      setIsLoading(false)
    }
  }

  return(
    <div className="chat-input-container">
      <input 
        placeholder="Send a message to Chatbot" 
        size="30"
        onChange={saveInputText}
        onKeyDown={verifyEventsInput}
        value={inputText}
        className="chat-input"
      />
      <button 
        onClick={sendMessage} 
        className="send-button"
      >Send</button>
    </div>
  )
}