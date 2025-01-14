const getStoredDonation = () =>{
    const storedDonation = localStorage.getItem('donation');
    if(storedDonation){
        return JSON.parse(storedDonation);
    }
    return [];
}


const saveDonate = id =>{
    const storedDonation = getStoredDonation();
    const exists = storedDonation.find(donationid => donationid === id);
    if(!exists)
        storedDonation.push(id);
    localStorage.setItem('donation', JSON.stringify
        (storedDonation))
}

export {getStoredDonation, saveDonate}