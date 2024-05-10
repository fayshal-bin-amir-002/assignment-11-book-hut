import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useAuth from '../hooks/useAuth';
import useAxiosSecure from '../hooks/useAxiosSecure';
import BookCategoryCard from './BookCategoryCard';

const BookCategory = () => {

    const axiosSecure = useAxiosSecure();

    const { user } = useAuth();

    const [bookCategory, setBookCategory] = useState('Biography');
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axiosSecure.get(`/books?email=${user?.email}&category=${bookCategory}`)
            .then(res => {
                setBooks(res.data);
            })
    }, [bookCategory, user?.email, axiosSecure]);

    return (
        <div className='my-8 md:my-14 lg:my-24'>
            <div className='w-full lg:w-1/2 mx-auto text-center mb-8 md:mb-12 lg:mb-16'>
                <h2 className='text-3xl lg:text-5xl font-semibold mb-5' >Book Categories</h2>
                <p className='opacity-80'>Explore diverse genres from mystery to self-help. Find your next adventure, love story, or historical journey. Discover new worlds within our book categories section.</p>
            </div>
            <Tabs>
                <div className='text-center mb-7'>
                    <TabList>
                        <Tab onClick={() => setBookCategory('Biography')}>Biography</Tab>
                        <Tab onClick={() => setBookCategory('History')}>History</Tab>
                        <Tab onClick={() => setBookCategory('Health & Fitness')}>Health & Fitness</Tab>
                        <Tab onClick={() => setBookCategory('Travel')}>Travel</Tab>
                        <Tab onClick={() => setBookCategory('Science & Math')}>Science & Math</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 '>
                        {
                            books.map((book) => <BookCategoryCard key={book._id} book={book}></BookCategoryCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 4</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 5</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default BookCategory;