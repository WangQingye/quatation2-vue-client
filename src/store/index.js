import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    isRequesting: false,
    isError: false
}

const mutations = {
    saveIsRequesting(state, isRequesting) {
        console.log('saveisRequesting');
        state.isRequesting = isRequesting;
    },
    saveIsError(state, isError) {
        console.log('saveisError');
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
