import * as actionTypes from './types/productListTypes';

import { ISingleElementList } from '../enitities/SingleElem';

export const setNewElemProductList = (newElem: ISingleElementList) => ({
    type: actionTypes.SET_NEW_ELEM,
    newElem,
})

export const removeElemProductList = (id: number) => ({
    type: actionTypes.REMOVE_ELEM,
    id
})