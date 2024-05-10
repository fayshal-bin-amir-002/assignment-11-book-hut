import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader";
import BorrowedBookCard from "../components/BorrowedBookCard";
import useAxiosSecure from "../hooks/useAxiosSecure";
import axios from "axios";
import toast from "react-hot-toast";

const BorrowedBooks = () => {

    const { user } = useAuth();

    const axiosSecure = useAxiosSecure();

    const { data, isLoading, refetch } = useQuery({
        queryKey: ['borrowedBooks'],
        queryFn: async () => {

            const res = await axiosSecure(`/borrow-books?email=${user?.email}`)
            const data = await res.data;
            return data || [];
        },
    })

    const handleReturnBook = (id1, id2) => {
        axios.delete(`http://localhost:3000/delete-borrowedBook/${id1}`)
            .then(res => {
                if(res.data.deletedCount === 1 ) {
                    axios.patch(`http://localhost:3000/update-quantity-increase/${id2}`, { email: user?.email })
                    .then(() => {
                        refetch();
                        toast.success('Book returned successfully');
                    })
                    .catch(error => {
                        toast.error(error.message);
                    })
                }
            })
    }

    if(isLoading) {
        return <Loader></Loader>
    }

    if(data.length === 0) {
        return (
            <div className="min-h-[calc(100vh-398px)] flex flex-col gap-10 justify-center items-center">
                <p className="text-3xl lg:text-5xl font-medium text-red-400">You did not borrow any book yet!</p>
            </div>
        )
    }

    return (
        <div className="min-h-[calc(100vh-398px)]">
            <div className="grid grid-cols-1 md:grid-cols-2 py-6 md:py-8 lg:py-12 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
                {
                    data.map((card) => <BorrowedBookCard 
                    key={card._id} card={card} handleReturnBook={handleReturnBook}></BorrowedBookCard>)
                }
            </div>
        </div>
    );
};

export default BorrowedBooks;