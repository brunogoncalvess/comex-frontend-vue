import type { Cliente } from '../models/clientes'

export function salvaCliente(cliente: Cliente) {
  return fetch('http://localhost:3000/clientes', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(cliente)
  })
}

export function buscaViaCEP(cep: string) {
  return fetch(`https://viacep.com.br/ws/${cep}/json/`)
}