import { z } from "zod";

export const diseaseFormSchema = z.object({
  id: z.string().optional(),
  disease: z.string().min(2, { message: "Please Enter the disease" }),
  en: z.string().optional(),
  ta: z.string().optional(),
  sh: z.string().optional(),
});

export const diseaseFormDefaults = {
  id: "",
  disease: "",
  en: "",
  ta: "",
  sh: "",
};

export type DiseaseFormSchema = z.infer<typeof diseaseFormSchema>;


export const signinFormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(4, {
    message: "Password must be at least 4 characters.",
  }),
});

export type SigninFormSchema = z.infer<typeof signinFormSchema>;
