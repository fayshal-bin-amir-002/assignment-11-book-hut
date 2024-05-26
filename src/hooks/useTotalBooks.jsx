import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useTotalBooks = () => { 
    const { data = 0, isLoading } = useQuery({
        queryKey: ["totalBooks"],
        queryFn: async () => {
            const { data } = await axios.get("https://book-hut-server-side.vercel.app/totalBooks");
            return data.total;
        }
    });

    return {data, isLoading};
};

export default useTotalBooks;