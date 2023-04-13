import {all, takeLatest} from 'redux-saga/effects'

function checkProduct(){
console.log('add cart')
}

export default all([
  takeLatest('ADD_PRODUCT_TO_CART', checkProduct)
])