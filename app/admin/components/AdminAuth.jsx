import LoginPage from "../../login/page";
import SignUp from "../../signup/page";

const AdminAuth = ({ type }) => {
  return <>{type === "signup" ? <SignUp /> : <LoginPage />}</>;
};

export default AdminAuth;
