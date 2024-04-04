import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';

const AllCaterogy = () => {
  return (
    <div className="">
      <h1 className="text-neutral-700 text-xl font-semibold pb-5">
        All Caterogy
      </h1>
      <div>
        <div className="w-full py-2 bg-neutral-200 rounded-[5px] text-neutral-700 text-xl font-semibold text-center">
          National News
        </div>
        <div className="w-full py-2 hover:bg-neutral-200 rounded-[5px] text-neutral-400 hover:text-neutral-700 text-xl font-medium hover:font-semibold text-center">
          Breaking News
        </div>
        <div className="w-full py-2 hover:bg-neutral-200 rounded-[5px] text-neutral-400 hover:text-neutral-700 text-xl font-medium hover:font-semibold text-center">
          Regular News
        </div>
        <div className="w-full py-2 hover:bg-neutral-200 rounded-[5px] text-neutral-400 hover:text-neutral-700 text-xl font-medium hover:font-semibold text-center">
          International News
        </div>
        <div className="w-full py-2 hover:bg-neutral-200 rounded-[5px] text-neutral-400 hover:text-neutral-700 text-xl font-medium hover:font-semibold text-center">
          Sports
        </div>
        <div className="w-full py-2 hover:bg-neutral-200 rounded-[5px] text-neutral-400 hover:text-neutral-700 text-xl font-medium hover:font-semibold text-center">
          Entertainment
        </div>
        <div className="w-full py-2 hover:bg-neutral-200 rounded-[5px] text-neutral-400 hover:text-neutral-700 text-xl font-medium hover:font-semibold text-center">
          Culture
        </div>
        <div className="w-full py-2 hover:bg-neutral-200 rounded-[5px] text-neutral-400 hover:text-neutral-700 text-xl font-medium hover:font-semibold text-center">
          Arts
        </div>
        <div className="w-full py-2 hover:bg-neutral-200 rounded-[5px] text-neutral-400 hover:text-neutral-700 text-xl font-medium hover:font-semibold text-center">
          All News
        </div>
      </div>

      <div className="flex flex-col gap-7">
        <div className="space-y-2">
          <img className="mx-auto max-h-[200px] rounded-[5px]" src={img1} />
          <div className="w-full text-neutral-700 text-xl font-semibold ">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </div>
          <div className="flex gap-5 items-center">
            <div className="text-neutral-700 text-base font-medium ">
              Sports
            </div>
            <div className="text-neutral-400 text-base font-medium">
              Jan 4, 2022
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <img className="mx-auto max-h-[200px] rounded-[5px]" src={img2} />
          <div className="w-full text-neutral-700 text-xl font-semibold ">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </div>
          <div className="flex gap-5 items-center">
            <div className="text-neutral-700 text-base font-medium ">
              Sports
            </div>
            <div className="text-neutral-400 text-base font-medium">
              Jan 4, 2022
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <img className="mx-auto max-h-[200px] rounded-[5px]" src={img3} />
          <div className="w-full text-neutral-700 text-xl font-semibold ">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </div>
          <div className="flex gap-5 items-center">
            <div className="text-neutral-700 text-base font-medium ">
              Sports
            </div>
            <div className="text-neutral-400 text-base font-medium">
              Jan 4, 2022
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCaterogy;
