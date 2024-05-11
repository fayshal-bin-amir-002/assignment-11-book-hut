import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

const BookCategoryCard = ({ book }) => {

    const { _id, book_name, author_name, photo, rating, category } = book;

    return (
        <div className="flex flex-col justify-between rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
            <div>
                <img src={photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 " />
                <div className="flex flex-col justify-between p-4 space-y-7">
                    <div className="space-y-5">
                        <div className='flex items-center gap-6 justify-between'>
                            <h2 className="text-lg font-semibold tracking-wide">{book_name}</h2>
                            <p>By. {author_name}</p>
                        </div>
                        <p className="dark:text-gray-800"><span className='font-semibold'>Category :</span> <span className='bg-[#8DECB4] px-2 py-1 rounded-full ms-2'>{category}</span></p>
                        <StarRatings
                            starDimension="24px"
                            rating={parseFloat(rating)}
                            starRatedColor="#8DECB4"
                            numberOfStars={5}
                            name='rating'
                        />
                    </div>
                </div>
            </div>
            <div className='px-4'>
                <Link to={`/book-details/${_id}`} className="btn w-full bg-[#41B06E] text-white text-base rounded-full mb-4">View Details</Link>
            </div>
        </div>
    );
};

BookCategoryCard.propTypes = {
    book: PropTypes.object.isRequired
};

export default BookCategoryCard;