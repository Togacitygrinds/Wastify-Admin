"use client";
import { fetchAdmin, fetchUser } from "../hooks/fetchLocalStorageData";

const userInfo = fetchUser();
const adminInfo = fetchAdmin();

const initialState = {
    user: userInfo,
    admin: adminInfo,
    companies: [], 
    estafettes: [], 
    notifications: [],
    payments: [],
    requests: [],
    issues: [],
    trackers: [],
}

export default initialState;