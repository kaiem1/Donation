

const DonationCard = ({donationCard}) => {
    const {category, title, picture} = donationCard;
    return (
        <div className="card card-compact bg-base-100  shadow-xl">
  <figure>
    <img
      src={picture}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{category}</h2>
    <p>{title}</p>
    
  </div>
</div>
    );
};

export default DonationCard;