import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Header/Header";
import { ToastContainer, toast } from 'react-toastify';
import { saveDonate } from "../utility/localstorage";

const DonationDetails = () => {
  const donations = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const donation = donations?.find((donation) => donation.id === idInt);
  console.log(donation);

    const handledonate = () => {
      saveDonate(idInt);
        toast('You have donated successfully!');
    }


  return (
    <div>
      <Header />
      
      <body>
      <div className="  bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img
          className="w-full  object-cover"
          src={donation.pictures} 
          alt="Education"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 py-10 px-4">
        <button onClick={handledonate} className="absolute bottom-4 left-4 bg-red-500 text-white font-semibold py-2 px-4 rounded shadow-lg hover:bg-red-600">
          Donate ${donation.price}
        </button>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800">{donation.title}</h2>
        <p className="mt-4 text-gray-600">
          {donation.big_description}
        </p>
      </div>
    </div>
      </body>
      <ToastContainer />
    </div>
  );
};

export default DonationDetails;
