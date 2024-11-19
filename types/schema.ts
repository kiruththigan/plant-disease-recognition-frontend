import { z } from "zod";

export const diseaseFormSchema = z.object({
  id: z.string().optional(),
  disease: z.string().min(2,{message:"Please Enter the disease"}),
  en: z.string().min(2,{message:"Please Enter the solution"}),
  ta: z.string().min(2,{message:"Please Enter the solution"}),
  sh: z.string().min(2,{message:"Please Enter the solution"}),
});

export const diseaseFormDefaults = {
  id: "",
  disease: "",
  en: "",
  ta: "",
  sh: "",
};

export type DiseaseFormSchema = z.infer<typeof diseaseFormSchema>;
