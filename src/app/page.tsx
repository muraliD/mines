import Image from "next/image";

"use client"
import React,{useEffect, useState} from 'react';
import { useRouter } from 'next/navigation'
export default function Home() {
  
  const router = useRouter()
  const [windows,setwindows] = useState<any>(null);
  useEffect(() => {
  
    if (typeof window !== 'undefined') {
       if (typeof window !== 'undefined') {
            setwindows(window);
            // window.$ = window.jQuery = $
        }
      router.push('/pages/home')
    }
  }, [typeof window ]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
   

      
    </main>
  );
}
