import "./TestimonialsSection.scss";
import star from "../../assets/images/star.png";
import kobieta1 from "../../assets/images/kobieta1.jpg";
import kobieta2 from "../../assets/images/kobieta2.jpg";
import facet1 from "../../assets/images/facet1.jpg";
import facet2 from "../../assets/images/facet2.jpg";
import OpinionContainer from "../opinion-container/OpinionContainer";

function TestimonialsSection() {
  return (
    <div className="section-testimonials-container section-container">
      <header>What our customers say!</header>
      <div className="opinions">
        <OpinionContainer
          icon={star}
          photo={facet1}
          person="Danny May"
          text="Amazing wines, food and service. Staff are extremely knowledgeable and make great recommendations."
        />
        <OpinionContainer
          icon={star}
          photo={kobieta1}
          person="Nancy Parsons"
          text="Food is pretty good, some italian classics and some twists, and for their prices it’s 100% worth it."
        />
        <OpinionContainer
          icon={star}
          photo={facet2}
          person="Troy Hayward"
          text="Do yourself a favor and visit this lovely restaurant .  The staff truly cares about your experience."
        />
        <OpinionContainer
          icon={star}
          photo={kobieta2}
          person="Angela Walsh"
          text="Delicious food, waiters are very attentive, and super nice atmosphere. Plus it’s all at an affordable price."
        />
      </div>
    </div>
  );
}

export default TestimonialsSection;
