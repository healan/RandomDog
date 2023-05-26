import React, { useState } from 'react';
// import { Card, Text, Divider } from '@ui-kitten/components';
import { Dimensions, Text, View , Image, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';

export default function Imagecard() {

    const [img, setImg] = useState();
    const width = Dimensions.get('window').width;
    const styles = StyleSheet.create({
        container: {
          paddingTop: 30,
        },
        title: {
          fontSize: 20,
        },
        item: {
          width: '100%',
          height: screenWidth - 20, //height will be 20 units less than screen width.
        },
        imageContainer: {
          flex: 1,
          borderRadius: 5,
          backgroundColor: 'lightblue',
          marginBottom: Platform.select({ ios: 0, android: 1 }), //handle rendering bug.
        },
        image: {
            ...StyleSheet.absoluteFillObject,
            resizeMode: 'contain',
          },
          dotContainer: {
            backgroundColor: 'rgb(230,0,0)',
          },
          dotStyle: {
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: 'black',
          },
          inactiveDotStyle: {
            backgroundColor: 'rgb(255,230,230)',
          },
    });


    const callDogApi = () =>{
        axios.get('https://dog.ceo/api/breeds/image/random')
            .then((res)=>{
                console.log(11, res);
                if(res.status == 200){
                    setImg(res.data.message);
                };
            })
    };

    useState(()=>{
        // callDogApi();
    }, []);

    // <Image 
    //     source={{
    //         height:100,
    //         width:100,
    //         uri: img,      
    //     }}
    // />

    return(

       <></>
    );
};