import types from '../actions/types';
const DEFAULT_STATE = {
    studentList: [ 
        {
            id: 0,
            name: 'Ryan Libed',
            grade: 100,
            course: 'PSYC100'
        },
        {
            id: 1,
            name: 'Laura Nguyen',
            grade: 100,
            course: 'BUS132'
        },
        {
            id: 2,
            name: 'Larry Tran',
            grade: 87,
            course: 'CHEM127'
        }
     ]
}

export default function (state = DEFAULT_STATE, action) {
    switch(action.type) {
        case types.ADD_STUDENT:
            return {...state, studentList: [action.payload, ...state.studentList]}
        case types.DELETE_STUDENT:
            state.studentList.splice(action.payload, 1);
            console.log(state.studentList)
            return {studentList: state.studentList}
        default:
            return state;
    }
}