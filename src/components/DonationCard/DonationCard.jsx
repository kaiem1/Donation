import { Link } from "react-router-dom";

const DonationCard = ({ donationCard }) => {
  const {id, category, title, picture } = donationCard;

  const getCategoryStyles = (category) => {
    const styles = {
      health: "text-red-700 bg-red-400",
      education: "text-green-700 bg-green-400",
      clothing: "text-yellow-700 bg-yellow-400",
      food: "text-green-700 bg-gray-400",
    };
    return styles[category] || "text-black";
  };

  return (
    <div className={`card card-compact shadow-xl ${getCategoryStyles(category)}`}>
      <Link to={`/${id}`}>
      <figure>
        <img src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title capitalize">{category}</h2>
        <p>{title}</p>
      </div>
      </Link>
    </div>
  );
};

export default DonationCard;
