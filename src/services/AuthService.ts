import { API } from '@constants/api';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { create } from 'apisauce';
import { getUser } from './UserService';
import { LoginData, User } from '@types/User';

const apiClient = create({
  baseURL: API.BASE_URL,
});

const fetchCurrentUser = async () => {
  const { data } = await apiClient.get<User>('/users/current');
  return data;
};

const login = async (loginData: LoginData) => {
  const { data } = await apiClient.post<User>('/users/login', loginData);
  return data;
};

const logout = async () => {
  await apiClient.post('/users/logout');
};

const useCurrentUser = () => {
  return useQuery<User>('currentUser', fetchCurrentUser, {
    retry: false,
    staleTime: Infinity,
  });
};

const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation(login, {
    onSuccess: (data) => {
      queryClient.setQueryData('currentUser', data);
    },
  });
};

const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation(logout, {
    onSuccess: () => {
      queryClient.setQueryData('currentUser', null);
    },
  });
};

export { useCurrentUser, useLogin, useLogout, getUser };