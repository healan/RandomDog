import React, { useState } from 'react';
import { Card, Text, Divider } from '@ui-kitten/components';
import {View, Image, StyleSheet} from 'react-native';
import axios from 'axios';

export default function Imagecard() {

    const [img, setImg] = useState();

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
        callDogApi();
    }, []);

    return(
        <Card>
            <Text>
               Test
            </Text>

            <Image 
                source={{
                    height:500,
                    width:350,
                    uri: img,      
            }}

            />
        </Card>

    );
};