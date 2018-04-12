import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    isRequesting: false,
    isError: false
}

const mutations = {
    saveIsRequesting(state, isRequesting) {
        state.isRequesting = isRequesting;
    },
    saveIsError(state, isError) {
        state.isError = isError;
    },
}

const actions = {
    setIsRequesting({
        commit
    }, isRequesting) {
        commit('saveIsRequesting', isRequesting);
    },
    setIsError({
        commit
    }, isError) {
        commit('saveIsError', isError);
    },
}
export default new Vuex.Store({
    state,
    actions,
    mutations
})
