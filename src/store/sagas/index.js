import { all, takeLatest } from "redux-saga/effects";

import { signIn, signOut } from "./auth";

import {
  createClient,
  getClients,
  getClientReport,
  deleteClient
} from "./client";

import { createWorker, getWorkers } from "./worker";

import {
  getProducts,
  createProducts,
  updateProduct,
  getOrders,
  getById,
  createOrder,
  updateOrder,
  getOrderByWorkerId,
  getProductReport,
  updateFinish
} from "./product";

import {
  getSchedules,
  createSchedule,
  getWorkersSchedule,
  getScheduleById,
  finishSchedule
} from "./schedule";

import { getHoursReport } from "./hours";

import { AuthTypes } from "../ducks/auth";
import { ClientTypes } from "../ducks/client";
import { WorkerTypes } from "../ducks/worker";
import { ScheduleTypes } from "../ducks/schedule";
import { ProductTypes } from "../ducks/product";
import { HoursTypes } from "../ducks/hours";

export default function*() {
  yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),
    takeLatest(ClientTypes.CREATE_CLIENT_REQUEST, createClient),
    takeLatest(ClientTypes.GET_CLIENT_REQUEST, getClients),
    takeLatest(ClientTypes.GET_CLIENT_REPORT_REQUEST, getClientReport),
    takeLatest(ClientTypes.DELETE_CLIENT_REQUEST, deleteClient),
    takeLatest(WorkerTypes.CREATE_WORKER_REQUEST, createWorker),
    takeLatest(WorkerTypes.GET_WORKER_REQUEST, getWorkers),
    takeLatest(ScheduleTypes.GET_SCHEDULE_REQUEST, getSchedules),
    takeLatest(ScheduleTypes.CREATE_SCHEDULE_REQUEST, createSchedule),
    takeLatest(ScheduleTypes.GET_WORKERS_SCHEDULE_REQUEST, getWorkersSchedule),
    takeLatest(ScheduleTypes.GET_SCHEDULE_BY_ID_REQUEST, getScheduleById),
    takeLatest(ScheduleTypes.FINISH_SCHEDULE_REQUEST, finishSchedule),
    takeLatest(ProductTypes.GET_PRODUCTS_REQUEST, getProducts),
    takeLatest(ProductTypes.GET_PRODUCT_REPORT_REQUEST, getProductReport),
    takeLatest(ProductTypes.CREATE_PRODUCTS_REQUEST, createProducts),
    takeLatest(ProductTypes.UPDATE_PRODUCTS_REQUEST, updateProduct),
    takeLatest(ProductTypes.UPDATE_FINISH_REQUEST, updateFinish),
    takeLatest(ProductTypes.GET_ORDERS_REQUEST, getOrders),
    takeLatest(ProductTypes.GET_PRODUCT_BY_ID_REQUEST, getById),
    takeLatest(ProductTypes.CREATE_ORDER_REQUEST, createOrder),
    takeLatest(ProductTypes.UPDATE_ORDER_REQUEST, updateOrder),
    takeLatest(ProductTypes.GET_ORDER_BY_WORKER_ID_REQUEST, getOrderByWorkerId),
    takeLatest(HoursTypes.GET_HOURS_REPORT_REQUEST, getHoursReport)
  ]);
}
