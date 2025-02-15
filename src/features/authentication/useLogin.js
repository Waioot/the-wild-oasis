import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isLoading: isLoadingLogin } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: user => {
      queryClient.setQueryData(['user'], user.user);
      navigate('/dashboard', { replace: true });
      toast.success('Logged in successfully');
    },
    onError: error => {
      console.log(error);
      toast.error('Provided email or password are incorrect');
    },
  });

  return { login, isLoadingLogin };
}
