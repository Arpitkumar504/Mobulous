import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {COLORS, IMAGES} from '../utils/contants';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image source={IMAGES.profilepic} style={styles.profileImage} />
        <View>
          <Text style={styles.username}>@Oliva_Tales</Text>
          <Text style={styles.name}>Oliva</Text>
        </View>
      </View>
      <Text style={styles.bio}>
        📸 Storyteller | Coffee Addict | Adventure Seeker
      </Text>
      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>100</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>1K</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>500</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.NEUTRAL_900,
  },
  name: {
    fontSize: 16,
    fontWeight: 'normal',
    color: COLORS.NEUTRAL_400,
    marginTop: 5,
  },
  bio: {
    marginTop: 8,
    fontSize: 14,
    color: '#333',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
});

export default Header;
