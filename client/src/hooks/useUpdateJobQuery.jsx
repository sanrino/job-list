
import { useMutation, useQueryClient } from "react-query";
import { JobService } from "../services/jobs-service";

const useUpdateJobQuery = () => {

  const client = useQueryClient();

  const { isLoading, mutate: updateJob } = useMutation({
    mutationFn: JobService.update,

    onError: (error) => {
      console.log(`${error} Job not updated!`);
    },

    onSuccess: (updateJob) => {

      client.invalidateQueries({ queryKey: 'jobs list' });

      //update cache on client
      client.setQueriesData(['job'], () => updateJob);
    }
  })

  return { isLoading, updateJob }
};

export { useUpdateJobQuery };

