import { useRef, useEffect } from 'react'
import { ChatMessage } from "./ChatMessage"
import './ChatMessages.css'

function ChatMessages({chatMessages}) {
  const chatMessagesRef = useAutoScroll([chatMessages])

  function useAutoScroll(dependecies) {
    const containerRef = useRef(null)
  
    useEffect(() => {
      const containerElem = containerRef.current
      if(containerElem) {
        containerElem.scrollTop = containerElem.scrollHeight
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependecies)
    return containerRef
  }

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage 
            message={chatMessage.message} 
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        )
      })}
    </ div>
  )

}

export default ChatMessages