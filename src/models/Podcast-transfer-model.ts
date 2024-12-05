import { PodcastModel } from "./podcast-models";

export interface PodcastTransferModel {
  statusCode: number;
  body: PodcastModel[];
}
