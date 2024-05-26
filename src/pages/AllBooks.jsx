import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useEffect, useRef, useState } from "react";
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
    const [currentPage, setCurrentPage] = useState(1);
    const [totalBooks, setTotalBooks] = useState(0);
    const [searchText, setSearchText] = useState("");

    const searchRef = useRef();

    const { user, librarianEmail } = useAuth();

    const axiosSecure = useAxiosSecure();

    const booksPerPage = 12;

    const totalPages = [...Array(Math.ceil(totalBooks / booksPerPage)).keys()];

    useEffect(() => {
        setLoading(true);
        axiosSecure(`/allBooks?email=${user?.email}&showAvailable=${available}&page=${currentPage - 1}&size=${booksPerPage}&bookName=${searchText}`)
            .then(res => {
                setBooks(res.data.result);
                setTotalBooks(res.data.total);
                setLoading(false);
            })
    }, [available, user?.email, axiosSecure, currentPage, searchText, totalBooks]);

    const handleSearch = () => {
        const txt = searchRef.current.value;
        setSearchText(txt);
        setCurrentPage(1);
    }


    return (
        <div className="min-h-[calc(100vh-398px)] py-8 lg:py-12">
            <div className="flex flex-wrap gap-4 justify-between items-center mb-10 lg:mb-16">
                <div>
                    {
                        available === false ?
                            <button onClick={() => setAvailable(true)} className="btn bg-[#41B06E] rounded-full text-white text-lg">Show Available Books</button> :
                            <button onClick={() => setAvailable(false)} className="btn bg-[#41B06E] rounded-full text-white text-lg">Show All Books</button>
                    }
                </div>
                <div>
                    <label className="input input-bordered flex items-center gap-2">
                        <input ref={searchRef} type="text" className="lg:w-[500px]" placeholder="Search book name" />
                        <button onClick={handleSearch} className=" bg-[#41B06E] bg-opacity-50 rounded-full p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        </button>
                    </label>
                </div>
                <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} role="button" className="btn bg-[#41B06E] rounded-full text-white text-lg">View Books By</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40 space-y-3">
                        <li>
                            <button onClick={() => {
                                setBookStyle('grid')
                                setCurrentPage(1)
                            }} className="btn rounded-full text-xl bg-[#8DECB4]"><FiGrid /> Grid</button>
                        </li>
                        <li>
                            <button onClick={() => {
                                setBookStyle('list')
                                setCurrentPage(1)
                            }} className="btn rounded-full text-xl bg-[#FFF5E0]"><FaListUl />List</button>
                        </li>
                    </ul>
                </div>
            </div>
            {

                loading ? <Loader></Loader> : books.length === 0 ?
                    <div className="min-h-[20vh] flex justify-center items-center"><p className="text-3xl md:text-5xl font-medium text-red-500">No Book Found!</p></div> :
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
                                            <th>Quantity</th>
                                            <th>Status</th>
                                            {
                                                user?.email === librarianEmail &&
                                                <th>Actions</th>
                                            }
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            books && books.map((book, idx) => <SingleRow key={book._id} book={book} idx={idx}></SingleRow>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
            }
            <div className="pt-12 flex items-center justify-center gap-5">
                {

                    totalPages.map((page) => <button onClick={() => setCurrentPage(page + 1)} className={`${currentPage === page + 1 ? 'bg-[#41B06E] text-white' : ''} btn`} key={page}>{page + 1}</button>)
                }
            </div>
        </div>
    );
};

export default AllBooks;