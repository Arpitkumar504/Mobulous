import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';
import {taggedContent, videoData} from './src/utils/data';
import {MaterialTabBar, Tabs} from 'react-native-collapsible-tab-view';
import AboutTab from './src/components/AboutTab';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const dummyPosts = Array.from({length: 12}, (_, i) => ({
  id: i.toString(),
  uri:
    i % 3 === 0
      ? 'https://www.w3schools.com/html/mov_bbb.mp4'
      : `https://picsum.photos/seed/post${i}/300/300`,
  type: i % 3 === 0 ? 'video' : 'image',
}));

const PostsTab = () => (
  <Tabs.FlatList
    data={dummyPosts.filter(p => p.type === 'image')}
    numColumns={3}
    keyExtractor={i => i.id}
    renderItem={({item}) => (
      <Image source={{uri: item.uri}} style={styles.gridImage} />
    )}
  />
);

const RenderVideoItem = ({
  item,
  isVisible,
}: {
  item: any;
  isVisible: boolean;
}) => {
  const videoRef = useRef<Video>(null);

  return (
    <View style={{marginBottom: 24}}>
      <Video
        ref={videoRef}
        source={{uri: item.video}}
        style={styles.reelVideo}
        resizeMode="cover"
        repeat
        muted
        paused={!isVisible}
        onError={e => console.log('Video error:', e)}
      />
      <Text
        style={{fontSize: 16, fontWeight: 500, color: 'black', marginTop: -10}}>
        {item.description}
      </Text>
    </View>
  );
};

const VideosTab = () => {
  const [visibleVideoIds, setVisibleVideoIds] = useState<string[]>([]);

  const onViewRef = useRef(({viewableItems}: any) => {
    setVisibleVideoIds(viewableItems.map((vi: any) => vi.item.id.toString()));
  });

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50});

  return (
    <Tabs.FlatList
      data={videoData}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <RenderVideoItem
          item={item}
          isVisible={visibleVideoIds.includes(item.id.toString())}
        />
      )}
      onViewableItemsChanged={onViewRef.current}
      viewabilityConfig={viewConfig.current}
      windowSize={5}
      initialNumToRender={2}
      maxToRenderPerBatch={3}
      removeClippedSubviews={true}
    />
  );
};

const TaggedTab = () => (
  <Tabs.FlatList
    data={taggedContent}
    numColumns={2}
    keyExtractor={i => i.id}
    contentContainerStyle={{paddingBottom: 100}}
    renderItem={({item}) => (
      <View style={styles.taggedItem}>
        <Image source={{uri: item.uri}} style={styles.taggedImage} />
        <View style={styles.overlay}>
          <Text style={styles.taggedUser}>@{item.username}</Text>
          {item.caption ? (
            <Text style={styles.taggedCaption}>{item.caption}</Text>
          ) : null}
        </View>
      </View>
    )}
  />
);

export default function App() {
  const HEADER_HEIGHT = 250;

  return (
    <Tabs.Container
      renderHeader={() => (
        <View style={styles.header}>
          <Image
            source={{
              uri: 'https://img.freepik.com/free-photo/smiling-young-beautiful-girl-pointing-right-side-with-copy-space_141793-92529.jpg?ga=GA1.1.96571612.1750929128&semt=ais_items_boosted&w=740',
            }}
            style={styles.profileImage}
          />
          <Text style={styles.username}>@oliva_tales</Text>
          <Text style={styles.bio}>
            📸 Storyteller | Coffee Addict | Adventure Seeker
          </Text>
          <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>120</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>5.4k</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>342</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
          </View>
        </View>
      )}
      renderTabBar={props => (
        <MaterialTabBar
          {...props}
          indicatorStyle={{backgroundColor: 'black', height: 2}} // 🔥 set underline color here
          activeColor="black"
          inactiveColor="gray"
          style={{backgroundColor: 'white'}}
        />
      )}
      headerHeight={HEADER_HEIGHT}>
      <Tabs.Tab
        name="Posts"
        label={() => <Ionicons name="grid" size={22} color="black" />}>
        <PostsTab />
      </Tabs.Tab>

      <Tabs.Tab
        name="Videos"
        label={() => <Ionicons name="videocam" size={22} color="black" />}>
        <VideosTab />
      </Tabs.Tab>

      <Tabs.Tab
        name="Tagged"
        label={() => <Ionicons name="pricetag" size={22} color="black" />}>
        <TaggedTab />
      </Tabs.Tab>

      <Tabs.Tab
        name="About"
        label={() => (
          <Ionicons name="information-circle" size={22} color="black" />
        )}>
        <AboutTab />
      </Tabs.Tab>
    </Tabs.Container>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 250,
    paddingTop: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  aboutSectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginTop: 16,
    marginBottom: 8,
  },
  aboutBullet: {
    fontSize: 15,
    color: '#444',
    marginLeft: 10,
    marginBottom: 4,
  },
  aboutLink: {
    fontSize: 15,
    color: '#1e90ff',
    marginBottom: 6,
  },
  profileImage: {width: 90, height: 90, borderRadius: 45, marginBottom: 12},
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 12,
  },
  stat: {alignItems: 'center'},
  statNumber: {fontWeight: 'bold', fontSize: 16},
  statLabel: {fontSize: 12, color: '#666'},
  username: {fontSize: 16, fontWeight: '600', color: '#333', marginVertical: 3},
  bio: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 16,
    marginBottom: 15,
  },
  gridImage: {width: '33%', aspectRatio: 1},
  reelVideo: {width: '100%', height: SCREEN_HEIGHT * 0.6, marginBottom: 16},
  aboutContainer: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  aboutTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  aboutText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    marginBottom: 15,
    textAlign: 'justify',
  },
  aboutSubtext: {
    fontSize: 14,
    color: '#777',
    lineHeight: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  taggedItem: {
    width: '50%',
    aspectRatio: 1,
    marginBottom: 4,
    position: 'relative',
  },

  taggedImage: {
    width: '100%',
    height: '100%',
  },

  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 6,
  },

  taggedUser: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },

  taggedCaption: {
    color: '#ccc',
    fontSize: 11,
    marginTop: 2,
  },
});
