import { z } from "zod";

const tableDataSchema = z.object({
  id: z.string(),
  disease: z.string(),
  en: z.string(),
  ta: z.string(),
  sh: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type TableDataSchema = z.infer<typeof tableDataSchema>;
