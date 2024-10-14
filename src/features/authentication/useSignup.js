import { useMutation } from '@tanstack/react-query';
import { signup as signupApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';
export function useSignup() {
  const { mutate: signup, isLoading: isLoadingSignup } = useMutation({
    mutationFn: signupApi,
    onSuccess: data => {
      console.log(data);
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address"
      );
    },
    onError: error => {
      toast.error(error.message);
    },
  });

  return { signup, isLoadingSignup };
}
