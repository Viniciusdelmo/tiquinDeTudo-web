import "./styles.scss";
const FooterLeft = () => {
  return (
    <div className="containerFooterLeft">
      <div className="firstFooter">
        <div>
          <h2>TIQUIN DE TUDO</h2>
        </div>
        <div>
          <p>
            We help you find <br /> your dream product
          </p>
        </div>
        <div className="socialMedia">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <div>
              <img src="/Footer/facebook.svg" alt="" />
            </div>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <div>
            <img src="/Footer/instagram.svg" alt="" />
          </div>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <div>
            <img src="/Footer/twitter.svg" alt="" />
          </div>
          </a>
        </div>
      </div>
      <div id="reservedTerm">2023 all Right Reserved Term of use TIQUIN DE TUDO</div>
    </div>
  );
};

export default FooterLeft;
