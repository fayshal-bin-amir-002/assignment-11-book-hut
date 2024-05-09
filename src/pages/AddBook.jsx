import useAuth from "../hooks/useAuth";

const AddBook = () => {

    const { user, librarianEmail } = useAuth();

    const handleAddBook = (e) => {
        e.preventDefault();
    }

    return (
        <div className="min-h-[calc(100vh-398px)]">
            <form onSubmit={handleAddBook} className="bg-[#8DECB4] bg-opacity-15 p-6 my-6 lg:p-10 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 lg:w-2/3 mx-auto rounded-lg shadow-md">
                <input type="text" name="book_name" placeholder="Book name" className="input input-bordered input-success w-full" />
                <input type="text" name="author_name" placeholder="Author name" className="input input-bordered input-success w-full" />
                <select name="category" className="select select-success w-full">
                    <option disabled value=''>Select Category</option>
                    <option value="Biography">Biography</option>
                    <option value="History">History</option>
                    <option value="Health & Fitness">Health & Fitness</option>
                    <option value="Travel">Travel</option>
                    <option value="Science & Math">Science & Math</option>
                </select>
                <input type="text" name="photo" placeholder="Book image Url" className="input input-bordered input-success w-full" />
                <input type="number" min={0} name="quantity" placeholder="Book quantity" className="input input-bordered input-success w-full" />
                <input type="number" min={0} max={5} name="rating" placeholder="Book rating" className="input input-bordered input-success w-full" />
                <textarea type="text" name="details" placeholder="Book details" className="md:col-span-2 input input-bordered input-success w-full h-20 py-2" />
                <textarea type="text" name="comment" placeholder="Comment" className="md:col-span-2 input input-bordered input-success w-full h-40 py-2" />
                <button className="btn w-ful col-span-2 bg-[#41B06E] rounded-full text-white text-lg mt-4" disabled={user?.email !== librarianEmail}>Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;