import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { push } from "connected-react-router";
import { actions as toastrActions } from "react-redux-toastr";
import ProductActions from "../ducks/product";

export function* getProducts() {
  const { data } = yield call(api.get, "product");

  yield put(ProductActions.getProductsSuccess(data));
}

export function* createProducts({ name, code, quantity }) {
  try {
    yield call(api.post, "product", { name, code, quantity });

    yield put(push("/product"));

    yield put(
      toastrActions.add({
        type: "success",
        title: "Product Success!",
        message: "Product created!"
      })
    );
  } catch (e) {
    yield put(
      toastrActions.add({
        type: "error",
        title: "Product Error!",
        message: "Check the fields!"
      })
    );
  }
}

export function* getOrders() {
  const { data } = yield call(api.get, "order");
  yield put(ProductActions.getOrdersSuccess(data));
}

export function* getById({ id }) {
  const { data } = yield call(api.get, `product/${id}`);
  yield put(ProductActions.getProductByIdSuccess(data));
}

export function* createOrder({ product_id, quantity }) {
  try {
    yield call(api.post, "order", { product_id, quantity });

    yield put(push("/worker/myschedules"));

    yield put(
      toastrActions.add({
        type: "success",
        title: "Order Success!",
        message: "Order was send!"
      })
    );
  } catch (e) {
    yield put(
      toastrActions.add({
        type: "error",
        title: "Order Error!",
        message: "Something went wrong!"
      })
    );
  }
}
