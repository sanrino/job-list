import { useQuery } from "react-query";
import { JobService } from "../services/jobs-service";

const useAllJobsQuery = (searchString) => {
  const { isLoading, data: jobs, refetch } = useQuery({
    queryKey: ['jobs list', searchString],
    queryFn: () => JobService.getAll(searchString),

    //cache is updated every 5 minutes
    staleTime: 1000 * 5,

    onError: (error) => {
      console.log(`${error} jobs list filter`);
    },
  })

  return { isLoading, jobs, refetch }
};

export { useAllJobsQuery };
