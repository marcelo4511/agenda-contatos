const SET_CATEGORIES = (state,categories) => {
    state.categories = categories
}

const POST_CATEGORY = (state, category) => {
    state.categories.push(category)
}

const REMOVE_CATEGORY = (state, category) => {
    var remove = state.categories.findIndex(cat => cat.id === category.id)
    if (remove !== -1){
        state.categories.splice(remove,1)
    }
}

const UPDATE_CATEGORY = (state,category) => {
     state.categories.find(cat => cat.id === category.id)
           
}
export default{
    SET_CATEGORIES,
    POST_CATEGORY,
    UPDATE_CATEGORY,
    REMOVE_CATEGORY
}