import React from 'react';
import {Text, StyleSheet} from 'react-native';
import { Tabs} from 'react-native-collapsible-tab-view';

const AboutTab: React.FC = () => {
  return (
    <Tabs.ScrollView contentContainerStyle={styles.aboutContainer}>
      <Text style={styles.aboutTitle}>About Oliva</Text>

      <Text style={styles.aboutText}>
        Hi, I’m <Text style={{fontWeight: 'bold'}}>Oliva</Text> – a content
        creator, traveler, and coffee enthusiast. I love exploring new places,
        sharing stories through my lens, and connecting with like-minded
        adventurers. My goal is to inspire creativity and positivity through
        storytelling and media.
      </Text>

      <Text style={styles.aboutSectionTitle}>✨ Interests</Text>
      <Text style={styles.aboutBullet}>• Photography</Text>
      <Text style={styles.aboutBullet}>• Travel & Adventure</Text>
      <Text style={styles.aboutBullet}>• Minimalist Living</Text>
      <Text style={styles.aboutBullet}>• Plant-based Cooking</Text>

      <Text style={styles.aboutSectionTitle}>📬 Contact</Text>
      <Text style={styles.aboutText}>
        For collaborations or inquiries, feel free to reach out:
      </Text>
      <Text style={styles.aboutLink}>📧 oliva.tales@example.com</Text>
      <Text style={styles.aboutLink}>📸 instagram.com/oliva_tales</Text>

      <Text style={styles.aboutSubtext}>Last updated: June 2025</Text>
    </Tabs.ScrollView>
  );
};

const styles = StyleSheet.create({
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
  aboutSectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginTop: 16,
    marginBottom: 8,
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
});

export default AboutTab;
