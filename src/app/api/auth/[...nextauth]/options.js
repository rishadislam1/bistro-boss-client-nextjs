import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import { custom } from 'openid-client';

export const options ={
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        },
        custom.setHttpOptionsDefaults({
            timeout: 5000,
          })),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
          },
          custom.setHttpOptionsDefaults({
            timeout: 5000,
          }))
    ],
    

    pages:{
        signIn: "/login"
    }
    
}