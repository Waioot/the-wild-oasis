import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { updateCurrentUser } from '../../services/apiAuth';

function useUpdateUser() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate: updateUser } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success('User successfully updated');
      queryClient.setQueryData(['user'], user);
    },
    onError: error => {
      toast.error(error.message);
    },
  });

  return { isUpdating, updateUser };
}

export default useUpdateUser;
