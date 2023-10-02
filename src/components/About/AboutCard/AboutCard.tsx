import "./styles.scss";

const AboutCard = ({ icon, title, subtitle }: any) => {
  return (
    <div className="AboutCard">
      <img src={icon} alt="" />
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default AboutCard;
