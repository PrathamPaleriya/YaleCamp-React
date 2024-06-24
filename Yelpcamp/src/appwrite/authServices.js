import { Account, Client, ID } from "appwrite";


export class AuthServices {

    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(import.meta.env.VITE_ENDPOINT)
            .setProject(import.meta.env.VITE_PROJECT_ID);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                this.login(email, password);
            }
            else {
                return null
            }

        } catch (error) {
            throw error
        }
    }

    async login({email, password}) {
        try {

            return await this.account.createEmailPasswordSession(email, password);
            
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error
        }

        return null;

    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error
        }
    }

    
}


const authServices = new AuthServices();
export default authServices