import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import React from "react";

export default async function SettingsPage() {
  const session = await auth();
  return (
    <div>
      {JSON.stringify(session?.user.role)}
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
