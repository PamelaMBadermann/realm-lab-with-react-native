import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { Produto } from '../models/Produto';
import { ProdutoRepository } from '../database/ProdutoRepository';
import { styles } from '../styles/app.styles';

type Props = {
  navigation: any;
};

export default function ProdutoForm({ navigation }: Props) {
  const [codigo, setCodigo] = useState<string>('');
  const [nome, setNome] = useState<string>('');
  const [quantidade, setQuantidade] = useState<string>('');
  const repository = new ProdutoRepository();
  

  const salvar = async () => {
  const prodAux = new Produto(
    parseInt(codigo),
    nome,
    parseInt(quantidade)
  );

  await repository.adicionar(prodAux);

  navigation.navigate('ListaProdutos');
};

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Código"
        keyboardType="numeric"
        value={codigo}
        onChangeText={setCodigo}
      />

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        keyboardType="numeric"
        value={quantidade}
        onChangeText={setQuantidade}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={salvar}
      >
        <Text style={styles.buttonTextBig}>
          Salvar
        </Text>
      </TouchableOpacity>
    </View>
  );
}