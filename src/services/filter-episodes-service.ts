import { repositoryPodcast } from "../repositories/podcasts-repositoty";

export const serviceFilterEpisodes = async (podcastName: string) => {
  const data = await repositoryPodcast(podcastName);
  return data;
};
