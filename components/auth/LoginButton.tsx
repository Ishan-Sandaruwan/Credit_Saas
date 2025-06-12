"use client";
import React from "react";

interface LoginButtonProps {
  children: React.ReactNode;
  model?: "model" | "redirect";
  asChild?: boolean;
}

export default function LoginButton({
  children,
  model = "redirect",
//   asChild,
}: LoginButtonProps) {

  const onClick = () => {
    console.log("loging button clicked");
  };

  if(model==="model"){
    return(<span>TODO: Implement model</span>)
  }

  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
}
