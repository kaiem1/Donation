import React from "react";
import Header from "../Header/Header";
import FeatureDonation from "../FeatureDonation/FeatureDonation";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Donation | Home</title>
      </Helmet>
      <div
        className=""
        style={{
          backgroundImage: `url("https://i.ibb.co.com/pQkWqcD/Rectangle-4281.png")`,
        }}
      >
        <div className=" bg-white bg-opacity-70">
          <Header />
          <div className=" py-40 flex flex-col gap-y-6">
            <h2 className="text-5xl font-bold text-center ">
              I Grow By Helping People In Need
            </h2>
            <div className="flex justify-center">
              <input
                type="text"
                placeholder="Search here...."
                className="input input-ghost w-full max-w-xs  border-solid border-1 border-slate-400"
              />
              <button className="rounded-r-lg bg-[#FF444A] px-5">Search</button>
            </div>
          </div>
        </div>
      </div>
      <FeatureDonation />
    </div>
  );
};

export default Home;
