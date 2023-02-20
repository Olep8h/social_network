export const GetUsers = (state) => {
    return state.usersPage.usersData
}

export const GetPageSize = (state) => {
    return state.usersPage.pageSize
}

export const GetTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const GetCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const GetIsFetching = (state) => {
    return state.usersPage.isLoading
}

export const GetFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}