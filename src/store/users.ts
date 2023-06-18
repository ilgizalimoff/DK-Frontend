import {  User } from '@/const';
import { makeAutoObservable } from 'mobx';

class Users {
    _users: User[] = []

    constructor() {
        makeAutoObservable(this);
    }

    setUsers(users: User[]) {
        this._users = users
    }

    addNewUser(user: User) {
        this._users = [...this._users, user]
    }

    get users() {
        return this._users;
    }
}

export default new Users();