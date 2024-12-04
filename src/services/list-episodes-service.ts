import { repositoryPodcast } from "../repositories/podcasts-repositoty";

export const serviceListEpisodes = async () => {
  const data = repositoryPodcast();

  return data;
};
