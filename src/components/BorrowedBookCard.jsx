import PropTypes from 'prop-types';

const BorrowedBookCard = ({ card, handleReturnBook }) => {

    const { _id, photo, book_name, category, borrower } = card;

    return (
        <div className="rounded-md shadow-md">
            <div className='flex flex-col justify-between'>
                <div>
                    <img src={photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 " />
                    <div className="flex flex-col justify-between p-4 space-y-7">
                        <div className="space-y-4">
                            <div>
                                <h2 className="text-lg font-semibold tracking-wide">{book_name}</h2>
                            </div>
                            <p className=""><span className='font-semibold'>Category :</span> <span className='bg-[#8DECB4] px-2 py-1 rounded-full ms-2'>{category}</span></p>
                            <p>Borrowed Date : {borrower.borrowedDate}</p>
                            <p>Return Date : {borrower.returnDate}</p>
                        </div>
                    </div>
                </div>
                <div className='px-4'>
                    <button onClick={() => handleReturnBook(_id, borrower.borrowingBookId)} className="btn w-full mt-4 bg-[#41B06E] text-white text-base rounded-full mb-4">Return Book</button>
                </div>
            </div>
        </div>
    );
};

BorrowedBookCard.propTypes = {
    card: PropTypes.object.isRequired,
    handleReturnBook: PropTypes.func.isRequired
};

export default BorrowedBookCard;