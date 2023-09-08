
import { useMutation, useQueryClient } from "react-query";
import { JobService } from "../../services/jobs-service";

const useDeleteJobQuery = () => {

  const client = useQueryClient();

  const { isLoading, mutate: deleteJobById } = useMutation({
    mutationFn: JobService.delete,

    onError: (error) => {
      console.log(`${error} Job not updated!`);
    },

    onSuccess: (updateJob) => {

      client.invalidateQueries({ queryKey: 'user jobs list' });

      //update cache on client
      client.setQueriesData(['user jobs list'], () => updateJob);
    },

  })

  return { isLoading, deleteJobById }
};

export { useDeleteJobQuery };

