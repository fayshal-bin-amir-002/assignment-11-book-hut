import axios from "axios";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import HappyUserCard from "./HappyUserCard";

const HappyUsers = () => {

    const [cards, setCards] = useState([]);

    useEffect(()=> {
        axios.get('https://book-hut-server-side.vercel.app/users-card')
            .then(res => setCards(res.data))
    }, []);

    return (
        <div className="mb-8 md:mb-16 lg:mb-24">
            <div>
                <h2 className="text-3xl lg:text-5xl font-semibold text-center mb-6 md:mb-8 lg:mb-12">Our happy users</h2>
            </div>
            <Marquee>
                {
                    cards.map((card) => <HappyUserCard key={card._id} card={card}></HappyUserCard>)
                }
            </Marquee>

        </div>
    );
};

export default HappyUsers;