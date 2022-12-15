import { type } from '../Actions';

export const ActionReducer = (state = {}, action) => {
    switch (action.type) {
        case type.gerenteA:
            return {
                ...state,
                data: action.payload
            }
        case type.desarrollador:
            return {
                ...state,
                data: action.payload
            }
        case type.qa:
            return {
                data: action.payload
            }
        case type.gerenteB:
            return {
                data: action.payload
            }
        default:
            break;
    }
}