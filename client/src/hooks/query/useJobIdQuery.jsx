import { useQuery } from "react-query";
import { languagesData, toolsData } from "../../mockData/mockData";
import { JobService } from "../../services/jobs-service";
import { selectedValues } from "../../utils/misc";

const useJobIdQuery = (id) => {

  const { isLoading, isFetching, data: job } = useQuery({
    queryKey: ['job', id],
    queryFn: () => JobService.getById(id || ''),

    onError: (error) => {
      console.log(`${error} jobs list filter`);
    },

    enabled: !!id,

    //for transform data
    select: (data) => {
      return {
        ...data,
        languages: selectedValues(data?.languages, languagesData),
        tools: selectedValues(data?.tools, toolsData)
      }
    },
  })

  return { isLoading, isFetching, job }
};

export { useJobIdQuery };
