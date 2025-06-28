import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function InputScreen() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [idade, setIdade] = useState('');
  const router = useRouter();

  const handleCalcular = () => {
    if (!peso || !altura || !idade) return;
    const p = parseFloat(peso),
      a = parseFloat(altura),
      i = parseInt(idade);
    const proteina = (p * 2).toFixed(0),
      agua = (p * 35).toFixed(0),
      calorias = (10 * p + 6.25 * a - 5 * i + 5).toFixed(0);
    router.push({ pathname: '/result', params: { proteina, agua, calorias } });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Preencha seus dados</Text>

        {[['Peso (kg)', peso, setPeso], ['Altura (cm)', altura, setAltura], ['Idade (anos)', idade, setIdade]].map(
          ([label, val, setter]) => (
            <View key={label} style={styles.field}>
              <Text style={styles.label}>{label}</Text>
              <TextInput
                value={val}
                onChangeText={setter}
                placeholder={label}
                keyboardType="numeric"
                style={styles.input}
              />
            </View>
          )
        )}

        <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleCalcular}>
          <Text style={styles.buttonText}>Calcular</Text>
          <MaterialIcons name="navigate-next" size={24} color="#fff" />
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F6FCF8',
    alignItems: 'center',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#388E3C',
    marginBottom: 24,
  },
  field: {
    width: '100%',
    marginBottom: 18,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: '#555',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#A5D6A7',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  button: {
    flexDirection: 'row',
    marginTop: 30,
    backgroundColor: '#388E3C',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginRight: 8,
  },
});
