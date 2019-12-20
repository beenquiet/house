import {createStore} from 'redux'

const store =createStore(reducer)
function reducer(state=0,action){
    switch(action.type){
        case 'changeNum':
            return state+=action.num
        default:
            return state
    }
}
const actionObj={
    type:'changeNum',
    num:1
}
store.dispatch(actionObj)
store.dispatch(actionObj)
store.dispatch(actionObj)
store.dispatch(actionObj)
console.log('state',store.getState())
