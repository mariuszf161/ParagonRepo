import { combineReducers } from 'redux';

import productList, { IProductListReducer } from './ProductListReducer';

export default combineReducers({
    productList
});

export interface IState {
    productList: IProductListReducer;
}