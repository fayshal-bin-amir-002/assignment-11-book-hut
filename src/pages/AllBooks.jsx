import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { FiGrid } from "react-icons/fi";
import { FaListUl } from "react-icons/fa";
import SingleBookCard from "../components/SingleBookCard";
import SingleRow from "../components/SingleRow";
import Loader from "../components/Loader";


const AllBooks = () => {

    const [available, setAvailable] = useState(false);
    const [bookStyle, setBookStyle] = useState('grid');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    const { user } = useAuth();

    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure(`/allBooks?email=${user?.email}&showAvailable=${available}`)
            .then(res => {
                setBooks(res.data);
                setLoading(false);
            })
    }, [available, user?.email, axiosSecure]);

    if(loading) {
        return <Loader></Loader>
    }

    return (
        <div className="min-h-[calc(100vh-398px)] py-8 lg:py-12">
            <div className="flex flex-wrap gap-4 justify-between items-center mb-6 md:mb-8 lg:mb-12">
                {
                    available === false ?
                        <button onClick={() => setAvailable(true)} className="btn bg-[#41B06E] rounded-full text-white text-lg">Show Available Books</button> :
                        <button onClick={() => setAvailable(false)} className="btn bg-[#41B06E] rounded-full text-white text-lg">Show All Books</button>
                }
                <div className="flex items-center justify-center gap-0">
                    <button onClick={() => setBookStyle('grid')} className="btn rounded-s-full text-2xl bg-[#8DECB4]"><FiGrid /></button>
                    <button onClick={() => setBookStyle('list')} className="btn rounded-r-full text-2xl bg-[#FFF5E0]"><FaListUl /></button>
                </div>
            </div>
            {
                bookStyle === 'grid' ?
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {
                            books.map((book) => <SingleBookCard key={book._id} book={book}></SingleBookCard>)
                        }
                    </div> :
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead className="bg-[#FFF5E0] text-black">
                                    <tr>
                                        <th></th>
                                        <th>Book Name</th>
                                        <th>Author Name</th>
                                        <th>Category</th>
                                        <th>Rating</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        books.map((book, idx) => <SingleRow key={book._id} book={book} idx={idx}></SingleRow>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
            }
        </div>
    );
};

export default AllBooks;