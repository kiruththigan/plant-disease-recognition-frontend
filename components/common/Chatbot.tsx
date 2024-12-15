"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, MessageSquare, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useChatbotStore, useChatStore } from "@/stores/chat.store";
import { Message } from "ai";
import axios from "axios";
import { useImageStore } from "@/stores/image.store";

const Chatbot = () => {
  const { isOpen, setIsOpen, input, setInput, isLoading, setIsLoading } =
    useChatbotStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { messages, addMessage, addInitialMessage } = useChatStore();

  //   const handleSubmit1 = async (e: React.FormEvent) => {
  //     e.preventDefault();
  //     if (!input.trim()) return;

  //     const userMessage: Message = {
  //       id: Date.now().toString(),
  //       role: "user",
  //       content: input,
  //     };
  //     addMessage(userMessage);
  //     setInput("");
  //     setIsLoading(true);

  //     try {
  //       const response = await fetch("/api/chat", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           model: "plant-care",
  //           messages: [...messages, userMessage],
  //           stream: false,
  //         }),
  //       });

  //       if (!response.ok) {
  //         throw new Error("Failed to fetch response");
  //       }

  //       const data = await response.json();
  //       const assistantMessage: Message = {
  //         id: (Date.now() + 1).toString(),
  //         role: "assistant",
  //         content: data.message,
  //       };
  //       addMessage(assistantMessage);
  //     } catch (error) {
  //       console.error("Error:", error);
  //       addMessage({
  //         id: (Date.now() + 1).toString(),
  //         role: "assistant",
  //         content: "Sorry, I encountered an error. Please try again.",
  //       });
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };
    addMessage(userMessage);
    setInput("");
    setIsLoading(true);
    const OLLAMA_API_URL = `${process.env.NEXT_PUBLIC_OLAMA_API_URL}/api/chat`;
    const data = {
      model: "plant-care",
      messages: [...messages, userMessage],
      stream: false,
      //   prompt:
      //     disease &&
      //     `User asking about ${disease} disease, its causes, symptoms, prevention, and treatment methods. Also, be prepared to answer follow-up questions about this disease and other plant care issues.`,
    };
    try {
      const response = await axios.post(OLLAMA_API_URL, data);

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response.data.message.content,
      };
      addMessage(assistantMessage);
    } catch (error) {
      console.error("Error:", error);
      addMessage({
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Sorry, I encountered an error. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const initialMessageAdd = () => {
    if (messages.length === 0) {
      addInitialMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="bg-gray-900 border border-gray-800 rounded-lg shadow-lg w-80 sm:w-96 mb-4"
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-800">
              <h2 className="text-lg font-semibold text-[#37fbb3]">
                Plant Care Assistant
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={20} />
              </Button>
            </div>
            <div className="h-80 overflow-y-auto p-4 space-y-4 text-xs">
              {messages.map((message, index) => (
                <>
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    } ${message.role === "system" && index > 0 && "hidden"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg whitespace-pre-wrap ${
                        message.role === "user"
                          ? "bg-[#37fbb3] text-black"
                          : "bg-gray-800 text-white"
                      }`}
                    >
                      {message.content}
                    </div>
                  </motion.div>
                </>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-800 text-white p-3 rounded-lg max-w-[80%]">
                    <TypingAnimation />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form
              onSubmit={handleSubmit}
              className="p-4 border-t border-gray-800"
            >
              <div className="flex space-x-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about plant care..."
                  className="flex-grow bg-gray-800 text-white border-gray-700"
                />
                <Button
                  type="submit"
                  className="bg-[#37fbb3] text-gray-900 hover:bg-[#2de29e]"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    <Send size={20} />
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <div className=" flex justify-end items-center">
        <Button
          onClick={() => {
            setIsOpen(!isOpen);
            initialMessageAdd();
          }}
          className="bg-[#37fbb3] text-gray-900 hover:bg-[#2de29e] rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
        >
          <MessageSquare size={24} />
        </Button>
      </div>
    </div>
  );
};

const TypingAnimation = () => {
  return (
    <div className="flex items-center space-x-1">
      <div
        className="w-1 h-1 rounded-full bg-white animate-bounce"
        style={{ animationDelay: "0ms" }}
      ></div>
      <div
        className="w-1 h-1 rounded-full bg-white animate-bounce"
        style={{ animationDelay: "150ms" }}
      ></div>
      <div
        className="w-1 h-1 rounded-full bg-white animate-bounce"
        style={{ animationDelay: "300ms" }}
      ></div>
    </div>
  );
};

export default Chatbot;
