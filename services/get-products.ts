"use client";

import { products } from "@/temp/data/products";
import { useQuery } from "@tanstack/react-query";

type Props = {
  id?: string | string[];
  category?: string | string[];
};

export function useGetProducts({ id, category }: Props) {
  const url = buildUrl({ id, category });

  const query = useQuery({
    queryKey: ["data", "products", id, category],
    queryFn: async () => {
      // const { data } = await api.get<ApiReturn<Product[]>>(url);
      const { data } = { data: { data: products } };

      return data.data;
    },
  });

  return query;
}

const buildUrl = ({ id, category }: Props) => {
  if (id) return `/products?id=${Array.isArray(id) ? id.join(",") : id}`;
  if (category)
    return `/products?category=${
      Array.isArray(category) ? category.join(",") : category
    }`;
  return "/products";
};
