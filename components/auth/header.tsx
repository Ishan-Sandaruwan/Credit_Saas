import React from "react";

interface HeaderProps {
  title?: string;
  label: string;
}

export default function Header({ title = "Auth", label }: HeaderProps) {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
}
