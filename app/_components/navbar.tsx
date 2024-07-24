import React from "react";
import { ModeToggle } from "./modeToggle";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";

const Navbar = async () => {
  const user = await currentUser();
  return (
    <div className="w-full h-16 flex items-center justify-end px-4 dark:bg-slate-900 space-x-4">
      {!user ? (
        <SignInButton mode="modal">
          <Button size={"sm"} variant={"outline"} className="capitalize">
            sign In
          </Button>
        </SignInButton>
      ) : (
        <UserButton></UserButton>
      )}

      <ModeToggle></ModeToggle>
    </div>
  );
};

export default Navbar;
