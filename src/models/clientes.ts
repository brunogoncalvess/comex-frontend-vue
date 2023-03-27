import { criaData } from "./data";
import { v4 as uuidv4 } from "uuid";

export interface Cliente {
  nome: string,
  sobrenome: string,
  cpf: string,
  telefone: string,
  endereco: Endereco
}

export interface Endereco {
  logradouro: string,
  bairro: string,
  cidade: string,
  numero: string
}

export function criaCliente(cliente: Cliente) {
  return {
    id: uuidv4(),
    nome: cliente.nome,
    sobrenome: cliente.sobrenome,
    cpf: cliente.cpf,
    telefone: cliente.telefone,
    endereco: cliente.endereco,
    criacao: criaData()
  }  
}