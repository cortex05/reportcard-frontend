import { useQuery } from "@tanstack/react-query";
import {
  getPoliticianVotes,
  type PoliticianVotesResponse,
} from "../services/politicianService";

export const usePoliticianVotes = (
  politicianId: string,
  page: number,
  limit: number
) => {
  return useQuery<PoliticianVotesResponse>({
    queryKey: ["politician", politicianId, "votes", page, limit],
    queryFn: () => getPoliticianVotes(politicianId, page, limit),
    enabled: politicianId.length > 0,
  });
};