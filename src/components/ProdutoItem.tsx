import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { Produto } from '../models/Produto';
import { styles } from '../styles/app.styles';

type ProdutoItemProps = {
  produto: Produto;
  onDelete: () => void;
};

export default function ProdutoItem({
  produto,
  onDelete,
}: ProdutoItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.textItem}>
        {produto.codigo} - {produto.nome}
      </Text>

      <Text style={styles.textItem}>
        Quantidade: {produto.quantidade}
      </Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={onDelete}
        >
          <Text style={styles.buttonText}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}