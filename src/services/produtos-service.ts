import type { Produto } from "@/models/produto";

export function fetchProducts(): Promise<Produto[]> {
  return fetch('http://localhost:3000/produtos')
    .then(resp => resp.json())
}