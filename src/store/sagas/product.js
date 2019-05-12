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

export function* updateProduct({ name, code, quantity, id }) {
  try {
    yield call(api.put, `product/${id}`, { name, code, quantity });

    yield put(push("/product"));

    yield put(
      toastrActions.add({
        type: "success",
        title: "Product Success!",
        message: "Product Updated!"
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

export function* getOrderByWorkerId() {
  const { data } = yield call(api.get, "ordermine");

  yield put(ProductActions.getOrderByWorkerIdSuccess(data.rows));
}

export function* createOrder({ product_id, quantity }) {
  try {
    const product = yield call(api.get, `product/${product_id}`);

    if (quantity > product.data.quantity) {
      return yield put(
        toastrActions.add({
          type: "error",
          title: "Order Error!",
          message: "Quantity is bigger than it should!"
        })
      );
    }

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

export function* updateOrder({ id }) {
  try {
    const order = yield call(api.put, `order/${id}`, { status: true });

    const {
      data: { product_id, quantity: orderQuantity }
    } = order;

    const product = yield call(api.get, `product/${product_id}`);

    const {
      data: { quantity: productQuantity }
    } = product;

    console.log(product);

    console.log("quantidade order: ", orderQuantity);
    console.log("quatidade de produto", productQuantity);

    let newQuantity = productQuantity - orderQuantity;

    if (newQuantity < 0) {
      return yield put(
        toastrActions.add({
          type: "error",
          title: "Order Error!",
          message: "There is not products available!"
        })
      );
    }

    console.log("Nova quantidade de produtos", newQuantity);

    yield call(api.put, `product/${product_id}`, { quantity: newQuantity });

    yield put(
      toastrActions.add({
        type: "success",
        title: "Order Success!",
        message: "Order confirmed!"
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

export function* updateFinish({ id, date }) {
  try {
    yield call(api.put, `order/${id}`, { finished_order: `${date}` });
  } catch (e) {
    console.log(e.response);
  }
}

export function* getProductReport({ id, first_date, second_date }) {
  try {
    console.log(first_date, second_date, id);
    const { data } = yield call(api.post, `productreport/${id}`, {
      first_date,
      second_date
    });

    console.log(data.rows);
    yield put(ProductActions.getProductReportSuccess(data.rows));
  } catch (e) {
    console.log(e.response);
  }
}
