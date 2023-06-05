import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
      GithubProvider({
      clientId: "4777515991a84e1d545c" as string,
      clientSecret: "056a491589a065bee5880828ec80e496fc1758de" as string,
    }),
  ],
}

export default NextAuth(authOptions)
