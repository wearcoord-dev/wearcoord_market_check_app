import axios from 'axios';
import { useQuery } from 'react-query';

type Props = {
    itemId: string;
    brand: string;
};

export const useQuerySku = (props) => {
    const itemId = props[1];
    const brand = props[2];
    // console.log(itemId, brand, props);

    const getSku = async () => {
        const { data } = await axios.get(
            `/api/sku/${itemId}?brand=${brand}`,
        );
        return data;
    };
    return useQuery<any, Error>({
        queryKey: 'sku',
        queryFn: getSku,
        // staleTime: Infinity,
    });
};
