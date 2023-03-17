export interface Data {
  data: string
}

export function criaData() {
  return new Date().toLocaleDateString().split('/').reverse().join('-')
}