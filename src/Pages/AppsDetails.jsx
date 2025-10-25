import React, { useState } from "react";
import { data, useParams } from "react-router";
import useApps from "../hook/useApps";
import {Bar,BarChart,CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";
import { toast, ToastContainer } from "react-toastify";

const AppsDetails = () => {
  const { id } = useParams();
  const { apps, loading, error } = useApps();
const [buttonText, setButtonText] = useState("Install Now");
  const app = apps.find((a) => String(a.id) === id);
  if (loading) return <p>Loading....</p>;
  const { image, title, downloads, ratingAvg, reviews, size, description } =
    app || {};

    
  const handleAddToInst = () => {
    const existingList = JSON.parse(localStorage.getItem("installation") || "[]");
    let updatedList = [];
    if (existingList) {
      const isDuplicate = existingList.some((a) => a.id === app.id);
      if (isDuplicate) return ;
      updatedList = [...existingList, app];
    } else {
      updatedList.push(app);
    }
    localStorage.setItem("installation", JSON.stringify(updatedList));
    
    setButtonText("Installed");
    toast.success(`${title} — Installed Successfully`);
  };

  const ratingData = (app?.ratings ?? [])
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
      <section className="container mx-auto pt-10  ">
        <div className="border-b border-gray-300 pb-4">
          <div className="flex gap-10">
            <div className="overflow-hidden">
              <img src={image} alt="" className="rounded-2xl w-[300px]" />
            </div>

            <div>
              <div className="flex-col pb-5">
                <h1 className="font-bold text-[32px]">{title}</h1>
                <p className="text-xl text-[#627382]">
                  Developed by{" "}
                  <span className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent font-semibold">
                    productive.io
                  </span>
                </p>
              </div>
              <div className="flex justify-between">
                <nav className="flex-col space-y-2">
                  <img
                    src="https://i.ibb.co/Y7h2nBBH/icon-downloads.png"
                    alt=""
                    className="w-[20px]"
                  />
                  <p>Downloads</p>
                  <span className="font-extrabold text-[40px]">
                    {downloads}
                  </span>
                </nav>
                <nav className="flex-col space-y-2">
                  <img
                    src="https://i.ibb.co/LDMPGfxx/icon-ratings.png"
                    alt=""
                    className="w-[20px]"
                  />
                  <p>Average Ratings</p>
                  <span className="font-extrabold text-[40px]">
                    {ratingAvg}
                  </span>
                </nav>
                <nav className="flex-col space-y-2">
                  <img
                    src="https://i.ibb.co/SDQ73fMx/icon-review.png"
                    alt=""
                    className="w-[20px]"
                  />
                  <p>Total Reviews</p>
                  <span className="font-extrabold text-[40px]">{reviews}K</span>
                </nav>
              </div>
              <button
                onClick={handleAddToInst}
                className="btn bg-[#00D390] text-white text-xl">
                {buttonText} <span>({size} MB)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Start Rating */}
        <div className="border-b border-gray-300 mb-3 space-y-3">
          <h1 className="text-2xl font-semibold pt-5">Ratings</h1>

          <div className="bg-base-100 rounded-xl p-4 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={stackedData}
                layout="vertical"
                margin={{ left: 8, right: 16 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  type="number"
                  domain={[0, maxCount]}
                  ticks={[0, 400, 800, 1200, 1600]}
                />
                <YAxis dataKey="name" type="category" width={70} />
                <Tooltip />
                <Bar dataKey="count" stackId="a" fill="#FF8811" />
                <Bar dataKey="remaining" stackId="a" fill="#FFFFFF" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* End Rating */}

        <div className="border-b border-gray-300">
          <h1 className="text-2xl font-semibold pt-2">Description</h1>
          <p>{description}</p>

          <div className="flex flex-col space-y-5 py-2 "></div>
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
          theme="colored"/>

    </div>
  );
};

export default AppsDetails;
