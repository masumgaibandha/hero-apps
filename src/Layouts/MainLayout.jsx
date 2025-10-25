import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet, useNavigation } from 'react-router'

export const MainLayout = () => {
  const navigation = useNavigation();
  const isRouting = navigation.state !== 'idle';

  const [showLoader, setShowLoader] = useState(false);
  useEffect(() => {
    let t;
    if (isRouting) {
      setShowLoader(true);
    } else {
      t = setTimeout(() => setShowLoader(false), 300);
    }
    return () => clearTimeout(t);
  }, [isRouting]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {showLoader && (
        <div className="fixed inset-0 z-[999] grid place-items-center bg-black/10 backdrop-blur-[1px]">
          <span className="loading loading-spinner loading-lg text-error" role="status" aria-live="polite" />
        </div>
      )}

      <div className="flex-1">
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}
