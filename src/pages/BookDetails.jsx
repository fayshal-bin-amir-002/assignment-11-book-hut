import { useLoaderData, useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const BookDetails = () => {

    const book = useLoaderData();

    const navigate = useNavigate();

    const { user } = useAuth();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [date, setDate] = useState('');

    const { _id, book_name, author_name, photo, rating, category, quantity, details, comment } = book;

    const handleBorrowBook = () => {
        const borrowerEmail = user?.email;
        setEmail(borrowerEmail);
        const borrowerName = user?.displayName;
        setName(borrowerName)
        const date = new Date();
        date.setDate(date.getDate() + 7);
        const returnDate = date.toLocaleDateString();
        setDate(returnDate);

        handleModal({});

    }

    const handleModal = () => {
        document.getElementById('my_modal_3').showModal();
    }

    const handleConfirm = (id) => {
        const borrowingBookId = id;
        const borrowerEmail = user?.email;
        const borrowerName = user?.displayName;
        const date = new Date();
        date.setDate(date.getDate() + 7);
        const borrowedDate = new Date().toLocaleDateString();
        const returnDate = date.toLocaleDateString();

        const borrowedBook = {
            photo, book_name, category,
            borrower: {
                borrowingBookId, borrowerEmail, borrowerName, borrowedDate, returnDate
            }
        };

        axios.post('http://localhost:3000/borrow-books', borrowedBook)
            .then(() => {
                axios.patch(`http://localhost:3000/update-quantity/${id}`, { returnDate })
                    .then(() => {
                        toast.success("Book successfully borrowed.");
                        navigate("/borrowed-books");
                    })
            })
            .catch(error => {
                toast.error(error.response.data);
            })



    }

    return (
        <div className="min-h-[calc(100vh-398px)] py-8 flex justify-center items-center">
            <div className="flex flex-col-reverse justify-between items-center lg:flex-row lg:w-[75%] gap-6">
                <div className="flex flex-col p-6 lg:w-1/2 lg:p-10">
                    <h1 className="text-2xl font-semibold">Book Name : {book_name}</h1>
                    <p className="py-4">Written By : {author_name}</p>
                    <p><span className='font-semibold'>Category : </span> <span className='bg-[#8DECB4] px-2 py-1 rounded-full ms-2'>{category}</span></p>
                    <span className="py-4"><span className='font-semibold mr-3'>Rating : </span>
                        <StarRatings
                            starDimension="24px"
                            rating={parseFloat(rating)}
                            starRatedColor="#8DECB4"
                            numberOfStars={5}
                            name='rating'
                        />
                    </span>
                    <p>Available Book : <span className="bg-red-300 px-2 py-1 rounded-full text-white font-medium">{quantity}</span></p>
                    <p className="py-4">{details}</p>
                    <p className="opacity-60">Comment : {comment}</p>
                    <button onClick={() => handleBorrowBook()} className="btn my-6 w-full bg-[#41B06E] rounded-full text-white text-lg " disabled={quantity === 0}>Borrow</button>
                </div>
                <div >
                    <img src={photo} alt="" className="h-[400px] object-cover" />
                </div>
            </div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form>
                        <label className="form-control w-full">
                            <div className="label -mb-3">
                                <span className="label-text">Name</span>
                            </div>
                            <input defaultValue={name} type="text" className="input input-bordered w-full my-3" disabled />
                        </label>
                        <label className="form-control w-full">
                            <div className="label -mb-3">
                                <span className="label-text">Email</span>
                            </div>
                            <input defaultValue={email} type="text" className="input input-bordered w-full my-3" disabled />
                        </label>
                        <label className="form-control w-full">
                            <div className="label -mb-3">
                                <span className="label-text">Last Return Date</span>
                            </div>
                            <input defaultValue={date} type="text" className="input input-bordered w-full my-3" disabled />
                        </label>
                    </form>
                    <form method="dialog">
                        <button onClick={() => handleConfirm(_id)} className="btn bg-[#41B06E] text-white text-lg">Confirm</button>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default BookDetails;