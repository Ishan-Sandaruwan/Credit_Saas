import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex items-center justify-center w-screen h-screen">
      <div className="text-center">
        <h1 className="font-semibold text-5xl mb-8">Credit Saas Application</h1>
        <LoginButton>
          <Button>login</Button>
        </LoginButton>
      </div>
    </main>
  );
}
