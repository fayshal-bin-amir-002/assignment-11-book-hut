import { useLoaderData } from "react-router-dom";
import BookCategoryCard from "../components/BookCategoryCard";

const BookCategories = () => {

    const books = useLoaderData();

    return (
        <div className="min-h-[calc(100vh-398px)]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 py-8 md:py-10 lg:py-16">
                {
                    books.map((book) => <BookCategoryCard key={book._id} book={book}></BookCategoryCard>)
                }
            </div>
        </div>
    );
};

export default BookCategories;