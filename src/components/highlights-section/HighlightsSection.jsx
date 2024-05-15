import "./HighlightsSection.scss";
import salad from "../../assets/images/greek salad.jpg";
import bruchetta from "../../assets/images/bruchetta.svg";
import dessert from "../../assets/images/lemon dessert.jpg";
import SpecialsCards from "../specials-cards/SpecialsCards";
import { ROUTE_PATHS } from "../../App";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../services/AppContext";

function HighlightsSection() {
  const navigate = useNavigate();
  const { sectionAntipasti, sectionDesserts } = useAppContext();
  //console.log(sectionAntipasti, sectionDesserts);
  return (
    <div className="highlights-container section-container">
      <div className="top-bar">
        <header>Specials</header>
        <button
          onClick={() => {
            navigate(ROUTE_PATHS.MENU);
          }}
        >
          Online Menu
        </button>
      </div>
      <div className="cards">
        <SpecialsCards
          photo={salad}
          dishName={sectionAntipasti[4].dish}
          price={sectionAntipasti[4].price}
          dishDescription="The famous caesar salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
          numberOfItemsInBasket={sectionAntipasti[4].numberOfItemsInBasket}
          sectionType={sectionAntipasti[4].sectionType}
        />
        <SpecialsCards
          photo={bruchetta}
          dishName={sectionAntipasti[3].dish}
          price={sectionAntipasti[3].price}
          dishDescription="Our Caprese is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
          numberOfItemsInBasket={sectionAntipasti[3].numberOfItemsInBasket}
          sectionType={sectionAntipasti[3].sectionType}
        />
        <SpecialsCards
          photo={dessert}
          dishName={sectionDesserts[2].dish}
          price={sectionDesserts[2].price}
          dishDescription="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
          numberOfItemsInBasket={sectionDesserts[2].numberOfItemsInBasket}
          sectionType={sectionDesserts[2].sectionType}
        />
      </div>
    </div>
  );
}

export default HighlightsSection;
