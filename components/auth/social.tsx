"use client";

import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export default function Social() {
  const onClick = () => {
    signIn("google", { callbackUrl: DEFAULT_LOGIN_REDIRECT });
  };
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        className="flex-1"
        size={"lg"}
        variant={"outline"}
        onClick={onClick}
      >
        <FcGoogle />
      </Button>
    </div>
  );
}
