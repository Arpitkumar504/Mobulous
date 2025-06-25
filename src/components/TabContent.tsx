import React, {useEffect, useRef} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Video from 'react-native-video';

interface CardData {
  id: string;
  type: 'image' | 'video' | 'tagged';
  imageUri?: string;
  videoUri?: string;
  description: string;
}

interface TabContentProps {
  data: CardData;
  activeTab: number;
  mostVisibleIndex: number | null;
  index: number;
}

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const TabContent: React.FC<TabContentProps> = ({
  data,
  activeTab,
  mostVisibleIndex,
  index,
}) => {
  const videoRef = useRef<Video>(null);
  console.log('data---- ', data, data.videoUri, activeTab, mostVisibleIndex);

  useEffect(() => {
    if (mostVisibleIndex === index && data.videoUri && data.type === 'video') {
      videoRef.current?.seek(0);
      videoRef.current?.resume();
    } else {
      videoRef.current?.pause();
    }
  }, [mostVisibleIndex, index, data.videoUri, data.type]);

  // if (activeTab !== 0) return null; // Skip rendering if not on the main tab
  return (
    <View style={styles.card}>
      {data.type === 'image' && data.imageUri && (
        <Image
          source={{uri: data.imageUri}}
          style={styles.media}
          resizeMode="cover" // Ensure proper scaling
          onError={e => console.log('Image error:', e.nativeEvent.error)}
        />
      )}
      {data.type === 'video' && data.videoUri && (
        <Video
          ref={videoRef}
          source={{uri: data.videoUri}}
          style={styles.media}
          resizeMode="cover"
          paused={mostVisibleIndex !== index}
          repeat={true}
          muted={true}
          onError={e => console.log('Video error:', e)}
          onLoad={() => console.log('Video loaded')}
          // controls={true}
        />
      )}
      {data.type === 'tagged' && data.imageUri && (
        <Image
          source={{uri: data.imageUri}}
          style={{height:400}}
          resizeMode="cover" // Ensure proper scaling
          onError={e => console.log('Image error:', e.nativeEvent.error)}
        />
      )}
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{data.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginHorizontal: 16,
  },
  media: {
    width: '100%',
    height: SCREEN_HEIGHT * 0.5,
  },
  descriptionContainer: {
    padding: 8,
  },
  description: {
    fontSize: 14,
    color: '#333',
  },
});

export default TabContent;
