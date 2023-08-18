import React from "react";
import Split from "../Split";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Comunicação Bunker99</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                Uma equipe apaixonada por marketing e publicidade, dedicada a levar a sua marca para voos mais
                altos. Nossa jornada começou com os desafios enfrentados em grandes agências, onde
                desenvolvemos cases de sucesso ao lado de marcas renomadas. Trazemos toda nossa expertise
                e ajudamos empresas como a sua a alcançarem resultados extraordinários.
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
