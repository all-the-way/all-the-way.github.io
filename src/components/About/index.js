import React from "react";
import Scroll from "../Scroll";
import aboutImage from "../../assets/images/about.jpg";

const About = () => {
  return (
    <section id="upplev-oss" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-5 col-lg-4">
            <img className="img-fluid mb-3 mb-lg-0" src={aboutImage} alt="" />
          </div>
          <div className="col-xl-7 col-lg-8">
            <div className="featured-text text-center text-lg-left">
              <h2 className="heading">Upplev oss</h2>
              <p className="text-black-50 mb-3">
                Sweet roll gingerbread cotton candy jelly beans gummi bears
                chupa chups pudding icing. Brownie cupcake cheesecake lollipop.
                Sweet roll gummies topping dessert muffin cotton candy chocolate
                bar jelly-o caramels. Brownie caramels soufflé wafer croissant
                cupcake toffee cake tiramisu. Chupa chups candy powder halvah
                gummies. Jelly-o donut dragée biscuit cookie tootsie roll.
                Cheesecake cheesecake cake.
              </p>
              <p className="text-black-50 mb-3">
                Cake lollipop brownie danish cake chupa chups marshmallow.
                Sesame snaps soufflé croissant. Gummies toffee chocolate cake
                muffin cookie chocolate. Toffee sweet cookie gingerbread
                croissant tootsie roll cupcake powder. Marshmallow jelly beans
                carrot cake oat cake gingerbread powder lollipop chocolate bar
                halvah. Jelly cotton candy brownie cake jelly muffin carrot cake
                sugar plum chocolate cake. Tootsie roll carrot cake marzipan
                apple pie chocolate cake gummies sweet roll. Brownie caramels
                soufflé wafer croissant cupcake toffee cake tiramisu.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center no-gutters mb-4 mb-lg-5">
        <Scroll type="id" element="intresseanmalan">
          <a href="#intresseanmalan" className="btn btn-primary">
            Boka visning
          </a>
        </Scroll>
      </div>
    </section>
  );
};

export default About;
