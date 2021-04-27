import React from "react";
import './main_page.scss'
import { Link } from 'react-router-dom'

class MainPage extends React.Component {
  render() {
    return (
      <div>
        {/* <h1>PetFlow</h1> */}
        <div className="splash">
          <div className="images1">
            <img src="/images/cat-grooming.jpeg"></img>
            <img src="/images/dog_vet.jpeg"></img>
          </div>

          <div className="with-image">
            <div className="headline">
              <p className="about">
                Take control of your pet finances today with PetFlow!
              </p>
              <div className="break"></div>
              <p className="wallet">
                Make sure your pet gets the care it needs without breaking your
                wallet.
              </p>
            </div>
            <img src="/images/DogStats.png" className="dog-pic"></img>
          </div>

          <div className="buttons">
            <button>
              <Link className="td" to={"/login"}>
                Login
              </Link>
            </button>
            <button>
              <Link className="td" to={"/signup"}>
                Get Started Today!
              </Link>
            </button>
          </div>

          <div className="images2">
            <img src="/images/dog-treats.jpeg"></img>
            <img src="/images/dog-walk.jpeg"></img>
          </div>

          <div className="quotes">
            <div className="quote1">
              <em className="quote">
                "Seeing the amount I have been spending on my pets was pretty
                surprising. Now I can help my pets while keeping my spending in
                check."
              </em>
              <em>~Solomon Bassalian</em>
            </div>

            <div className="quote2">
              <em className="quote">
                "I can't believe I ever managed to sustain a pet without this
                app!"
              </em>
              <em>~Christian Wooddell</em>
            </div>

            <div className="quote3">
              <em className="quote">
                "Now that I see how much I've been spending on my pet, I've been
                able to adjust and save more money to hang out with the BOYS."
              </em>
              <em>~Dan Bloncourt</em>
            </div>
          </div>

          <footer className="foot">
            
            <a>Meet the creators of PetFlow:</a>
            <a href="https://www.linkedin.com/in/joshuaebrani/">
              Joshua Ebrani
            </a>
            <a href="https://www.linkedin.com/in/solomon-bassalian-ba3662174/">
              Solomon Bassalian
            </a>
            <a href="https://www.linkedin.com/in/danielbloncourt/">
              Daniel Bloncourt
            </a>
            <a href="https://www.linkedin.com/in/christian-wooddell/">
              Christian Wooddell
            </a>
          </footer>
        </div>
      </div>
    );
  }
}

export default MainPage;