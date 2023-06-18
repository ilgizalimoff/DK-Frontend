import { Post } from '@/const';
import { makeAutoObservable } from 'mobx';

class Posts {
    _posts: Post[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    setPosts(posts: Post[]) {
        this._posts = [...this._posts, ...posts]
    }

    addNewPost(post: Post) {
        this._posts = [...this._posts, post]
    }

    get fetchPosts() {
        return this._posts;
    }
}

export default new Posts();