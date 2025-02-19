// app/sign-up/[[...sign-up]]/page.tsx

import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <SignUp />
    </div>
  );
}
