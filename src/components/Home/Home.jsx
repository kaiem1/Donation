import React from 'react';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div className='' style={{
            backgroundImage: `url("https://i.ibb.co.com/pQkWqcD/Rectangle-4281.png")` 
          }}>
          <div className='backdrop-brightness-100 backdrop-blur-md'>
          <Header/>
          <h2 className='text-5xl font-bold text-center pt-36 pb-10'>I Grow By Helping People In Need</h2>
          <div className='flex justify-center pb-40'>
            <input type="text" placeholder="Search here...." className="input input-ghost w-full max-w-xs  border-solid border-1 border-slate-400" />
          <button className='rounded-r-lg bg-[#FF444A] px-5'>Search</button>
          </div>
          </div>
        </div>
    );
};

export default Home;