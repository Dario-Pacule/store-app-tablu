"use client";

import { products } from "@/temp/data/products";
import { useQuery } from "@tanstack/react-query";

type Props = {
  _id?: string;
  category?: string;
};

export function useGetProducts({ _id, category }: Props) {
  const url = buildUrl({ _id, category });

  const query = useQuery({
    queryKey: ["data", "products", _id, category],
    queryFn: async () => {
      // const { data } = await api.get<ApiReturn<Product[]>>(url);

      const { data } = {
        data: {
          data: _id
            ? products.filter((p) => p._id === _id)
            : products.filter((p) =>
                p.name.toLowerCase().includes(category?.toLowerCase() ?? "")
              ),
        },
      };

      return data.data;
    },
  });

  return query;
}

const buildUrl = ({ _id, category }: Props) => {
  if (_id) return `/products?id=${Array.isArray(_id) ? _id.join(",") : _id}`;
  if (category)
    return `/products?category=${
      Array.isArray(category) ? category.join(",") : category
    }`;
  return "/products";
};
