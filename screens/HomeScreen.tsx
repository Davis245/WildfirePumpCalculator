import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView style={[styles.container, { paddingTop: insets.top + 16 }]} showsVerticalScrollIndicator={false}>
      {/* Title */}
      <Text style={styles.title}>Wildfire Pump Calculator</Text>

      {/* Big Widget - Current Data */}
      <View style={styles.bigWidget}>
        <Text style={styles.widgetTitle}>Current Data</Text>
        <View style={styles.widgetContent}>
          <Text style={styles.placeholder}>No data available</Text>
        </View>
      </View>

      {/* Small Widgets Row */}
      <View style={styles.smallWidgetsContainer}>
        <View style={styles.smallWidget}>
          <Text style={styles.smallWidgetTitle}>Nozzle Pressure</Text>
          <Text style={styles.smallWidgetValue}>--</Text>
          <Text style={styles.smallWidgetUnit}>PSI</Text>
        </View>

        <View style={styles.smallWidget}>
          <Text style={styles.smallWidgetTitle}>Hose Capacity</Text>
          <Text style={styles.smallWidgetValue}>--</Text>
          <Text style={styles.smallWidgetUnit}>GPM</Text>
        </View>

        <View style={styles.smallWidget}>
          <Text style={styles.smallWidgetTitle}>Max Distance</Text>
          <Text style={styles.smallWidgetValue}>--</Text>
          <Text style={styles.smallWidgetUnit}>FT</Text>
        </View>
      </View>

      {/* Medium Widget - Water Supply */}
      <View style={styles.mediumWidget}>
        <Text style={styles.widgetTitle}>Water Supply</Text>
        <View style={styles.widgetContent}>
          <Text style={styles.placeholder}>No supply data</Text>
        </View>
      </View>

      {/* Big Widget - Kicker Pump & Relay System Recommendations */}
      <View style={styles.recommendationWidget}>
        <Text style={styles.widgetTitle}>Kicker Pump & Relay System</Text>
        <View style={styles.widgetContent}>
          <Text style={styles.placeholder}>No recommendations available</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },

  // Big Widget - Current Data
  bigWidget: {
    width: '85%',
    height: '30%',
    minHeight: 180,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  // Small Widgets Row
  smallWidgetsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    marginBottom: 20,
    gap: 12,
  },
  smallWidget: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  smallWidgetTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
    marginBottom: 8,
  },
  smallWidgetValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  smallWidgetUnit: {
    fontSize: 10,
    color: '#999',
    marginTop: 4,
  },

  // Medium Widget - Water Supply
  mediumWidget: {
    width: '70%',
    height: '20%',
    minHeight: 120,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  // Big Widget - Kicker Pump & Relay System Recommendations
  recommendationWidget: {
    width: '85%',
    height: '20%',
    minHeight: 120,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  // Common Widget Styles
  widgetTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
    marginBottom: 12,
  },
  widgetContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholder: {
    fontSize: 14,
    color: '#999',
    fontStyle: 'italic',
  },
});
