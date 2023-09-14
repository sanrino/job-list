
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { JobService } from "../../services/jobs-service";
import { PROFILE_ROUTE } from "../../utils/consts";

const useDeleteJobQuery = () => {

  const client = useQueryClient();
  let navigate = useNavigate();

  const { isLoading, isFetching, mutate: deleteJobById } = useMutation({
    mutationFn: JobService.delete,

    onError: (error) => {
      console.log(`${error} Job not updated!`);
    },

    onSuccess: (data) => {

      //cache
      client.setQueriesData('user jobs list', (old) => {
        const result = old.filter(item => data.id !== item.id);
        return result;
      })

      // client.invalidateQueries({
      //   queryKey: ['user jobs list'],
      //   refetchType: "none"
      // });

      navigate(PROFILE_ROUTE);
    },

  })

  return { isLoading, isFetching, deleteJobById }
};

export { useDeleteJobQuery };

