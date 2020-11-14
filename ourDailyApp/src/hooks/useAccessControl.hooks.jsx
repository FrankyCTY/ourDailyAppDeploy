import {useSelector} from "react-redux";

export default function useAccessControl() {
  const user = useSelector(state => state.auth_P.user) || {};
  const isLogged = useSelector(state => state.auth_P.isLogged);
  const viewAs = useSelector(state => state.auth_P.viewAs);
  console.log({viewAs})
  const role = user.role;

  const adminView = role === "admin" && (viewAs === "original");

  return {user, role, isLogged, viewAs, adminView};
}