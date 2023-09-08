import { useMutation, useQueryClient } from "react-query";
import { JobService } from "../../services/jobs-service";

const useCreateJobQuery = () => {
  const client = useQueryClient();

  const { isLoading, mutateAsync: createJob } = useMutation({
    mutationKey: 'create job',
    mutationFn: (data, email) => JobService.create(data, email),

    onError: (error) => {
      console.log(`${error} Job not added!`);
    },

    onSuccess: (newJob) => {
      client.setQueriesData(['user jobs list'], (oldData) => {
        const oldJobs = oldData ? { ...oldData } : [];
        return [newJob, oldJobs]
      });

      client.invalidateQueries({
        queryKey: ['user jobs list'],
        refetchType: "none"
      })

      //query => update on client of key =>jobs list
      // client.invalidateQueries({ queryKey: 'jobs list' });
    }
  })
  return { isLoading, createJob }
};

export { useCreateJobQuery };

