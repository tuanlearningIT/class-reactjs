
const initState = {
    user: [{ id: 1, name: ' tuan' },
    { id: 2, name: 'dung' },
    { id: 3, name: 'tuan learning IT' }
    ],
    posts: []
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE':
            console.log('run into delete user: ', action)
            let user = state.user;
            user = user.filter(item => item.id !== action.payload.id)
            return {
                ...state, user
            }
        case 'CREAT_NEW':
            let id = Math.floor(Math.random() * 1000000)
            let users = { id: id, name: `random - ${id}` }
            return {
                ...state, user: [...state.user, users]
            }
        default:
            return state;
    }

}

export default rootReducer;