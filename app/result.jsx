import { MaterialIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ResultScreen() {
  const { proteina, agua, calorias } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seus Resultados</Text>

      {[[' Proteína', proteina + 'g/dia'], [' Água', agua + 'ml/dia'], [' Calorias', calorias + ' kcal']].map(
        ([label, val]) => (
          <View key={label} style={styles.item}>
            <MaterialIcons name="check-circle" size={24} color="#2E7D32" style={{ marginRight: 8 }} />
            <Text style={styles.itemText}>
              <Text style={{ fontWeight: '600' }}>{label}:</Text> {val}
            </Text>
          </View>
        )
      )}

      <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={() => router.replace('/input')}>
        <MaterialIcons name="autorenew" size={20} color="#fff" style={{ marginRight: 6 }} />
        <Text style={styles.buttonText}>Nova Consulta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9',
    padding: 30,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2E7D32',
    marginBottom: 30,
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  itemText: {
    fontSize: 18,
    color: '#333',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
