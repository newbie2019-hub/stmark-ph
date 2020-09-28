import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        deleteModalObj : {
            showDeleteModal: false,
            deleteUrl : '',
            method: '',
            isDeleted : false,
            msg: '',
            successMsg: ''
        },
        editPostObj: {
            id: '',
            title: '',
            description: '',
            featuredImage: '',
            tags: [],
            content: '',
        },
        userObj: {
            id: '',
            name: '',
            email: '',
            role: '',
        },
    },
    getters: {
        getDeleteModalObj(state){
            return state.deleteModalObj
        },
        getEditPostObj(state){
            return state.editPostObj
        },
        getUserObj(state){
            return state.userObj
        }
    },

    mutations: {
        setDeleteModal(state, data){
            const deleteModalObj = {
                showDeleteModal: false,
                method: '',
                deleteUrl : '',
                isDeleted : data,
                msg: '',
                successMsg: '',
            }

            state.deleteModalObj = deleteModalObj
        },
        setDeletingModalObj(state, data){
            state.deleteModalObj = data
        },

        setPostObj(state, data){
            state.editPostObj = data
        },
        setDefaultPostObj(){
            const editPostObj = {
                id: '',
                title: '',
                description: '',
                content: '',
            }
            state.editPostObj = editPostObj
        },

        setUserObj(state, data){
            state.userObj = data
        },
    },
    actions :{

    }

})
