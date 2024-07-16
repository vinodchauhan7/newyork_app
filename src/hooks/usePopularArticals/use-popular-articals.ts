import React, { useCallback, useEffect} from "react"
import { onGetMostPopularArticalsApiCall } from "../../actions/most-popular-api/most-popular-api-action";

export const usePopularArticals = () => {
    const [articalsSize, setArticalsSize] = React.useState<number>(1);
    const [popularArticals, setPopularArticals] = React.useState([]);
    const [loading, setLoading] = React.useState<boolean>(false);

    const onClickSetArticalsSize = (size: number) => {
        onGetMostPopularArticals(size);
    }

    const onGetMostPopularArticals = useCallback(async (size = 1) => {
        setLoading(true);
        setArticalsSize(size);
        const response = await onGetMostPopularArticalsApiCall(articalsSize);
        if (response.status === "OK") {
            setPopularArticals(response.results)
            setLoading(false);
        }
    },[articalsSize]);


    useEffect(() => {
        if (popularArticals?.length === 0) {
            onGetMostPopularArticals();
        }
    }, [onGetMostPopularArticals, popularArticals?.length]);

    return {
        articalsSize,
        onClickSetArticalsSize,
        onGetMostPopularArticals,
        popularArticals,
        loading,
    }
}