import React, {useRef, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from './src/components/Header';
import Tabs from './src/components/Tabs';
import TabContent from './src/components/TabContent';
import {cards} from './src/utils/data';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const [mostVisibleIndex, setMostVisibleIndex] = useState<number | null>(null);
  const flatListRef = useRef<FlatList>(null);

  const renderHeader = () => (
    <>
      <Header />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </>
  );

  const onViewableItemsChanged = React.useRef(
    ({
      viewableItems,
    }: {
      viewableItems: {item: any; index: number; isViewable: boolean}[];
    }) => {
      const mostVisible = viewableItems.reduce(
        (max, item) => {
          if (item.isViewable && item.item.type === 'video') {
            const viewablePercentage = item.isViewable ? 1 : 0;
            if (viewablePercentage > max.percentage) {
              return {index: item.index, percentage: viewablePercentage};
            }
          }
          return max;
        },
        {index: null as number | null, percentage: 0},
      );
      setMostVisibleIndex(mostVisible.index);
    },
  ).current;

  const filteredCards = cards.filter(item => {
    console.log('Filtering item:', item, 'activeTab:', activeTab); 
    if (activeTab === 0) return true; 
    if (activeTab === 1) return item.type === 'video'; 
    if (activeTab === 2) return item.type === 'tagged'; 
    return false;
  });
  console.log('Filtered Cards:', filteredCards, activeTab);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <FlatList
        ref={flatListRef}
        data={filteredCards}
        renderItem={({item, index}) => (
          <TabContent
            data={item}
            activeTab={activeTab}
            mostVisibleIndex={mostVisibleIndex}
            index={index}
          />
        )}
        keyExtractor={item => item.id}
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderHeader}
        style={styles.flatList}
        viewabilityConfig={{
          minimumViewTime: 100,
          itemVisiblePercentThreshold: 30,
        }}
        onViewableItemsChanged={onViewableItemsChanged}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flatList: {
    flex: 1,
  },
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
});

export default App;
