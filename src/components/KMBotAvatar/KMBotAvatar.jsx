import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot } from '@fortawesome/free-solid-svg-icons'

const KMBotAvatar = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-avatar">
      <div className="react-chatbot-kit-chat-bot-avatar-container">
        <FontAwesomeIcon icon={faRobot} style={{color: "#C71585"}}/>
      </div>
    </div>
  );
};

export default KMBotAvatar;