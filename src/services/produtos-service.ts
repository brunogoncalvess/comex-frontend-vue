import type { Produto } from "@/models/produto";

export function buscaProdutos(): Promise<Produto[]> {
  return fetch('http://localhost:3000/produtos')
    .then(resp => resp.json())
}

export function salvaProduto(produto: Produto) {
  return fetch('http://localhost:3000/produtos', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(produto)
  })
}