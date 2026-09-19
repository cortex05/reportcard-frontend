import { useQuery } from "@tanstack/react-query";
import {
  getPoliticianOffices,
  type PoliticianOffice,
} from "../services/politicianService";

export const usePoliticianOffices = (politicianId: string) => {
  return useQuery<PoliticianOffice[]>({
    queryKey: ["politician", politicianId, "offices"],
    queryFn: () => getPoliticianOffices(politicianId),
    enabled: politicianId.length > 0
  });
};