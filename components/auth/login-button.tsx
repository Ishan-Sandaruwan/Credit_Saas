"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface LoginButtonProps {
  children: React.ReactNode;
  model?: "model" | "redirect";
  asChild?: boolean;
}

export default function LoginButton({
  children,
  model = "redirect",
}: //   asChild,
LoginButtonProps) {
  const router = useRouter();

  const onClick = () => {
    router.push("/auth/login");
  };

  if (model === "model") {
    return <span>TODO: Implement model</span>;
  }

  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
}
