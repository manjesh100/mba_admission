import SectionOne from "./sectionOne/sectionOne";
import SectionTwo from "./sectionTwo/sectionTwo";
import SectionThree from "./sectionThree/sectionThree";
import SectionFour from "./sectionFour/sectionFour";
import SectionFive from "./sectionFive/sectionFive";
import SectionSix from "./sectionSix/sectionSix";
import SectionSeven from "./sectionSeven/sectionSeven";
import SectionEight from "./sectionEight/sectionEight";
import OurAdviser from "./ourAdviser/ourAdviser";
import SubscribeNewsletter from "./subscribeNewsletter/subscribeNewsletter";
import BecameAMentor from "./becameAMentor/becameAMentor";
import HowAchievable from "./howAchievable/howAchievable";
import FaqComponent from "./faq/faq";

const Homepage = () => {
    return (
        <>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <SectionSeven />
            <SectionEight />
            <HowAchievable />
            <FaqComponent />
            <BecameAMentor />
            <OurAdviser />
            <SubscribeNewsletter />
        </>
    );
};

export default Homepage;