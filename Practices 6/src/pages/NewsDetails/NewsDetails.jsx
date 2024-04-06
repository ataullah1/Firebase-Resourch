import { useParams, useLoaderData } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import RightSite from '../../components/RightSite/RightSite';

const NewsDetails = () => {
  const { id } = useParams();
  const dta = useLoaderData();
  const filterDta = dta.filter((dta) => dta._id === id);
  console.log(filterDta);
  const { image_url, details, title } = filterDta[0];
  return (
    <div>
      <div className='pb-5'>
        <Nav />
      </div>
      <div className="min-h-[calc(100vh-150px)] flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-4/6">
          <h2 className="text-neutral-700 text-xl font-semibold pb-5">
            Dragon News
          </h2>
          <div className="w-full bg-white rounded-[5px] border border-neutral-200 p-7 space-y-3">
            <img className="w-full rounded-[5px]" src={image_url} />

            <h1 className=" text-neutral-700 text-[25px] font-bold  leading-[45px]">
              {title}
            </h1>
            <p className="pb-4 text-neutral-500 text-base font-normal leading-relaxed">
              {details}
            </p>
            <button className="px-4 py-1 bg-rose-600 text-white text-xl font-medium">
              All news in this category
            </button>
          </div>

          <div>
            <h3 className="mt-6 text-neutral-700 text-[25px] font-semibold pb-3">
              Editors Insight
            </h3>
            <div className="flex items-center gap-4">
              <div className="w-[267px] space-y-4">
                <div className="w-full h-40 bg-zinc-300" />
                <h3 className=" text-neutral-700 text-xl font-semibold">
                  21 The Most Stylish Wedding Guest Dresses For Spring
                </h3>
                <p className="text-neutral-400 text-base font-medium">
                  Jan 4, 2022
                </p>
              </div>
              <div className="w-[267px] space-y-4">
                <div className="w-full h-40 bg-zinc-300" />
                <h3 className=" text-neutral-700 text-xl font-semibold">
                  21 The Most Stylish Wedding Guest Dresses For Spring
                </h3>
                <p className="text-neutral-400 text-base font-medium">
                  Jan 4, 2022
                </p>
              </div>
              <div className="w-[267px] space-y-4">
                <div className="w-full h-40 bg-zinc-300" />
                <h3 className=" text-neutral-700 text-xl font-semibold">
                  21 The Most Stylish Wedding Guest Dresses For Spring
                </h3>
                <p className="text-neutral-400 text-base font-medium">
                  Jan 4, 2022
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <RightSite />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
