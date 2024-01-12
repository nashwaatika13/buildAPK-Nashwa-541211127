import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, Button, TouchableOpacity, Linking } from 'react-native';

export default function App() {
  const profileImage = require('./assets/1.jpg');

    const handleButtonPress = () => {
    Linking.openURL('https://wa.me/6285267788738');
  };

  const projects = [
    {
      title: 'Car Dashboard',
      description: 'Desain dashboard mobil adalah proses merancang antarmuka yang berada di bagian depan mobil dan berfungsi untuk memberikan informasi serta mengontrol berbagai aspek kendaraan.',
      image: require('./assets/car.jpg'),
    },
    {
      title: 'Email Platform',
      description: 'Desain email merujuk pada proses merancang tampilan dan konten pesan email agar tampil menarik, informatif, dan efektif dalam mencapai tujuan yang diinginkan. Desain email sangat penting dalam pemasaran email, komunikasi bisnis, kampanye berlangganan, dan banyak aspek lainnya yang melibatkan pengiriman pesan melalui email.',
      image: require('./assets/email.jpg'),
    },
    {
      title: 'Project Management',
      description: 'Project management dalam konteks desain adalah proses perencanaan pelaksanaan, pengawasan, dan penyelesaian proyek desain. Tujuan dari project management desain adalah untuk memastikan bahwa proyek desain berjalan dengan efisien, tepat waktu, dan sesuai dengan tujuan yang telah ditetapkan.',
      image: require('./assets/project.jpg'),
    },
  ];
  
  return (
    <ScrollView style={styles.container}>
          <View style={styles.header}>
      <Image source={profileImage} style={styles.profileImage} />
        <Text style={styles.title}>Nashwa Atika K.R.</Text>
        <Text style={styles.description}>
          Let's see some of my UI/UX Designs
        </Text>
      </View>
      {projects.map((project, index) => (
        <View key={index} style={styles.projectContainer}>
          <Image source={project.image} style={styles.projectImage} />
          <Text style={styles.projectTitle}>{project.title}</Text>
          <Text style={styles.projectDescription}>{project.description}</Text>
        </View>
      ))}
      <ScrollView vertikal showsVertikalScrollIndicator={true} style={styles.scrollView}>
      </ScrollView>

      <TouchableOpacity
        style={styles.button}
        onPress={handleButtonPress}
      >
        <Text style={styles.buttonText}>Contact me</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    color: '#ff8fab',
    fontFamily: 'Poppins',
    fontWeight: 'semi-bold',
    fontSize: 24,
    marginTop: 12,
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontFamily: 'Poppins',
    fontSize: 13,
    marginTop: -14,
    marginBottom: 5,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  projectContainer: {
    marginBottom: 20,
  },
  projectImage: {
    width: '100%',
    height: 250,
    borderRadius: 10, 
  },
  projectTitle: {
    color: '#ef476f',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  projectDescription: {
    marginTop: 5,
    fontFamily: 'Poppins',
    fontWeight: 'medium',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ff8fab',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
