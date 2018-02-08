import types from '../actions/types';
const DEFAULT_STATE = {
    studentList: [ 
        {
            name: 'Ryan Libed',
            grade: 100,
            course: 'PSYC100'
        },
        {
            name: 'Laura Nguyen',
            grade: 100,
            course: 'BUS132'
        },
        {
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
        default:
            return state;
    }
}