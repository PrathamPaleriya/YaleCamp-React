import { useEffect, useState, useCallback } from 'react';
import { databases } from '../appwrite/config';

export default function useFetchData(databaseId, collectionId) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        try {
            const response = await databases.listDocuments(databaseId, collectionId);
            setData(response.documents);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }, [databaseId, collectionId]);

    useEffect(() => {
        setLoading(true);
        fetchData();
    }, [fetchData]);

    return { data, loading, error };
}
