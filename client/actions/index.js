import axios from 'axios';
import types from './types';

export function addStudent (studentObj) {
    return {
        type: types.ADD_STUDENT,
        payload: studentObj
    }
}