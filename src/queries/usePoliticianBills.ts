import { useQuery } from "@tanstack/react-query";
import {
  getPoliticianBills,
  type PoliticianBillsResponse,
} from "../services/politicianService";

export const usePoliticianBills = (
  politicianId: string,
  page: number,
  limit: number
) => {
  return useQuery<PoliticianBillsResponse>({
    queryKey: ["politician", politicianId, "bills", page, limit],
    queryFn: () => getPoliticianBills(politicianId, page, limit),
    enabled: politicianId.length > 0,
  });
};