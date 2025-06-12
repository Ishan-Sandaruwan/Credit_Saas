"use client";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Button } from "../ui/button";

export default function Social() {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        className="flex-1"
        size={"lg"}
        variant={"outline"}
        onClick={() => {}}
      >
        <FcGoogle />
      </Button>
       <Button
        className="flex-1 text-blue-500"
        size={"lg"}
        variant={"outline"}
        onClick={() => {}}
      >
        <FaFacebook />
      </Button>
    </div>
  );
}
