import { useQuery } from "react-query";
import { fetchAllJobsService } from "../services/jobs-service";

const useAllJobsQuery = (searchString) => {
  const { isLoading, data: jobs, refetch } = useQuery({
    queryKey: ['jobs list', searchString],
    queryFn: () => fetchAllJobsService(searchString),
    // staleTime: 1000 * 5,
    onError: (error) => {
      console.log(`${error} jobs list filter`);
    },

    //for transform data
    // select: (data) => data
  })

  return { isLoading, jobs, refetch }
};

export { useAllJobsQuery };
