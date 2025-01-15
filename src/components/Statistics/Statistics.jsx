import React from 'react';
import Header from '../Header/Header';
import { Helmet } from 'react-helmet-async';

const Statistics = () => {
    return (
        <div style={{ 
            backgroundImage: `url("https://i.ibb.co.com/pQkWqcD/Rectangle-4281.png")` 
          }}>
            <Helmet>
                <title>Donation | Statistics</title>
            </Helmet>
            <Header/>
            <h2 className='p-32 text-center'>This is donation statistic components.</h2>
            
        </div>
    );
};

export default Statistics;