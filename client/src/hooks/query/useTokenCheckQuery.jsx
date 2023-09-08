import { useMutation } from "react-query";
import jwt_decode from "jwt-decode";

import { AuthService } from "../../services/auth-service";
import { useUserContext } from "../context/useUserContext";

const useTokenCheckQuery = () => {

  const { setUser } = useUserContext();

  const { isLoading, isFetching, mutate: check } = useMutation({
    mutationFn: AuthService.check,

    onError: (error) => {
      console.log(`${error} Erorr check token!`);
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

        return token;
      } else {
        console.log(data?.message);
        setUser({
          id: '',
          email: '',
          isAuth: false,
        });
        localStorage.removeItem('token');
      }
    },
  })

  return { isLoading, isFetching, check }
};

export { useTokenCheckQuery };

