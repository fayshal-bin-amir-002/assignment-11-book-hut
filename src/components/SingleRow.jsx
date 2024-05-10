import PropTypes from 'prop-types';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const SingleRow = ({ book, idx }) => {

    const { user, librarianEmail } = useAuth();

    const { _id, book_name, author_name, rating, category, quantity } = book;

    return (
        <tr>
            <th>{idx + 1}</th>
            <td>{book_name}</td>
            <td>{author_name}</td>
            <td>{category}</td>
            <td>{rating}</td>
            <td>{quantity > 0 ? "Available" : "Not availabele"}</td>
            <td>
                <Link to={`/update-book/${_id}`} className='btn text-xl btn-sm bg-[#41B06E] text-white border-none' disabled={user?.email !== librarianEmail}><FiEdit /></Link>
            </td>
        </tr>
    );
};

SingleRow.propTypes = {
    book: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired
};

export default SingleRow;