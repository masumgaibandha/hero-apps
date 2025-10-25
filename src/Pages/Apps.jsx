import React, { useEffect, useMemo, useState } from 'react';
import useApps from '../hook/useApps';
import AppsCard from '../Components/AppsCard';

export const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (!search) { setIsSearching(false); return; }
    setIsSearching(true);
    const t = setTimeout(() => setIsSearching(false), 300);
    return () => clearTimeout(t);
  }, [search]);

  const term = search.trim().toLowerCase();
  const searchedApps = useMemo(
    () => (term ? apps.filter(a => a.title?.toLowerCase().includes(term)) : apps),
    [apps, term]
  );

  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center px-4">
        <span className="loading loading-spinner loading-lg text-error" role="status" aria-live="polite" />
      </div>
    );
  }

  return (
    <div>
      {isSearching && (
        <div className="fixed inset-0 z-[999] grid place-items-center bg-black/10 backdrop-blur-[1px]">
          <span className="loading loading-spinner loading-lg text-error" role="status" aria-live="polite" />
        </div>
      )}

      <section className="bg-[#E9E9E9] pb-10">
        <div className="container mx-auto px-4">
          <div className="py-8 sm:py-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] text-center font-bold text-[#001931] leading-tight">
              Our All Applications
            </h1>
            <p className="mt-2 text-sm sm:text-base md:text-lg text-center text-[#627382]">
              Explore All Apps on the Market developed by us. We code for Millions
            </p>
          </div>

          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-between pb-5">
            <h2 className="font-semibold text-lg sm:text-xl md:text-2xl">
              <span>({searchedApps.length})</span> Apps Found
            </h2>

            <label className="input bg-[#f3f1f1] flex items-center gap-2 w-full sm:w-auto sm:min-w-[320px]">
              <img src="https://i.ibb.co/Xk50mNhq/fi-54481.png" alt="Search" className="w-4 sm:w-5" />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                type="search"
                placeholder="Search apps"
                className="grow text-sm sm:text-base"
              />
              {isSearching && (
                <span
                  className="loading loading-spinner loading-sm text-error"
                  role="status"
                  aria-live="polite"
                />
              )}
            </label>
          </div>

          
          {searchedApps.length === 0 ? (
            <div className="py-12 sm:py-16 text-center space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-semibold">No Apps Found</h3>
              <p className="opacity-70 text-sm sm:text-base">
                Try a different keyword or show all apps.
              </p>
              <button
                onClick={() => setSearch('')}
                className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white"
              >
                Show All Apps
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {searchedApps.map(app => (
                <AppsCard key={app.id} app={app} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Apps;