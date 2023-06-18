import { Post } from "@/const"
import axios from "axios"

export const getAllPosts = async () => {
    const response = await axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .catch((e) => alert(e))
    return response?.data
}

export const getPosts = async (limit: number, page: number) => {
    const response = await axios
        .get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
        .catch((e) => alert(e))
    return response?.data
}

export const getPostById = async (id: number) => {
    const response = await axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .catch((e) => alert(e))
    return response?.data
}

export const getUserById = async (id: number) => {
    const response = await axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .catch((e) => alert(e))
    return response?.data
}

export const getUsers = async () => {
    const response = await axios
        .get(`https://jsonplaceholder.typicode.com/users`)
        .catch((e) => alert(e))
    return response?.data
}

export const addPost = async (post: Post) => {
    const response = await axios
        .post(`https://jsonplaceholder.typicode.com/posts`, post)
        .catch((e) => alert(e))
    return response?.data
}