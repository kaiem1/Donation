import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";


const FeatureDonation = () => {
    const [donation, setDonation] = useState([]);

    useEffect( () => {
        fetch('donation.json')
        .then(res => res.json())
        .then(data => setDonation(data))
    } , [])

    return (
        <div className="mt-36">
            <h1>This is Featuerdonation: {donation.length}</h1>
            <div className="grid grid-cols-4 gap-6 ">
                {
                    donation.map(donation => <DonationCard key={donation.id} donationCard={donation}></DonationCard>)
                }
            </div>
        </div>
    );
};

export default FeatureDonation;