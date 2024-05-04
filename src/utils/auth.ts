import NextAuth from "next-auth"
import github from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
export const { handlers :{GET,POST}, auth, signIn, signOut } = NextAuth(
    {
        providers:
            [
                GoogleProvider(
                    {
                        clientId: process.env.GOOGLE_ID,
                        clientSecret: process.env.GOOGLE_SECRET

                    }),
                github(
                    {
                        clientId:process.env.GITHUB_ID,
                        clientSecret:process.env.GITHUB_SECRET
                    }
                )
            ]
    }
)