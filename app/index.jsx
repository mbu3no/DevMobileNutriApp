import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  const abrirWhatsApp = () => {
    const mensagem = encodeURIComponent("Olá, gostaria de agendar uma consulta!");
    const telefone = "5531996969590"; 
    const url = `https://wa.me/${telefone}?text=${mensagem}`;
    Linking.openURL(url);
  };

  const abrirLocalizacao = () => {
    const url = "https://www.google.com/maps/search/?api=1&query=Universidade+Federal+de+Itajubá+-+UNIFEI+-+Campus+Theodomiro+Carneiro+Santiago"
    ; 
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/app.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Bem-vindo(a) ao NutriApp</Text>
      <Text style={styles.subtitle}>Seu app para calcular os macros ideais</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/input')}>
        <FontAwesome5 name="play" size={20} color="#fff" style={{ marginRight: 8 }} />
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton} onPress={abrirWhatsApp}>
        <FontAwesome5 name="whatsapp" size={20} color="#fff" style={{ marginRight: 8 }} />
        <Text style={styles.buttonText}>Agendar Consulta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tertiaryButton} onPress={abrirLocalizacao}>
        <FontAwesome5 name="map-marker-alt" size={20} color="#fff" style={{ marginRight: 8 }} />
        <Text style={styles.buttonText}>Localização</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F2EA',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 10,
  },
  secondaryButton: {
    flexDirection: 'row',
    backgroundColor: '#25D366',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 10,
  },
  tertiaryButton: {
    flexDirection: 'row',
    backgroundColor: '#1976D2',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
  },
});
