"use client";
import { auth } from "../lib/firebase";
import { useContext } from "react";
import { UserContext } from "../lib/context";
import { useRouter } from "next/navigation";
import { firestore } from "../lib/firebase";

// Sign out button
function SignOutButton() {
  return (
    <>
      <button
        onClick={() => auth.signOut()}
        className='flex items-center justify-center leading-8 rounded-full ring-2 ring-black mt-10 mb-1 cursor-pointer mr-1'
      >
        SIGN OUT
      </button>
    </>
  );
}

export default function Dashboard() {
  const { user, address } = useContext(UserContext);
  const router = useRouter();
  if (!user) {
    router.push(`/enter`);
    return;
  }

  const createWallet = async () => {
    const wallet = await fetch(`/api/wallet?name=${user.email}`);
    const data = await wallet.json();
    return data.address;
  };

  const ClaimAccount = async () => {
    // Create refs for document
    const userDoc = firestore.doc(`users/${user.uid}`);
    const newWallet = await createWallet();

    // Commit doc as a batch write.
    const batch = firestore.batch();
    batch.set(userDoc, {
      address: newWallet,
    });

    await batch.commit();
  };

  return (
    <main className='text-black flex justify-center h-[500px]'>
      <div className='w-[500px] flex flex-col justify-between'>
        <div>
          <div className='mt-10 text-4xl text-center'>Your Dashboard</div>
          <div>
            <hr className='my-5' />
          </div>
          <div className='text-2xl'>Welcome, {user.email}</div>
          {address && <div>Your address is: {address}</div>}

          {!address && (
            <>
              <button
                onClick={() => ClaimAccount()}
                className='rounded-full ring-2 ring-black text-center mt-2 w-full'
              >
                CREATE WALLET
              </button>
            </>
          )}
        </div>
        <SignOutButton />
      </div>
    </main>
  );
}
