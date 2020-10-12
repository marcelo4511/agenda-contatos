import Vue from 'vue'
import Vuex from 'vuex'

import Category from './category'
import ContactBook from './contactbook'

Vue.use(Vuex)

const modules = {
    Category,
    ContactBook
}

export default new Vuex.Store({
    modules
})