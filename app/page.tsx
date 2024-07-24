import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const Landing = async () => {
  const user = await currentUser();
  return (
    <div className="flex flex-col justify-center items-center space-y-2 h-screen w-screen">
      {user && (
        <div className="w-fit h-fit">
          {
            <Image
              alt="image"
              src={
                "https://files.edgestore.dev/x8urwh5aqkaaytub/publicFiles/_public/b287fb65-5272-4aa0-bd40-e1204b3423a1.jpeg"
              }
              width={1000}
              height={1000}
              priority={true} // Optional: If this image is important for LCP (Largest Contentful Paint)
              placeholder="blur" // Optional: If you have a blur placeholder
              blurDataURL="/path/to/placeholder.jpg" // Optional: The URL for the placeholder image
              sizes="(max-width: 100px) 100vw, 100px" // Optional: Define how the image should behave responsively
            />
          }
        </div>
      )}
      <div>home page content here</div>

      {!user ? (
        ""
      ) : (
        <Link href={"/uploads"}>
          <Button variant={"outline"} size={"lg"}>
            Upload Files
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Landing;
