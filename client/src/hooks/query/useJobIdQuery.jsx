import { useQuery } from "react-query";
import { languagesData, positionData, roleData, toolsData } from "../../mockData/mockData";
import { JobService } from "../../services/jobs-service";
import { selectedValue, selectedValues } from "../../utils/misc";

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
        tools: selectedValues(data?.tools, toolsData),

        position: selectedValue(data?.position, positionData),
        role: selectedValue(data?.role, roleData)
      }
    },
  });

  return { isLoading, isFetching, job }
};

export { useJobIdQuery };
