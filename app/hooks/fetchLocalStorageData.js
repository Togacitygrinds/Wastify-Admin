export const fetchUser = () => {
    let userInfo = null;
    if (typeof window !== "undefined") {
      userInfo =
        localStorage.getItem("user") !== "undefined"
          ? JSON.parse(localStorage.getItem("user"))
          : localStorage.clear;
    }
  
    return userInfo;
  };
  
  export const fetchAdmin = () => {
    let adminInfo = null;
    if (typeof window !== "undefined") {
      adminInfo =
        localStorage.getItem("admin") !== "undefined"
          ? JSON.parse(localStorage.getItem("admin"))
          : localStorage.clear;
    }
  };
  