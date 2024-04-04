const DragonNews = () => {
  return (
    <div className="">
      <h1 className="text-neutral-700 text-xl font-semibold pb-5">
        Dragon News Home
      </h1>
      <div>
        <div className="w-full h-[694px] bg-white rounded-[5px] border border-neutral-200 ">
          <div className="w-full py-3 px-6 bg-zinc-100 rounded-tl-[5px] rounded-tr-[5px] border border-zinc-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                className="w-10 h-10 rounded-full"
                src="https://via.placeholder.com/40x40"
              />
              <div>
                <h2 className="text-neutral-700 text-base font-semibold">
                  Md Ataullah
                </h2>
                <p className="text-neutral-500 text-sm font-normal">
                  2022-08-21
                </p>
              </div>
            </div>
            <div>dd</div>
          </div>
          <div className="p-6">
            <div className="w-[514px] text-neutral-700 text-xl font-bold font-['Poppins'] leading-[35px]">
              Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S.
              Military Aid Package Yet
            </div>
            <img
              className="w-full max-h-[262px] mx-auto rounded-[5px]"
              src="https://via.placeholder.com/518x262"
            />
            <div className="w-[518px]">
              <span className="text-neutral-500 text-base font-normal font-['Poppins'] leading-relaxed">
                Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
                Europe, Joe Biden, Military, News, Russia, Security, UK,
                Ukraine, United States, Worthy News (Worthy News) – U.S.
                President Joe Biden has announced nearly $3 billion in new U.S.
                military a...{' '}
              </span>
              <span className="text-orange-400 text-base font-semibold font-['Poppins'] leading-relaxed">
                Read More
              </span>
            </div>
            <div className="w-[518px] h-[0px] border border-neutral-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragonNews;
