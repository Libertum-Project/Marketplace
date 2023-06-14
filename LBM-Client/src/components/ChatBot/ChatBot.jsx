import React, { useState } from "react";
import arrow from "./assets/arrow.svg";
import chatGPT from "./assets/chatGPT.svg";
import newChat from "./assets/newChat.svg";
import pencil from "./assets/pencil.svg";
import ping from "./assets/ping.svg";
import attachmen from "./assets/attachmen.svg";
import ChatGreenIcon from "./assets/chatGreenIcon.svg";
import sparkles from "./assets/sparkles.svg";
import axios from "axios";
import css from "./Chatbot.module.css";

const AskMe = () => {
  const API_KEY = import.meta.env.VITE_GPT_KEY;
  const url = "https://api.openai.com/v1/chat/completions";
  const [messages, setMessages] = useState([]);
  const [aiResponse, setAiResponse] = useState("");

  const expectedKeywords = []


  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    const input = e.target.elements.messageInput;
    const message = input.value.trim();

    if (message) {
      const containsKeyword = expectedKeywords.some((keyword) =>
        message.toLowerCase().includes(keyword.toLowerCase())
      );

      if (!containsKeyword) {
        const newMessage = {
          text: message,
          timestamp: new Date().toLocaleString(),
          sender: "user",
        };
        setMessages((prevMessages) => [...prevMessages, newMessage]);

        try {
          const response = await axios.post(
            url,
            {
              messages: [
                {
                  role: "system",
                  content:
                    "You are a helpful assistant.Envwise is a company that uses blockchain technology to tokenize real estate. This makes it possible for anyone to invest in real estate. Envwise believes that their platform can help to accelerate the green revolution. Here are a few words to describe Envwise: Sustainable, Accessible, Revolutionary, Innovative, Blockchain-based.",
                },
                { role: "user", content: message },
              ],
              model: "gpt-3.5-turbo",
              max_tokens: 100
            },
            {
              headers: {
                Authorization: `Bearer ${API_KEY}`,
                "Content-Type": "application/json",
              },
            }
          );

          const data = response.data;
          const aiResponse = {
            text: data.choices[0].message.content,
            timestamp: new Date().toLocaleString(),
            sender: "ai",
          };
          setMessages((prevMessages) => [...prevMessages, aiResponse]);
          setAiResponse(data.choices[0].message.content);
        } catch (error) {
          console.error(error);
        }
      } else {
        const invalidResponse = {
          text: "I'm sorry! I'm focused on discussing green initiatives. Why don't you ask me about Net Zero Emission buildings? You can try adding keywords like income, investment property, environmental impact, green buildings, property tokenization system, sustainability, renewable energy, carbon footprint, and others.",

          timestamp: new Date().toLocaleString(),
          sender: "system",
        };
        setMessages((prevMessages) => [...prevMessages, invalidResponse]);
      }

      input.value = "";
    }
  };

  const handleNewDialogClick = () => {
    setMessages([]);
    setAiResponse("");
  };

  const handleBtn = async (text) => {
    const apiUrl = "https://api.openai.com/v1/chat/completions";
    const headers = {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    };

    try {
      const response = await axios.post(
        apiUrl,
        {
          messages: [{ role: "user", content: text }],
          model: "gpt-3.5-turbo",
          max_tokens: 100
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      let message = response.data.choices[0].message.content;
      const newMessage = {
        text: message,
        timestamp: new Date().toLocaleString(),
        sender: "user",
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={css.chatbot__container}>
      <div className={css.chatbot}>
        <h2>AskMe</h2>
        {messages.map((message, index) => (
          <div key={index} className={css.chatbot__output}>
            <div className={css.question}>
              <span>
                <img src={ChatGreenIcon} alt="Green icon" />
                {message.timestamp}
              </span>
              <p>{message.text}</p>
            </div>
            {aiResponse.sender === "user" && (
              <div className={css.answer}>
                <div>
                  <img src={chatGPT} alt="chatGPT" />
                  <span className="timestamp">{message.timestamp}</span>
                </div>
                <p>{aiResponse}</p>
              </div>
            )}
          </div>
        ))}

        <div className={css.chatbot__inputContainer}>
          <button
            onClick={handleNewDialogClick}
            className={css.chatbot__cleanBtn}
          >
            <img src={newChat} alt="newChat" />
            <p>New dialog</p>
          </button>
          <form onSubmit={handleMessageSubmit} className={css.chatbot__form}>
            <img src={attachmen} alt="attachmen" />
            <input
              type="text"
              name="messageInput"
              placeholder="Send me a message"
            />
            <button type="submit">
              <img src={arrow} alt="arrow" />
            </button>
          </form>
        </div>
      </div>
      <div className={css.chatbot__recommendations}>
        <h2>Recommendations</h2>
        <div className={css.recommendations__body}>
          <h3>
            Welcome to our EnvwiseAI. Try some of the examples below to help you
            reduce your carbon footprint and make the world a better place.
          </h3>

          <div className={css.buttonsContainer}>
            <div className={css.button__row}>
              <div
                onClick={() =>
                  handleBtn(
                    "short and easy response - Where can I apply for carbon reduction grants in europe?"
                  )
                }
              >
                <i>
                  <img src={sparkles} alt="Sparkles" />
                </i>
                <h4>Green Grants</h4>
                <p>
                  Where can I apply for carbon reduction grants in my local
                  area?
                </p>
              </div>
              <div
                onClick={() =>
                  handleBtn(
                    "Short and Easy response - Create a roadmap for me to create a Net Zero Emission building"
                  )
                }
              >
                <i>
                  <img src={sparkles} alt="Sparkles" />
                </i>
                <h4>Green Journey</h4>
                <p>
                  Create a roadmap for me to create a Net Zero Emission building
                </p>
              </div>
            </div>

            <div className={css.button__row}>
              <div onClick={() => handleBtn("Green funding")}>
                <i>
                  <img src={sparkles} alt="Sparkles" />
                </i>
                <h4>Green Funding</h4>
                <p>Insert the link to the property listing</p>
              </div>
              <div
                onClick={() =>
                  handleBtn(
                    " Easy response - Can you recommend some consultants to help me reduce my carbon footprint"
                  )
                }
              >
                <i>
                  <img src={sparkles} alt="Sparkles" />
                </i>
                <h4>Green Support</h4>
                <p>
                  Can you recommend some consultants to help me reduce my carbon
                  footprint?.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskMe;
