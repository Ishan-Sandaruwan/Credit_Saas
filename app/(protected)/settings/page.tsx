import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import React from "react";

export default function SettingsPage() {
  return (
    <div>
      SettingsPage
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit">SignOut</Button>
      </form>
    </div>
  );
}
