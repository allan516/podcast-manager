import fs from "fs"; //file system: lê e escreve em arquivos de sistema
import path from "path";
import { Podcast } from "../models/podcast-models";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (
  podcastName?: string
): Promise<Podcast> => {
  const data = fs.readFileSync(pathData, "utf-8");
  let jsonFile = JSON.parse(data);

  if (podcastName) {
    jsonFile = jsonFile.filter(
      (podcast: Podcast) => podcast.podcastName === podcastName
    );
  }
  return jsonFile;
};
