import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const BookCategory = () => {

    const [bookCount, setBookCount] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://book-hut-server-side.vercel.app/books`)
            .then(res => {
                setBookCount(res.data);
                setLoading(false);
            })
    }, [setBookCount]);


    return (
        <div className='my-8 md:my-14 lg:my-24'>
            <div className='w-full lg:w-1/2 mx-auto text-center mb-8 md:mb-10 lg:mb-12'>
                <h2 className='text-3xl lg:text-5xl font-semibold mb-5' >Book Categories</h2>
                <p className='opacity-80'>Explore diverse genres from mystery to self-help. Find your next adventure, love story, or historical journey. Discover new worlds within our book categories section.</p>
            </div>

            {
                loading ? <Loader></Loader> :
                    <div className="p-5">
                        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2 justify-self-center">
                            <Link to={`/books-category/Biography`}>
                                <div className="text-white overflow-hidden hero relative rounded-lg shadow-md flex items-end justify-start w-full text-left dark:bg-gray-500 hover:scale-95 duration-300 bg-center bg-contain bg-[#FFF5E0] h-72" style={{ backgroundImage: 'url(https://hips.hearstapps.com/hmg-prod/images/bio-biopage-1675279849.jpg?crop=0.8933333333333334xw:1xh;center,top&resize=1200:*)' }}>
                                    <div className="hero-overlay absolute bg-opacity-60 w-full h-full"></div>
                                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via- dark:from-gray-50 dark:to-gray-50"></div>
                                    <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                                        <h4 className="py-2 text-xl font-semibold tracking-wider uppercase ">Biography</h4>
                                        <div className="flex flex-col justify-start text-center dark:text-gray-800">
                                            <span className="text-xl font-semibold leading-none tracking-wide">{bookCount.biography}</span>
                                            <span className="leading-none uppercase">Books</span>
                                        </div>
                                    </div>
                                    <h2 className="z-10 p-5">
                                        <p className="font-medium text-md opacity-80">Compelling life stories that inspire, inform, and captivate readers.</p>
                                    </h2>
                                </div>
                            </Link>
                            <Link to={`/books-category/History`}>
                                <div className="text-white overflow-hidden hero relative rounded-lg shadow-md flex items-end justify-start w-full text-left dark:bg-gray-500 hover:scale-95 duration-300 bg-center bg-no-repeat bg-[#FFF5E0] h-72" style={{ backgroundImage: 'url(https://dualcreditathome.com/wp-content/uploads/2014/02/history.jpg)' }}>
                                    <div className="hero-overlay absolute bg-opacity-60 w-full h-full"></div>
                                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via- dark:from-gray-50 dark:to-gray-50"></div>
                                    <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                                        <h4 className="py-2 text-xl font-semibold tracking-wider uppercase ">History</h4>
                                        <div className="flex flex-col justify-start text-center dark:text-gray-800">
                                            <span className="text-xl font-semibold leading-none tracking-wide">{bookCount.history}</span>
                                            <span className="leading-none uppercase">Books</span>
                                        </div>
                                    </div>
                                    <h2 className="z-10 p-5">
                                        <p className="font-medium text-md opacity-80">Insightful accounts revealing the past, shaping our understanding of today.</p>
                                    </h2>
                                </div>
                            </Link>
                            <Link to={`/books-category/Health & Fitness`}>
                                <div className="text-white overflow-hidden hero relative rounded-lg shadow-md flex items-end justify-start w-full text-left dark:bg-gray-500 hover:scale-95 duration-300 bg-center bg-no-repeat object-contain bg-[#FFF5E0] h-72" style={{ backgroundImage: 'url(https://thumbs.dreamstime.com/z/health-fitness-wellness-stack-books-stethoscope-wooden-background-84731460.jpg)' }}>
                                    <div className="hero-overlay absolute bg-opacity-60 w-full h-full"></div>
                                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via- dark:from-gray-50 dark:to-gray-50"></div>
                                    <div className="absolute top-0 left-0 right-0 flex gap-3 items-center justify-between mx-5 mt-3">
                                        <h4 className="py-2 text-xl font-semibold tracking-wider uppercase ">Health & Fitness</h4>
                                        <div className="flex flex-col justify-start text-center dark:text-gray-800">
                                            <span className="text-xl font-semibold leading-none tracking-wide">{bookCount["health & fitness"]}</span>
                                            <span className="leading-none uppercase">Books</span>
                                        </div>
                                    </div>
                                    <h2 className="z-10 p-5">
                                        <p className="font-medium text-md opacity-80">Guides to wellness, fostering healthier habits and happier lives.</p>
                                    </h2>
                                </div>
                            </Link>
                            <Link to={`/books-category/Travel`}>
                                <div className="text-white overflow-hidden hero relative rounded-lg shadow-md flex items-end justify-start w-full text-left dark:bg-gray-500 hover:scale-95 duration-300 bg-center bg-no-repeat object-contain bg-[#FFF5E0] h-72" style={{ backgroundImage: 'url(https://www.passengertravel.com/files/IMG_552_1647867573.jpg)' }}>
                                    <div className="hero-overlay absolute bg-opacity-60 w-full h-full"></div>
                                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via- dark:from-gray-50 dark:to-gray-50"></div>
                                    <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                                        <h4 className="py-2 text-xl font-semibold tracking-wider uppercase ">Travel</h4>
                                        <div className="flex flex-col justify-start text-center dark:text-gray-800">
                                            <span className="text-xl font-semibold leading-none tracking-wide">{bookCount.travel}</span>
                                            <span className="leading-none uppercase">Books</span>
                                        </div>
                                    </div>
                                    <h2 className="z-10 p-5">
                                        <p className="font-medium text-md opacity-80">Journeys of discovery, exploring cultures, landscapes, and personal transformations.</p>
                                    </h2>
                                </div>
                            </Link>
                            <Link to={`/books-category/Science & Math`}>
                                <div className="text-white overflow-hidden hero relative rounded-lg shadow-md flex items-end justify-start w-full text-left dark:bg-gray-500 hover:scale-95 duration-300 bg-center bg-no-repeat object-contain bg-[#FFF5E0] h-72" style={{ backgroundImage: 'url(https://www.cbu.ac.zm/schoolsAndUnits/schoolofmathematicsandnaturalsciences/wp-content/uploads/sites/5/2021/06/maths.jpg)' }}>
                                    <div className="hero-overlay absolute bg-opacity-60 w-full h-full"></div>
                                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via- dark:from-gray-50 dark:to-gray-50"></div>
                                    <div className="absolute top-0 left-0 right-0 flex gap-3 items-center justify-between mx-5 mt-3">
                                        <h4 className="py-2 text-xl font-semibold tracking-wider uppercase ">Science & Math</h4>
                                        <div className="flex flex-col justify-start text-center dark:text-gray-800">
                                            <span className="text-xl font-semibold leading-none tracking-wide">{bookCount["science & math"]}</span>
                                            <span className="leading-none uppercase">Books</span>
                                        </div>
                                    </div>
                                    <h2 className="z-10 p-5">
                                        <p className="font-medium text-md opacity-80">Exploring the mysteries of the universe, from molecules to galaxies.</p>
                                    </h2>
                                </div>
                            </Link>
                        </div>
                    </div>
            }
        </div>
    );
};

export default BookCategory;