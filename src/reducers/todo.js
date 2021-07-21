
export const todoReducer = (
    state = [
        {name: "Task 1", desc: "My task 1", done: false, id: 1},
        {name: "Task 2", desc: "My task 2", done: false, id: 2}
        ], action
) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                action.todo
            ]
        // case "DELETE_TODO":
        //     return [
        //
        //     ]


        default:
            return state;
    }
}
