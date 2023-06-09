import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Card } from '@ui-kitten/components';
import {View, Image, StyleSheet} from 'react-native';
import { default as theme } from './custom-theme.json'; // Import app theme
import Imagecard from './components/imagecard';
import CustomSlider from './components/CustomSlider';
import data from './components/data';

export default function App() {

  const HomeScreen = () => (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category='h1'>HOME</Text>
    </Layout>
  );

  return (
    <ApplicationProvider {...eva} theme={{...eva.dark, ...theme}}>
      {/* <HomeScreen /> */}
      {/* <Imagecard /> */}
      <CustomSlider data={data}/>
    </ApplicationProvider>
  );
};
