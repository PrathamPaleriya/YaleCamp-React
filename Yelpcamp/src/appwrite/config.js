import { Account, Client, Databases, ImageGravity, Storage,} from 'appwrite';

const client = new Client();

client
    .setEndpoint(import.meta.env.VITE_ENDPOINT)
    .setProject(import.meta.env.VITE_PROJECT_ID);

const databases = new Databases(client)

const storage = new Storage(client)

const account = new Account(client)

// const result = await databases.getDocument(
//     import.meta.env.VITE_DATABASE_ID,
//     import.meta.env.VITE_COLLECTION_CAMPS_ID,
//     "667474b50005dfd0c809"
// )

// console.log(result)
// const camp = result.documents[0].images[0]

// const result2 = await storage.getFilePreview(
//     import.meta.env.VITE_BUCKET_CAMPIMAGE_ID, 
//     camp
// )

// console.log(result2.href)



export {client, databases, storage, account};