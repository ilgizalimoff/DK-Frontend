import { makeAutoObservable } from 'mobx';

class Pagination {
    _limit: number = 10
    _page: number = 1
    _totalCount = 0

    constructor() {
        makeAutoObservable(this);
    }

    setPage(page: number) {
        this._page = page
    }

    setTotalCount(totalCount: number) {
        this._totalCount = totalCount
    }

    get page() {
        return this._page;
    }

    get limit() {
        return this._limit;
    }

    get totalCount() {
        return this._totalCount
    }
}

export default new Pagination();