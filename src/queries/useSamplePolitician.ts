import { useQuery } from "@tanstack/react-query";
import {
  getSamplePolitician,
  type Politician,
} from "../services/politicianService";

export const useSamplePolitician = () => {
  return useQuery<Politician>({
    queryKey: ["politician", "sample"],
    queryFn: getSamplePolitician,
  });
};