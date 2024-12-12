"use client";
import Chatbot from "@/components/common/Chatbot";
import DiseaseFindWidget from "@/components/disease/DiseaseFindWidget";
import React from "react";

const DiseasePage: React.FC = () => {
  return (
    <div>
      <DiseaseFindWidget />
      <Chatbot/>
    </div>
  );
};

export default DiseasePage;
