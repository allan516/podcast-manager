import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcasts-repositoty";
import { FilterPodcastModel } from "../models/filter-podcast-model";
import { StatusCode } from "../utils/status-code";
import { Podcast } from "../models/podcast-models";

export const serviceFilterEpisodes = async (
  podcastName: string | undefined
): Promise<FilterPodcastModel> => {
  let responseFormat: FilterPodcastModel = {
    statusCode: 0,
    body: [],
  };
  const queryString = podcastName?.split("?p=")[1] || "";

  const data = await repositoryPodcast(queryString);

  responseFormat.statusCode =
    data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;

  responseFormat.body = data;
  return responseFormat;
};
