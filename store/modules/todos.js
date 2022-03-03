
const state={
    todos:[
        {
            id:1,
            name:'test'
        },
        {
            id:2,
            name:'test 2'
        }
    ]
}

const mutations = {}
const actions = {}
 
const getters = {
    allTodos:state => state.todos
}
export default{
    state,
    getters
}