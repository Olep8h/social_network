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
        )
    },
    // getProfileInfo(profileId, setUserProfile) {
    //     instance.get(`profile/` + profileId)
    //         .then(response => {
    //             return response.data;
    //             setUserProfile(response.data);
    //         })
    // }
}




