import { useSelector } from "react-redux";
export default function authHeader() {
  const user = useSelector((state) => state.auth.user);
  console.log(user)
  if (user && user.accessToken) {
    return { Authorization: "Bearer " + user.accessToken };
  } else {
    return {};
  }
}

