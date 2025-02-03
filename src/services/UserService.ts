import { API } from '@constants/api';
import { create } from 'apisauce';
import { User } from '@types/User';

const apiClient = create({
  baseURL: API.BASE_URL,
});

const getUser = async (userId: string) => {
  const { data } = await apiClient.get<User>(`/users/${userId}`);
  return data;
};

export { getUser };