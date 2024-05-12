import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AddBook = () => {

    const { user, librarianEmail } = useAuth();

    const axiosSecure = useAxiosSecure();

    const handleAddBook = (e) => {
        e.preventDefault();
        const form = e.target;
        const book_name = form.book_name.value;
        const author_name = form.author_name.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const quantity = parseInt(form.quantity.value);
        const rating = form.rating.value;
        const details = form.details.value;
        const comment = form.comment.value;

        const bookData = { book_name, author_name, category, photo, quantity, rating, details, comment };

        axiosSecure.post(`/add-book?email=${user?.email}`, bookData)
            .then(res => {
                if(res.data.insertedId) {
                    form.reset();
                    toast.success("Book added successfully.");
                } else {
                    toast.error("Something went wrong!");
                }
            })
    }

    return (
        <div className="min-h-[calc(100vh-398px)]">
            <form onSubmit={handleAddBook} className="bg-[#8DECB4] bg-opacity-15 p-6 lg:p-10 lg:w-2/3 mx-auto rounded-lg shadow-md my-8 md:my-14 lg:my-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                        <input type="text" name="book_name" placeholder="Book name" className="input input-bordered input-success w-full col-span-1" required />
                    </div>
                    <div>
                        <input type="text" name="author_name" placeholder="Author name" className="input input-bordered input-success w-full" required />
                    </div>
                    <div>
                        <select name="category" defaultValue={''} className="select select-success w-full" required>
                            <option disabled value=''>Select Category</option>
                            <option value="Biography">Biography</option>
                            <option value="History">History</option>
                            <option value="Health & Fitness">Health & Fitness</option>
                            <option value="Travel">Travel</option>
                            <option value="Science & Math">Science & Math</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" name="photo" placeholder="Book image Url" className="input input-bordered input-success w-full" required />
                    </div>
                    <div>
                        <input type="number" min={0} name="quantity" placeholder="Book quantity" className="input input-bordered input-success w-full" required />
                    </div>
                    <div>
                        <input type="number" min={0} max={5} step={0.1} name="rating" placeholder="Book rating" className="input input-bordered input-success w-full" required />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <textarea type="text" name="details" placeholder="Book details" className=" input input-bordered input-success w-full h-20 py-2" required />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <textarea type="text" name="comment" placeholder="Comment" className="  input input-bordered input-success w-full h-40 py-2" required />
                    </div>
                    <div className="md:col-span-2">
                        <button className="btn w-full bg-[#41B06E] rounded-full text-white text-lg mt-4 disabled:bg-red-200 disabled:text-white" disabled={user?.email !== librarianEmail}>Add Book</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddBook;