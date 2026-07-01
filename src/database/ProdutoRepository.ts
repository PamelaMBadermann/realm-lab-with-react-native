import db from './database';
import { Produto } from '../models/Produto';

export class ProdutoRepository {
  adicionar(produto: Produto): void {
    db.write(() => {
      db.create('Produto', {
        codigo: produto.codigo,
        nome: produto.nome,
        quantidade: produto.quantidade,
      });
    });
  }

  remover(codigo: number): void {
    const produto = db.objectForPrimaryKey<Produto>('Produto', codigo);

    if (produto) {
      db.write(() => {
        db.delete(produto);
      });
    }
  }

  obterTodos(): Produto[] {
    const produtos = db.objects<Produto>('Produto');

    return Array.from(produtos);
  }
}