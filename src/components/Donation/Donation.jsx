import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
import { getStoredDonation } from '../utility/localstorage';
import GiveDonationCard from '../Containers/GiveDonationCard/GiveDonationCard';
import { Helmet } from 'react-helmet-async';

const Donation = () => {
    const donations = useLoaderData();

    const [giveDonation, setGiveDonations] = useState([]);

    useEffect(()=>{
        const storedDonationIds = getStoredDonation();
        if(donations.length > 0){
            // const giveDonation = donations.filter(donation => storedDonationIds.includes(donation.id))

            const giveDonation = [];
            for(const id of storedDonationIds){
                const donation = donations.find(donation => donation.id === id);
                if(donation){
                    giveDonation.push(donation)
                }
            }
            setGiveDonations(giveDonation);
            // console.log(giveDonation, donations, storedDonationIds);
        }
    } , [])
    return (
        <div className=''>
            <Helmet>
                <title>Donation | Donation</title>
            </Helmet>
            <Header/>
            
            <div className='grid md:grid-cols-2 gap-5'>
                {
                    giveDonation.map(donation => <GiveDonationCard key={donation.id} giveDonationCard={donation} ></GiveDonationCard>)
                }
            </div>
        </div>
    );
};

export default Donation;