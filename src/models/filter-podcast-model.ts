import { Podcast } from "./podcast-models";

export interface FilterPodcastModel {
  statusCode: number;
  body: Podcast[];
}
