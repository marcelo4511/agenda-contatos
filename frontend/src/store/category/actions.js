import axios from 'axios'

 const setCategories = ({commit}) => {
   axios.get('http://127.0.0.1:8000/api/categories')
   .then(response => {
       console.log(response.data)
       commit('SET_CATEGORIES',response.data)
   })
}

const postCategory = ({commit},category) => {
    axios.post('http://127.0.0.1:8000/api/categories',category)
  
        .then(() => { 
            commit('POST_CATEGORY',category)
        })
}

const removeCategory = ({commit}, category) => {
    axios.delete(`http://127.0.0.1:8000/api/categories/${category.id}`)
       .then((response) =>{
           console.log(response.data)
           commit('REMOVE_CATEGORY',category)
       })
}
const updateCategory = async( { commit }, category) => {
     await axios.put(`http://127.0.0.1:8000/api/categories/${category.id}`,category)
     .then((res) =>{
         console.log(res.data)
     })
    commit('UPDATE_CATEGORY', category);
}

export default {
    setCategories,
    postCategory,
    updateCategory,
    removeCategory
}
