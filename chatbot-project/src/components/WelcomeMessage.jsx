import './WelcomeMessage.css'

function WelcomeMessage({chatMessages}) {
  if(chatMessages.length === 0) {
    return(
      <>
        <p className="welcome-message">Welcome to the chatbot project! Send a message using the textbox below.</p>
      </>
    )
  }
}

export default WelcomeMessage