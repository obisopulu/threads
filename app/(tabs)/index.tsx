import { Platform, StyleSheet } from 'react-native';
import Lottie from 'lottie-react-native'
import { Text, View } from '../../components/Themed';

import { SafeAreaView } from 'react-native-safe-area-context';
import { RefreshControl, ScrollView } from 'react-native-gesture-handler';
import { useRef } from 'react';

export default function TabOneScreen() {
  const animationRef = useRef<Lottie>(null)
  return (
    <>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 1,
          padding: Platform.select ({android: 1})
        }}
        refreshControl={
          <RefreshControl 
            refreshing= {false} 
            onRefresh={()=>{
              animationRef.current?.play()}
            } 
            tintColor={'transparent'}
          />
        }
      >
        {Platform.OS != 'web' &&
          <Lottie
            ref={animationRef}
            source={require('../../assets/animation/loading.json')}
            loop={false}
            autoPlay
            style={{width:90, height:90, alignSelf:'center'}}
            onAnimationFinish={()=>{}}
          />
        }
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  
});
