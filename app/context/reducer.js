"use client"

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_ADMIN: "SET_ADMIN",
  SET_POLICIES: "SET_POLICIES",
  SET_COMPANIES: "SET_COMPANIES",
  SET_SUBSCRIPTIONS: "SET_SUBSCRIPTIONS",
  ADD_COMPANY: "ADD_COMPANY",
  ADD_POLICY: "ADD_POLICY",
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
    case actionTypes.SET_POLICIES:
      return {
        ...state,
        policies: action.data,
      };
    case actionTypes.SET_COMPANIES:
      return {
        ...state,
        companies: action.data,
      };
    case actionTypes.SET_SUBSCRIPTIONS:
      return {
        ...state,
        subscriptions: action.data,
      };
    case actionTypes.ADD_COMPANY:
      return {
        ...state,
        companies: [...state.companies, action.data],
      };
    case actionTypes.ADD_POLICY:
      return {
        ...state,
        policies: [...state.policies, action.data],
      };
    default:
      return {
        ...state,
      };
  }
};


export default reducer;