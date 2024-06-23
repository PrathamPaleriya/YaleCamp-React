import { useEffect, useState } from 'react';
import { databases } from '../appwrite/config';

export default function useFetchData(databaseId, collectionId) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCampgrounds = async () => {
            try {
                const response = await databases.listDocuments(
                  databaseId, collectionId
                );
                setData(response.documents);
                setLoading(false);
            } catch (err) {
                setError(err);
            } finally {
              setLoading(false);
            }
                
            }
        

        fetchCampgrounds();

    }, [databaseId, collectionId]);

    return { data, loading, error };
}
