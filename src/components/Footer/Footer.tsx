import FooterLeft from "./FooterLeft/FooterLeft";
import FooterRight from "./FooterRight/FooterRight";
import "./styles.scss";

const Footer = () => {
  return (
    <>
    <footer>
      <div className="socialMediaAndDescription">
        <div className="footerLeft">
          <FooterLeft />
        </div>
      </div>

      <div className="moreInformations">
        <div className="footerRight">
          
        <div className="footerColumn">
          <FooterRight
            title="Information"
            firstSubTitle="About"
            secondSubTitle="Product"
            thirdSubTitle="Blog"
          />
        </div>
        <div className="footerColumn">
          <FooterRight
            title="Company"
            firstSubTitle="Community"
            secondSubTitle="Career"
            thirdSubTitle="Our Story"
          />
        </div>
        <div className="footerColumn">
          <FooterRight
            title="Contact"
            firstSubTitle="Getting Start"
            secondSubTitle="Pricing"
            thirdSubTitle="Resources"
          />
        </div>

        </div>
      </div>
    </footer>
      </>
  );
};

export default Footer;
