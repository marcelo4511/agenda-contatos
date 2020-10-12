import axios from 'axios'

 const setContactBooks = ({commit}) => {
   axios.get('http://127.0.0.1:8000/api/contactbooks')
   .then(response => {
       console.log(response.data)
       commit('SET_CONTACTBOOKS',response.data)
   })
}

const postContactBook = ({commit},ContactBook) => {
    axios.post('http://127.0.0.1:8000/api/contactbooks',ContactBook)
  
        .then(() => { 
            commit('POST_CONTACTBOOK',ContactBook)
        })
}

const removeContactBook = ({commit}, ContactBook) => {
    axios.delete(`http://127.0.0.1:8000/api/contactbooks/${ContactBook.id}`)
       .then((response) =>{
           console.log(response.data)
           commit('REMOVE_CONTACTBOOK', ContactBook)
       })
}
const updateContactBook = async( { commit }, ContactBook) => {
     await axios.put(`http://127.0.0.1:8000/api/contactbooks/${ContactBook.id}`,ContactBook)
     .then((res) =>{
        console.log(res.data)
    })
    commit('UPDATE_CONTACTBOOK', ContactBook);
}

export default {
    setContactBooks,
    postContactBook,
    updateContactBook,
    removeContactBook
}
