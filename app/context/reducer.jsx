"use client";

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_ADMIN: "SET_ADMIN",
  SET_COMPANIES: "SET_COMPANIES",
  SET_ESTAFETTES: "SET_ESTAFETTES",
  SET_NOTIFICATIONS: "SET_NOTIFICATIONS",
  SET_PAYMENTS: "SET_PAYMENTS",
  SET_REQUESTS: "SET_REQUESTS",
  SET_ISSUES: "SET_ISSUES",
  SET_TRACKERS: "SET_TRACKERS",
  ADD_COMPANY: "ADD_COMPANY",
  ADD_ESTAFETTE: "ADD_ESTAFETTE",
  ADD_NOTIFICATION: "ADD_NOTIFICATION",
  ADD_PAYMENT: "ADD_PAYMENT",
  ADD_REQUEST: "ADD_REQUEST",
  ADD_ISSUE: "ADD_ISSUE",
  ADD_TRACKER: "ADD_TRACKER",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.data,
      };
    case actionTypes.SET_ADMIN:
      return {
        ...state,
        admin: action.data,
      };
    case actionTypes.SET_COMPANIES:
      return {
        ...state,
        companies: action.data,
      };
    case actionTypes.SET_ESTAFETTES:
      return {
        ...state,
        estafettes: action.data,
      };
    case actionTypes.SET_NOTIFICATIONS:
      return {
        ...state,
        notifications: action.data,
      };
    case actionTypes.SET_PAYMENTS:
      return {
        ...state,
        payments: action.data,
      };
    case actionTypes.SET_REQUESTS:
      return {
        ...state,
        requests: action.data,
      };
    case actionTypes.SET_ISSUES:
      return {
        ...state,
        issues: action.data,
      };
    case actionTypes.SET_TRACKERS:
      return {
        ...state,
        trackers: action.data,
      };
    case actionTypes.ADD_COMPANY:
      return {
        ...state,
        companies: [...state.companies, action.data],
      };
    case actionTypes.ADD_ESTAFETTE:
      return {
        ...state,
        estafettes: [...state.estafettes, action.data],
      };
    case actionTypes.ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, action.data],
      };
    case actionTypes.ADD_PAYMENT:
      return {
        ...state,
        payments: [...state.payments, action.data],
      };
    case actionTypes.ADD_REQUEST:
      return {
        ...state,
        requests: [...state.requests, action.data],
      };
    case actionTypes.ADD_ISSUE:
      return {
        ...state,
        issues: [...state.issues, action.data],
      };
    case actionTypes.ADD_TRACKER:
      return {
        ...state,
        trackers: [...state.trackers, action.data],
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
