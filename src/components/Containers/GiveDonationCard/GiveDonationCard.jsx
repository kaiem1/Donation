import React from "react";

const GiveDonationCard = ({ giveDonationCard }) => {
  const { picture, category, id } = giveDonationCard;
  const getCategoryStyles = (category) => {
    const styles = {
      health: "text-red-700 bg-red-200",
      education: "text-green-700 bg-green-200",
      clothing: "text-yellow-700 bg-yellow-200",
      food: "text-green-700 bg-gray-200",
    };

    return styles[category] || "text-black";
  };

  const btnBackground =
    category === "health"
      ? "bg-red-400"
      : category === "education"
      ? "bg-green-400"
      : category === "clothing"
      ? "bg-yellow-400"
      : "bg-gray-400";
  return (
    <div>
      <div className={`card card-side bg-base-100 shadow-xl `}>
        <figure>
          <img src={picture} alt="Movie" />
        </figure>
        <div className={`card-body ${getCategoryStyles(category)}`}>
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>

          <div className="text-center ">
            <button className={`  px-3 py-3 ${btnBackground} hover:`}>
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiveDonationCard;
