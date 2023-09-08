
import { useMutation } from "react-query";
import jwt_decode from "jwt-decode";

import { useNavigate } from "react-router-dom";
import { AuthService } from "../../services/auth-service";
import { useUserContext } from "../context/useUserContext";
import { HOME_ROUTE } from "../../utils/consts";

const useLoginQuery = () => {
  const { setUser } = useUserContext();

  let navigate = useNavigate();

  const { isSuccess, mutate: login } = useMutation({
    mutationFn: AuthService.login,

    onError: (error) => {
      console.log(`${error} Erorr login!`);
    },

    onSuccess: (data) => {

      if (data?.token) {
        localStorage.setItem('token', data.token);
        const token = jwt_decode(data.token);

        setUser({
          id: token?.id,
          email: token?.email,
          isAuth: true,
        });

        navigate(HOME_ROUTE);

        return "token";
      } else {
        alert(data?.message);
      }
    }
  })

  return { isSuccess, login }
};

export { useLoginQuery };

