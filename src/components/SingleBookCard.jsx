import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { FiEdit } from "react-icons/fi";
import useAuth from '../hooks/useAuth';

const SingleBookCard = ({ book }) => {

    const { user, librarianEmail } = useAuth();

    const { _id, book_name, author_name, photo, rating, category, quantity } = book;

    return (
        <div className="flex flex-col justify-between rounded-md shadow-md dark:bg-gray-50  border border-[#8DECB4]">
            <div className='relative'>
                <img src={photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 " />
                <div className="flex flex-col justify-between p-4 space-y-7">
                    <div className="space-y-5">
                        <div className='flex items-center gap-6 justify-between'>
                            <h2 className="text-lg font-semibold tracking-wide">{book_name}</h2>
                            <p>By. {author_name}</p>
                        </div>
                        <p className=""><span className='font-semibold'>Category :</span> <span className='bg-[#8DECB4] px-2 py-1 rounded-full ms-2'>{category}</span></p>
                        <StarRatings
                            starDimension="24px"
                            rating={parseFloat(rating)}
                            starRatedColor="#8DECB4"
                            numberOfStars={5}
                            name='rating'
                        />
                    </div>
                </div>
                <div className='absolute -top-4 -left-4'>
                    <p className={quantity > 0 ? 'bg-[#8DECB4] max-w-max px-2 py-1 rounded-full' : 'bg-red-300 max-w-max px-2 py-1 rounded-full'}>{quantity > 0 ? 'Available' : 'Not available'}</p>
                </div>
                <div className='absolute top-3 right-3'>
                    <Link to={`/update-book/${_id}`} className='btn text-2xl bg-[#41B06E] text-white border-none' disabled={user?.email !== librarianEmail}><FiEdit /></Link>
                </div>
            </div>
        </div>
    );
};

SingleBookCard.propTypes = {
    book: PropTypes.object.isRequired
};

export default SingleBookCard;