import Banner from "../components/Banner";
import BookCategory from "../components/BookCategory";
import FaqSection from "../components/FaqSection";
import HappyUsers from "../components/HappyUsers";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BookCategory></BookCategory>
            <FaqSection></FaqSection>
            <HappyUsers></HappyUsers>
        </div>
    );
};

export default Home;