import { GithubUser, LocalGithubUser } from "types";


export const extractLocalUser = (user: GithubUser): LocalGithubUser => ({
    login: user.login,
    bio: user.bio,
    avatar: user.avatar_url,
    blog: user.blog,
    company: user.company,
    created: user.created_at,
    followers: user.followers,
    following: user.following,
    id: user.id,
    location: user.location,
    name: user.name,
    repos: user.public_repos,
    twitter: user.twitter_username
})