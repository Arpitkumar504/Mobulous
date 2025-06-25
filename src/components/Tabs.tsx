import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface TabsProps {
  activeTab: number;
  setActiveTab: (index: number) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab }) => {
  const tabs = ['Posts', 'Videos', 'Tagged', 'About'];

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={tab}
          style={[
            styles.tab,
            activeTab === index ? styles.activeTab : null,
          ]}
          onPress={() => setActiveTab(index)}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === index ? styles.activeTabText : null,
            ]}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  tabText: {
    fontSize: 14,
    color: '#666',
  },
  activeTabText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default Tabs;