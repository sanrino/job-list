import { useQuery } from "react-query";
import { JobService } from "../../services/jobs-service";

const useAllJobsQuery = (searchString) => {
  const { isLoading, isFetching, data: jobs } = useQuery({
    queryKey: ['jobs list', searchString],
    queryFn: () => JobService.getAll(searchString),

    //cache is updated every 5s
    staleTime: 1000 * 1,
    // keepPreviousData: true,

    onError: (error) => {
      console.log(`${error} jobs list filter`);
    },
  })

  return { isLoading, isFetching, jobs }
};

export { useAllJobsQuery };
