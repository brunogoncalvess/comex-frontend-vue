import { v4 as uuid } from 'uuid';
import { criaData } from './data';

export interface Produto {
  id?: string,
  nome: string,
  descricao: string,
  preco: number,
  estoque: number,
  categoria: string,
  data?: string
}

export function criaProduto(produto: Produto) {
  return {
    id: uuid(),
    nome: produto.nome,
    descricao: produto.descricao,
    preco: produto.preco,
    estoque: produto.estoque,
    categoria: produto.categoria,
    data: criaData()
  }
}