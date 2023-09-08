import { useMutation } from "react-query";
import jwt_decode from "jwt-decode";

import { useNavigate } from "react-router-dom";
import { AuthService } from "../../services/auth-service";
import { useUserContext } from "../context/useUserContext";
import { HOME_ROUTE } from "../../utils/consts";

const useRegisterQuery = () => {

  const { setUser } = useUserContext();
  let navigate = useNavigate();

  const { isSuccess, mutate: registration } = useMutation({
    mutationFn: AuthService.registration,

    onError: (error) => {
      console.log(`${error} Erorr registration!`);
    },

    onSuccess: (data) => {
      console.log({ data })
      if (data?.token) {
        localStorage.setItem('token', data.token);
        const token = jwt_decode(data.token);

        setUser({
          id: token?.id,
          email: token?.email,
          isAuth: true,
        });

        navigate(HOME_ROUTE);

        return token;
      } else {
        console.log(data)
      }
    },
  })

  return { isSuccess, registration }
};

export { useRegisterQuery };

