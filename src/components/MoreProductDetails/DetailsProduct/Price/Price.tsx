import DefaultButton from "../../../DefaultButton/DefaultButton";
import "./styles.scss";

const Price = ({title, subtitle, description}: any) => {
  return (
    <div id="price">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{'\u00A0'}{'\u00A0'}{description}</p>
      <DefaultButton label={"Adicionar ao carrinho"} onClick={()=>{}}/>
      <button/>
      
    </div>
  );
};

export default Price;
