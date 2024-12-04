import fs from "fs"; //file system: lê e escreve em arquivos de sistema
import path from "path";
import { Podcast } from "../models/podcast-models";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (): Promise<Podcast> => {
  const data = fs.readFileSync(pathData, "utf-8");
  const jsonFile = JSON.parse(data);
  return jsonFile;
};
