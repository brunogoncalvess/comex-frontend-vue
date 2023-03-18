import type { Categoria } from "@/models/categoria"

export function fetchCategorias(): Promise<Categoria[]> {
  return fetch('http://localhost:3000/categorias')
    .then(resp => resp.json())
}

export function addCategoria(categoria: Categoria) {
  return fetch('http://localhost:3000/categorias', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(categoria)
  })
}

export function deleteCategory(id: string) {
  return fetch(`http://localhost:3000/categorias/${id}`, {
    method: 'DELETE'
  })
}