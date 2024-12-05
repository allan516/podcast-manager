import * as http from "http";
import {
  getFilterEpisodes,
  getListEpisodes,
} from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

export const app = async (
  req: http.IncomingMessage,
  res: http.ServerResponse
) => {
  //queryString

  const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""];

  if (req.method === HttpMethod.GET && baseUrl === Routes.LIST)
    await getListEpisodes(req, res);

  if (req.method === HttpMethod.GET && baseUrl === Routes.EPISODE)
    await getFilterEpisodes(req, res);
};
