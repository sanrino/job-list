import { useMutation, useQueryClient } from "react-query";
import { createJobService } from "../services/jobs-service";

const useCreateJobQuery = (jobData) => {
  const client = useQueryClient();

  const { isLoading, mutateAsync: createJob } = useMutation({
    mutationKey: ['create job', jobData],
    mutationFn: createJobService,

    onError: (error) => {
      console.log(`${error} Job not added!`);
    },

    onSuccess: (newJob) => {
      client.setQueriesData(['jobs list'], (oldJobs) => {
        return [newJob, ...(oldJobs || [])]
      })
    }
  })
  return { isLoading, createJob }
};

export { useCreateJobQuery };

