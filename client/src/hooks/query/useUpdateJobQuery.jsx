
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { JobService } from "../../services/jobs-service";
import { HOME_ROUTE, PROFILE_ROUTE } from "../../utils/consts";
import { useUserContext } from "../context/useUserContext";

const useUpdateJobQuery = () => {

  const client = useQueryClient();
  const { setUser } = useUserContext();
  let navigate = useNavigate();

  const { isLoading, isFetching, mutate: updateJob } = useMutation({
    mutationFn: JobService.update,

    onError: (error) => {
      console.log(`${error} Job not updated!`);
    },

    onSuccess: (data) => {

      client.invalidateQueries({ queryKey: 'job' });

      client.invalidateQueries({ queryKey: 'jobs list' });

      //update cache on client
      // client.setQueriesData(['job'], () => updateJob);

      navigate(PROFILE_ROUTE);

      if (data.message) {
        setUser({
          id: '',
          email: '',
          isAuth: false,
        });

        localStorage.removeItem('token');
        navigate(HOME_ROUTE);

        toast.error(data.message);
      }
    }
  })

  return { isLoading, isFetching, updateJob }
};

export { useUpdateJobQuery };

