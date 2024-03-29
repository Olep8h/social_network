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
    getProfileInfo(profileId) {

        console.warn('Obsolete method. Please use profileAPI object')
        return (
            profileAPI.getProfileInfo(profileId)
        )
    }
}

export const profileAPI = {
    getProfileInfo(profileId) {
        return (
            instance.get(`profile/` + profileId)
        )
    },
    getProfileStatus(profileId) {
        return (
            instance.get(`profile/status/` + profileId)
        )
    },
    updateProfileStatus(status) {
        return (
            instance.put(`profile/status`, {status: status})
        )
    },
    saveProfilePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return (
            instance.put(`profile/photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        )
    },
    saveProfile(profile) {
        return (
            instance.put(`profile`, profile)
        )
    }
}

export const loginAPI = {
    me() {
        return (
            instance.get(`auth/me`)
        )
    },
    login(email, password, rememberMe = false, captcha = null) {
        return (
            instance.post(`auth/login`, {email, password, rememberMe, captcha})
        )
    },
    logout() {
        return (
            instance.delete(`auth/login`)
        )
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return (
            instance.get(`security/get-captcha-url`)
        )
    }
}





