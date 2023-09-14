import { useQuery } from "react-query";
import { JobService } from "../../services/jobs-service";

const useJobsUserQuery = (id) => {
  const { isLoading, isFetching, data: jobs } = useQuery({
    queryKey: ['user jobs list', id],
    queryFn: () => JobService.getAllJobsUser(id),

    //cache is updated every 5s
    staleTime: 1000 * 1,
    // keepPreviousData: true,

    onError: (error) => {
      console.log(`${error} user jobs list`);
    },
  })

  return { isLoading, isFetching, jobs }
};

export { useJobsUserQuery };
