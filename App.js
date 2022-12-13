import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './components/Navbar';
import Header from './components/header';
import About from './components/about';
import Footer from './components/footer';

export default function App() {
  return (
  <>
      <Navbar/>
      <Header/>
      <About/> 
      <Footer/>
  </>
   
  );
}
