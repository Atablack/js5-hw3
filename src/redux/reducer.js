// const initialState = {
//     k: 0
// }

// export default function reducer (state = initialState, action) {
//     if (action.type === 'INCREMENT') {
//         return state.k + 1
//     }
//     else if (action.type === 'DECREMENT') {
//         return state.k - 1
//     }
//     return state
// }

const initialState = {
    count: 0,
}

export function reducer(state = initialState, action){
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1,
            };
        case 'DECREMENT':
            return {
                count: state.count > 0 ? state.count - 1 : 0
            };
        default:
            return state;
    }
}