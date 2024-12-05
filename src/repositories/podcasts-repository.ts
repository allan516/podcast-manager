import fs from "fs"; //file system: lê e escreve em arquivos de sistema
import path from "path";
import { PodcastModel } from "../models/podcast-models";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (
  podcastName?: string
): Promise<PodcastModel[]> => {
  const data = fs.readFileSync(pathData, "utf-8");
  let jsonFile = JSON.parse(data);

  if (podcastName) {
    jsonFile = jsonFile.filter(
      (podcast: PodcastModel) => podcast.podcastName === podcastName
    );
  }
  return jsonFile;
};
