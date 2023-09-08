
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { JobService } from "../../services/jobs-service";
import { PROFILE_ROUTE } from "../../utils/consts";

const useUpdateJobQuery = () => {

  const client = useQueryClient();
  let navigate = useNavigate();

  const { isLoading, isFetching, mutate: updateJob } = useMutation({
    mutationFn: JobService.update,

    onError: (error) => {
      console.log(`${error} Job not updated!`);
    },

    onSuccess: (updateJob) => {

      client.invalidateQueries({ queryKey: 'job' });

      client.invalidateQueries({ queryKey: 'jobs list' });

      //update cache on client
      // client.setQueriesData(['job'], () => updateJob);

      navigate(PROFILE_ROUTE);
    }
  })

  return { isLoading, isFetching, updateJob }
};

export { useUpdateJobQuery };

