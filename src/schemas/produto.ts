import { z } from 'zod';

export const ProductSchema = z.object({
    code: z.string(),
    name: z.string(),
    unit: z.string(),
    description: z.string().optional(),
    quantity: z.number(),
    unitPrice: z.number(),
    total: z.number()
});

export type ProductFormType = z.infer<typeof ProductSchema>;
