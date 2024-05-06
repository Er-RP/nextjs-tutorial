import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import { doLogin } from "@/server/controllers/userController"
import { redirect } from "next/navigation"
export const { handlers :{GET,POST}, auth, signIn, signOut } = NextAuth(
    {
        providers:[
                Google(
                    {
                        clientId: process.env.GOOGLE_ID,
                        clientSecret: process.env.GOOGLE_SECRET

                    }),
                    GitHub(
                    {
                        clientId:process.env.GITHUB_ID,
                        clientSecret:process.env.GITHUB_SECRET
                    }
                ),
                Credentials({
                    async authorize({username,password}) {
                        try {
                            return await doLogin(username as string,password as string) 
                        } catch (error) {
                            return null;
                        }
                        
                    }, 
                })
            ],
callbacks:{
    async signIn({account,user,profile}){
        if(account?.provider === "github"){
            // Logic for creating / existing account check
        }
        if(account?.provider === "credentials"){
            // redirect("/")
            // Logic for creating / existing account check
        }
        return true
    }
}
    }
)