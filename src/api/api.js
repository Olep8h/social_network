import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return (
            instance.get(`users?page=${currentPage}&count${pageSize} `)
                .then(response => {
                    return response.data;
                })
        )
    },
    follow(userId) {
        return (
            instance.post(`follow/${userId}`)
                .then(response => {
                    return response.data;
                })
        )
    },
    unfollow(userId) {
        return (
            instance.delete(`follow/${userId}`)
                .then(response => {
                    return response.data;
                })
        )},
    getProfileInfo(profileId) {
        return (
            instance.get( `profile/`+ profileId)
        )}
}

export const loginAPI = {
    me() {
        return (
            instance.get(`auth/me`)
        )}
}





