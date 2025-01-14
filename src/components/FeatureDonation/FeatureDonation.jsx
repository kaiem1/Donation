import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";


const FeatureDonation = () => {
    const [donation, setDonation] = useState([]);
    const [dataLength, setDataLength] = useState(8);

    useEffect( () => {
        fetch('donation.json')
        .then(res => res.json())
        .then(data => setDonation(data))
    } , [])

    return (
        <div className="mt-36 mb-24">
            
            <div className={`grid grid-cols-4 gap-3 `}>
                {
                    donation.slice(0, dataLength).map(donation => <DonationCard key={donation.id} donationCard={donation}></DonationCard>)
                }
            </div>
            <div className={`text-center ${dataLength === donation.length && 'hidden'}`}>
                <button 
                onClick={() => setDataLength(donation.length)}
                className="hover:bg-red-500 bg-red-400 px-5 py-2 rounded-lg mt-5 ">Show All</button>
            </div>
        </div>
    );
};

export default FeatureDonation;