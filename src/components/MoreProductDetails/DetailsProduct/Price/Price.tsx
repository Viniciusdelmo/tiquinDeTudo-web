import "./styles.scss";

const Price = ({title, subtitle, description}: any) => {
  return (
    <div id="price">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{'\u00A0'}{'\u00A0'}{description}</p>
      <button/>
      
    </div>
  );
};

export default Price;
