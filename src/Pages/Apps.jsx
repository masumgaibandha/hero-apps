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
      <div className="min-h-[50vh] flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-error" role="status" aria-live="polite" />
      </div>
    );
  }

  return (
    <div>
      {/* Full-screen overlay while searching */}
      {isSearching && (
        <div className="fixed inset-0 z-[999] grid place-items-center bg-black/10 backdrop-blur-[1px]">
          <span className="loading loading-spinner loading-lg text-error" role="status" aria-live="polite" />
        </div>
      )}

      <section className="bg-[#E9E9E9] pb-10">
        <div className="py-10">
          <h1 className="text-[48px] text-center font-bold text-[#001931]">Our All Applications</h1>
          <p className="text-xl text-center text-[#627382]">Explore All Apps on the Market developed by us. We code for Millions</p>
        </div>

        <div className="container mx-auto flex justify-between items-center pb-5">
          <h1 className="font-semibold text-2xl">
            <span>({searchedApps.length})</span> Apps Found
          </h1>

          <label className="input bg-[#f3f1f1] mr-7 flex items-center gap-2">
            <img src="https://i.ibb.co/Xk50mNhq/fi-54481.png" alt="Search" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              type="search"
              placeholder="search Apps"
              className="grow"
            />
            {/* small inline spinner while typing */}
            {isSearching && <span className="loading loading-spinner loading-sm text-error" role="status" aria-live="polite" />}
          </label>
        </div>

        {/* Results */}
        <div className="container mx-auto">
          {searchedApps.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <h2 className="text-2xl font-semibold">No Apps Found</h2>
              <p className="opacity-70">Try a different keyword or show all apps.</p>
              <button
                onClick={() => setSearch('')}
                className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white"
              >
                Show All Apps
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
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