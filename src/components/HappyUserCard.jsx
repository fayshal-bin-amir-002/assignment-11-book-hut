import PropTypes from 'prop-types';

const HappyUserCard = ({ card }) => {

    const { name, img_url, feedback } = card;

    return (
        <div className='p-4 md:p-6 lg:p-8 flex flex-col gap-4 justify-center items-center w-[350px] lg:h-[270px] lg:w-[450px] shadow-lg mx-6 lg:mx-12 rounded-lg border'>
            <img src={img_url} alt="" className='size-[70px] lg:size-[100px] object-cover rounded-full' />
            <h3 className='text-lg font-medium'>Name: {name}</h3>
            <p className='opacity-80'>{feedback}</p>
        </div>
    );
};

HappyUserCard.propTypes = {
    card: PropTypes.object.isRequired
};

export default HappyUserCard;