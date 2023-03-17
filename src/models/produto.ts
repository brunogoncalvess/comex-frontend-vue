import { v4 as uuid } from 'uuid';
import { criaData } from './data';

export interface Produto {
  id?: string, 
  nome: string,
  descricao: string,
  preco: number,
  estoque: number,
  categoria: string,
  data: string
}

export function criaProduto(
  nome: string,
  descricao: string,
  preco: number,
  estoque: number,
  categoria: string,
  ): Produto {
  return {
    id: uuid(),
    nome: nome,
    descricao: descricao,
    preco: preco,
    estoque: estoque,
    categoria: categoria,
    data: criaData()
  }
}