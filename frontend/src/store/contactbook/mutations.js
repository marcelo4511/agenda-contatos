const SET_CONTACTBOOKS = (state,contactbooks) => {
    state.contactbooks = contactbooks
}

const POST_CONTACTBOOK = (state, contactbook) => {
    state.contactbooks.push(contactbook)
}

const REMOVE_CONTACTBOOK = (state, contactbook) => {
    var remove = state.contactbooks.findIndex(contact => contact.id === contactbook.id)
    if (remove !== -1){
        state.contactbooks.splice(remove,1)
    }
}

const UPDATE_CONTACTBOOK = (state,contactbook) => {
     state.contactbooks.forEach(contact => contact.id === contactbook.id)
           
}
export default{
    SET_CONTACTBOOKS,
    POST_CONTACTBOOK,
    UPDATE_CONTACTBOOK,
    REMOVE_CONTACTBOOK
}