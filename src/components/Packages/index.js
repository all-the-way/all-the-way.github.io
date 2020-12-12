import React from "react";
import Scroll from "../Scroll";

const Packages = () => {
  return (
    <section id="tjanster" className="packages-section">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-8 mx-auto">
            <h3 className="small">Platser är begränsade</h3>
            <h2 className="heading">Vi erbjuder följande tjänster</h2>
          </div>
        </div>
        <div className="row" style={{ marginTop: 20 }}>
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-globe-europe text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Gym</h4>
                <hr className="my-4" />
                <div className="small text-black-50">
                  <p>
                    Bacon ipsum dolor amet chuck turducken salami pork. Bresaola
                    beef ribs biltong chuck capicola pork belly meatloaf
                    shoulder turducken ground round ham buffalo. Tenderloin
                    turkey meatloaf venison drumstick meatball hamburger short
                    loin. Ball tip biltong boudin flank venison, picanha tri-tip
                    andouille frankfurter beef shank. Rump t-bone short loin
                    hamburger, turducken drumstick bacon. Drumstick chislic
                    porchetta, kielbasa salami chicken prosciutto tongue tail.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-globe-europe text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">PT</h4>
                <hr className="my-4" />
                <div className="small text-black-50">
                  <p>
                    Buffalo chuck filet mignon pork short loin, tri-tip jerky
                    kielbasa ham picanha. Tenderloin flank porchetta ground
                    round chicken pig spare ribs pork belly turducken. Ribeye
                    porchetta pork belly cupim, ground round pig meatball beef
                    ribs. Kevin fatback beef ribs beef, filet mignon spare ribs
                    sirloin drumstick shoulder flank burgdoggen picanha tri-tip.
                    Strip steak beef ribs turducken ham hock ball tip. Drumstick
                    alcatra t-bone chuck kevin.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-dumbbell text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Team</h4>
                <hr className="my-4" />
                <div className="small text-black-50">
                  <p>
                    Leberkas ham hock andouille jowl tongue ground round boudin.
                    Cupim ball tip pork chop beef ribs shoulder chicken. Biltong
                    fatback pork chop pancetta doner beef. Sirloin venison pig,
                    rump pancetta t-bone cupim kevin tail shoulder turkey pork
                    chop drumstick tri-tip burgdoggen. Frankfurter pork loin
                    sausage spare ribs turducken flank.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center no-gutters mb-4 mb-lg-5 mt-5">
        <Scroll type="id" element="intresseanmalan">
          <a href="#intresseanmalan" className="btn btn-primary">
            Upplev All The Way
          </a>
        </Scroll>
      </div>
    </section>
  );
};

export default Packages;
