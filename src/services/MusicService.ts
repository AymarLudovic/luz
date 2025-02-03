import { API } from '@constants/api';
import { create } from 'apisauce';
import { Playlist, Song } from '@types/Music';

const apiClient = create({
  baseURL: API.BASE_URL,
});

const fetchPlaylists = async () => {
  const { data } = await apiClient.get<Playlist[]>('/playlists');
  return data;
};

const fetchSongs = async () => {
  const { data } = await apiClient.get<Song[]>('/songs');
  return data;
};

export { fetchPlaylists, fetchSongs };