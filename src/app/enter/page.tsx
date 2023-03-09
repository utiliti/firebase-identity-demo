"use client";
import { auth, googleAuthProvider } from "../lib/firebase";
import Image from "next/image";
import { useContext } from "react";
import { UserContext } from "../lib/context";
import { useRouter } from "next/navigation";

// Sign in with Google button
function SignInButton() {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <>
      <button
        className=' bg-black text-white rounded-full text-lg py-2 px-8 flex'
        onClick={signInWithGoogle}
      >
        Sign in with
        <div className='flex items-center ml-2 justify-center'>
          <Image alt='google' width={25} height={25} src={"/google.png"} />
          oogle
        </div>
      </button>
    </>
  );
}

export default function Enter() {
  const { user } = useContext(UserContext);
  const router = useRouter();

  if (user) {
    router.push(`/dashboard`);
  }
  return (
    <main className='bg-white text-black flex justify-center'>
      <div>
        <div className='mt-10 text-4xl text-center'>Sign In / Up</div>
        <div>
          <hr className='my-5' />
        </div>
        <div>
          <SignInButton />
        </div>
      </div>
    </main>
  );
}
