import React from "react";
import { Link, useRouteError } from "react-router";

const NotFound = () => {
  const error = useRouteError(); // works for errorElement; harmless otherwise

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center gap-4 px-4">
      <img
        src="https://i.ibb.co/HpMScGSN/error-404.png"
        alt="404 Illustration"
        className="max-w-xs w-full"
      />
      <h1 className="text-5xl font-bold">Oops, page not found!</h1>
      <p className="opacity-80">
        {error?.statusText || error?.message || "The page you are looking for is not available."}
      </p>
      <Link
        to="/"
        className="btn mt-2 bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white font-bold"
      >
        Go Home!
      </Link>
    </div>
  );
};

export default NotFound;