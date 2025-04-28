import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';

const AdminLoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#1E1E2F'} barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.title}>LOGIN </Text>
        <Text style={styles.subtitle}>Admin login to continue</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          placeholder='Admin Email'
          keyboardType='email-address'
          style={styles.input}
          placeholderTextColor="#aaa"
        />
        <TextInput
          placeholder='Password'
          style={styles.input}
          placeholderTextColor="#aaa"
          secureTextEntry
        />

        <TouchableOpacity style={styles.loginButton} onPress={() => alert('Admin Login Successful!')}>
          <Text style={styles.loginButtonText}>Login as Admin</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Not an admin?</Text>
        <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signupButtonText}>Go to User Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an admin account?</Text>
        <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('AdminSignup')}>
          <Text style={styles.signupButtonText}>Admin Sign Up</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default AdminLoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF3F00',
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginTop: 4,
  },
  formContainer: {
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    elevation: 4,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    fontSize: 16,
    marginBottom: 15,
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#FF3F00',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#FF3F00',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,
    elevation: 4,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#555',
  },
  signupButton: {
    marginLeft: 8,
    backgroundColor: '#1E1E2F',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    elevation: 3,
  },
  signupButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 15,
  },
});
