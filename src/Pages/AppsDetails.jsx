import React, { useEffect, useState } from "react";
import { data, Link, Navigate, useParams } from "react-router";
import useApps from "../hook/useApps";
import {
  Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis,YAxis,
} from "recharts";
import { toast, ToastContainer } from "react-toastify";

const AppsDetails = () => {
  const { id } = useParams();
  const { apps, loading, error } = useApps();

  const [installed, setInstalled] = useState(false);
  const [buttonText, setButtonText] = useState("Install Now");

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("installation") || "[]");
    const isInstalled = list.some((a) => String(a.id) === String(id));
    setInstalled(isInstalled);
    setButtonText(isInstalled ? "Installed" : "Install Now");
  }, [id]);

  const app = apps.find((a) => String(a.id) === id);

  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-error"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-center gap-3">
        <h1 className="text-3xl font-bold text-red-500">Failed to load app</h1>
        <Link to="/" className="btn">Go Home</Link>
      </div>
    );
  }

  if (!app) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-center gap-4 px-4">
        <img src="https://i.ibb.co/HpMScGSN/error-404.png" alt="Not found" className="max-w-xs w-full" />
        <h1 className="text-4xl font-bold">App not found</h1>
        <p>The app you're looking for doesn't exist.</p>
        <Link to="/" className="btn mt-2 bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white">Go Home</Link>
      </div>
    );
  }

  const { image, title, downloads, ratingAvg, reviews, size, description } = app;

  const handleAddToInst = () => {
    const existing = JSON.parse(localStorage.getItem("installation") || "[]");
    if (existing.some((a) => a.id === app.id)) {
      setInstalled(true);
      setButtonText("Installed");
      return;
    }
    const updated = [...existing, app];
    localStorage.setItem("installation", JSON.stringify(updated));
    setInstalled(true);
    setButtonText("Installed");
    toast.success(`${title} — Installed Successfully`);
  };

  const ratingData = (app.ratings ?? [])
    .map((r) => ({
      name: r.name,
      stars: parseInt(r.name, 10),
      count: r.count,
    }))
    .sort((a, b) => b.stars - a.stars);

  const maxCount = Math.max(0, ...ratingData.map((d) => d.count));

  const stackedData = ratingData.map((d) => ({
    ...d,
    remaining: Math.max(0, maxCount - d.count),
  }));

  return (
    <div>
      <section className="container mx-auto pt-10">
        <div className="border-b border-gray-300 pb-4">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="overflow-hidden ">
              <img src={image} alt="" className="rounded-2xl w-[240px] md:w-[300px]" />
            </div>

            <div className="px-3">
              <div className="pb-5 px-3">
                <h1 className="font-bold text-2xl md:text-[32px] ">{title}</h1>
                <p className="text-lg md:text-xl text-[#627382]">
                  Developed by{" "}
                  <span className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent font-semibold">
                    productive.io
                  </span>
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 md:gap-8">
                <nav className="space-y-2 text-center md:text-left">
                  <img src="https://i.ibb.co/Y7h2nBBH/icon-downloads.png" alt="" className="w-[20px] mx-auto md:mx-0" />
                  <p>Downloads</p>
                  <span className="font-extrabold text-2xl md:text-[40px]">{downloads}</span>
                </nav>

                <nav className="space-y-2 text-center md:text-left">
                  <img src="https://i.ibb.co/LDMPGfxx/icon-ratings.png" alt="" className="w-[20px] mx-auto md:mx-0" />
                  <p>Average Ratings</p>
                  <span className="font-extrabold text-2xl md:text-[40px]">{ratingAvg}</span>
                </nav>

                <nav className="space-y-2 text-center md:text-left">
                  <img src="https://i.ibb.co/SDQ73fMx/icon-review.png" alt="" className="w-[20px] mx-auto md:mx-0" />
                  <p>Total Reviews</p>
                  <span className="font-extrabold text-2xl md:text-[40px]">{reviews}K</span>
                </nav>
              </div>

              <button
                onClick={handleAddToInst}
                disabled={installed}
                className="mt-4 btn text-white text-xl bg-[#00D390]
                           disabled:bg-[#00D390] disabled:text-white
                           disabled:opacity-70 disabled:cursor-not-allowed">
                {installed ? 'Installed' : <>Install Now <span>({size} MB)</span></>}
              </button>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-300 mb-3 space-y-3">
          <h1 className="text-2xl font-semibold pt-5 px-3">Ratings</h1>

          <div className="bg-base-100 rounded-xl p-4 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stackedData} layout="vertical" margin={{ left: 8, right: 16 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, maxCount]} ticks={[0, 400, 800, 1200, 1600]} />
                <YAxis dataKey="name" type="category" width={70} />
                <Tooltip />
                <Bar dataKey="count" stackId="a" fill="#FF8811" />
                <Bar dataKey="remaining" stackId="a" fill="#FFFFFF" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="border-b border-gray-300">
          <h1 className="text-2xl font-semibold pt-2 px-3">Description</h1>
          <p className="px-3">{description}</p>
        </div>
      </section>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default AppsDetails;