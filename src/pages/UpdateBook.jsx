import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateBook = () => {

    const book = useLoaderData();

    const { _id, book_name, author_name, photo, rating, category, quantity } = book;

    const { user, librarianEmail } = useAuth();

    const handleAddBook = (e) => {
        e.preventDefault();
        const form = e.target;
        const book_name = form.book_name.value;
        const author_name = form.author_name.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const quantity = parseInt(form.quantity.value);
        const rating = form.rating.value;


        const bookData = { book_name, author_name, category, photo, quantity, rating };

        axios.patch(`http://localhost:3000/update-book/${_id}`, bookData)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    toast.success("Book updated successfully.");
                } else {
                    toast.error("Something went wrong!");
                }
            })
    }

    return (
        <div className="min-h-[calc(100vh-398px)]">
            <form onSubmit={handleAddBook} className="bg-[#8DECB4] bg-opacity-15 p-6 lg:p-10 lg:w-2/3 mx-auto rounded-lg shadow-md my-8 md:my-14 lg:my-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Book Name</span>
                        </div>
                        <input type="text" defaultValue={book_name} name="book_name" placeholder="Book name" className="input input-bordered input-success w-full col-span-1" required />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Author name</span>
                        </div>
                        <input type="text" defaultValue={author_name} name="author_name" placeholder="Author name" className="input input-bordered input-success w-full" required />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Book category</span>
                        </div>
                        <select name="category" defaultValue={category} className="select select-success w-full">
                            <option disabled value=''>Select Category</option>
                            <option value="Biography">Biography</option>
                            <option value="History">History</option>
                            <option value="Health & Fitness">Health & Fitness</option>
                            <option value="Travel">Travel</option>
                            <option value="Science & Math">Science & Math</option>
                        </select>
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Photo url</span>
                        </div>
                        <input type="text" defaultValue={photo} name="photo" placeholder="Book image Url" className="input input-bordered input-success w-full" required />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Quantity</span>
                        </div>
                        <input type="number" defaultValue={quantity} min={0} name="quantity" placeholder="Book quantity" className="input input-bordered input-success w-full" required />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Rating</span>
                        </div>
                        <input type="number" defaultValue={rating} step={0.1} min={0} max={5} name="rating" placeholder="Book rating" className="input input-bordered input-success w-full" required />
                    </label>
                    <div className="md:col-span-2">
                        <button className="btn w-full bg-[#41B06E] rounded-full text-white text-lg mt-4 disabled:bg-red-200 disabled:text-white" disabled={user?.email !== librarianEmail}>Update Book</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateBook;


