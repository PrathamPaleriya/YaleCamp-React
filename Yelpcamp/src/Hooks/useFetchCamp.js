
import React, { useEffect , useState} from 'react'
import { databases } from '../appwrite/config'

export default function useFetchCamp(databaseId, collectionId, documentId) {

    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)
    const [location, setLocation] = React.useState([10.00, 120.6919])

    useEffect(()=>{
 
        const fetchData = async () => {
            try{
                const response = await databases.getDocument(databaseId, collectionId, documentId);
                setData(response);
                setLocation(response.location)
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false)
            }
        }

        fetchData();
    }, [databaseId, collectionId, documentId])

  return {data, loading, error, location}
}
