"use client";

import React, { useState } from "react";
import { GoogleGenAI } from "@google/genai";

import {
  TextField,
  Box,
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [open, setOpen] = useState(false);

  // Open the dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Close the dialog
  const handleClose = () => {
    setOpen(false);
  };

  const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
  });

  async function handleSendMessage() {
    if (!inputMessage.trim()) return;

    // Show user message immediately
    const newMessage = { text: inputMessage, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputMessage("");

    // Add loading state
    const loadingMessage = { text: "Loading...", sender: "bot" };
    setMessages((prevMessages) => [...prevMessages, loadingMessage]);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: inputMessage,
      });

      const data = response.text;

      // Remove loading message
      setMessages((prevMessages) =>
        prevMessages.filter((msg) => msg !== loadingMessage)
      );

      // Add bot response
      const botMessage = {
        text: data,
        sender: "bot",
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      // Remove loading message and show error
      setMessages((prevMessages) =>
        prevMessages
          .filter((msg) => msg !== loadingMessage)
          .concat({
            text: "Sorry, I couldn't process that request.",
            sender: "bot",
          })
      );
      console.error("Error:", error);
    }
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Open Chat
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Chat with Gemini AI</DialogTitle>
        <DialogContent>
          <Box sx={{ height: "400px", overflowY: "auto", padding: 2 }}>
            {messages.map((message, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent:
                    message.sender === "user" ? "flex-end" : "flex-start",
                  marginBottom: 1,
                }}
              >
                <Typography
                  sx={{
                    padding: 1.2,
                    borderRadius: 2,
                    backgroundColor:
                      message.sender === "user" ? "#1976d2" : "#000000",
                    color: "#fff",
                    maxWidth: "70%",
                  }}
                >
                  {message.text}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Type your message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              sx={{ marginRight: 1 }}
              InputProps={{ sx: { height: "40px", paddingY: 0 } }}
            />
            <Button variant="outlined" onClick={handleSendMessage}>
              Send
            </Button>
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
