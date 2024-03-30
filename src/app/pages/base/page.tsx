"use client"
import React,{useEffect, useState} from 'react';
import HomePage from '../home/page';
import { useRouter } from 'next/navigation'

  
export default function Basepage() {
    const [windows,setwindows] = useState<any>(null);
    const router = useRouter()
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setwindows(window);
            window.$ = window.jQuery = $
        }
      }, [typeof window ]);

	  
  return (
    <div className='main-container'>
     {windows && 
    // <HomePage></HomePage>
    <button type="button" onClick={() => router.push('/pages/home')}>
    Dashboard
  </button>
      
      }
    </div>
  );
}
