import React, {useState} from 'react';
import useInterval from "@use-it/interval";
import './App.css';

const messages = [
  {text: 'How do I get better at React?'},
  {text: 'Just build something!'},
  {text: 'OK! What should I build?'},
  {text: 'Iono. Just Google it?'},
  {text: 'Oh! This course looks cool!'},
  {text: 'Send me the link?!'},
  {text: '20ReactApps.com!'},
];

export default function App() {

  const [messageToShow, setMessageToShow] = useState(0);

  useInterval(() => {
    setMessageToShow(messageToShow => messageToShow + 1);
  }, 2000)

  return (
    <div className="app">
      <div className="walkthrough">
        {messages.map((message, index) => {
          if (messageToShow + 1 === index) {
            return <div key={index}>I am typing</div>
          }

          if (index > messageToShow) return <div key={index} />

          return <Message key={index} message={message}/>
        })}
      </div>
    </div>
  );
}

const Message = ({message}) => {
  return (
    <div className="message">
      <div className="avatar">👽</div>
      <div className="text">{message.text}</div>
      <div className="avatar">🤖</div>
    </div>
  );
}
