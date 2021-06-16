import * as actionTypes from '../actions/types/productListTypes';
import { ISingleElementList } from '../enitities/SingleElem';

export interface IProductListReducer {
    productList: ISingleElementList[];
}

const defaultState = (): IProductListReducer => ({
    productList: []
});

export default (state = defaultState(), action: any): IProductListReducer => {
    switch (action.type) {
        case actionTypes.SET_NEW_ELEM: {
            return {
                ...state,
                productList: [...state.productList, action.newElem]
            };
        }
        case actionTypes.REMOVE_ELEM: {
            return{
                ...state,
                productList: state.productList.filter(el => el.id !== action.id)
            }
            
        }
        default: {
            return state;
        }
    }
};