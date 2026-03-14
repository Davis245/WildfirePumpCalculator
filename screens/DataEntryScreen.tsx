import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function DataEntryScreen() {
  const insets = useSafeAreaInsets();
  const [pumpPressure, setPumpPressure] = useState('');
  const [flowRate, setFlowRate] = useState('');
  const [hoseLength, setHoseLength] = useState('');
  const [hoseCount, setHoseCount] = useState('');
  const [hoseUnit, setHoseUnit] = useState<'length' | 'hoses'>('length');
  const [hoseDiameter, setHostDiameter] = useState('1');
  const [elevation, setElevation] = useState('');
  const [thievesCount, setThievesCount] = useState('');
  const [threewaysCount, setThreewaysCount] = useState('');
  const [nozzlesCount, setNozzlesCount] = useState('');

  const handleHoseDiameterSelect = (diameter: string) => {
    setHostDiameter(diameter);
  };

  const handleHoseUnitToggle = (unit: 'length' | 'hoses') => {
    setHoseUnit(unit);
  };

  const incrementCounter = (
    counter: string,
    setCounter: (value: string) => void
  ) => {
    const current = parseInt(counter) || 0;
    setCounter((current + 1).toString());
  };

  const decrementCounter = (
    counter: string,
    setCounter: (value: string) => void
  ) => {
    const current = parseInt(counter) || 0;
    if (current > 0) {
      setCounter((current - 1).toString());
    }
  };

  return (
    <ScrollView
      style={[styles.container, { paddingTop: insets.top + 16 }]}
      showsVerticalScrollIndicator={false}
    >
      {/* Title */}
      <Text style={styles.title}>Data Entry</Text>

      {/* Widget 1: Pump */}
      <View style={styles.widget}>
        <Text style={styles.widgetTitle}>Pump</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Pump Pressure (PSI)</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter pump pressure"
            placeholderTextColor="#ccc"
            keyboardType="decimal-pad"
            value={pumpPressure}
            onChangeText={setPumpPressure}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Flow Rate (GPM)</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter flow rate"
            placeholderTextColor="#ccc"
            keyboardType="decimal-pad"
            value={flowRate}
            onChangeText={setFlowRate}
          />
        </View>
      </View>

      {/* Widget 2: Hose */}
      <View style={styles.widget}>
        <Text style={styles.widgetTitle}>Hose</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            {hoseUnit === 'length' ? 'Hose Length (Meters)' : 'Number of Hoses'}
          </Text>
          <View style={styles.unitToggleRow}>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder={hoseUnit === 'length' ? 'Enter distance' : 'Enter number of hoses'}
              placeholderTextColor="#ccc"
              keyboardType={hoseUnit === 'length' ? 'decimal-pad' : 'number-pad'}
              value={hoseUnit === 'length' ? hoseLength : hoseCount}
              onChangeText={
                hoseUnit === 'length' ? setHoseLength : setHoseCount
              }
            />
            <TouchableOpacity
              style={[
                styles.unitToggleButton,
                hoseUnit === 'length' && styles.unitToggleButtonActive,
              ]}
              onPress={() => handleHoseUnitToggle('length')}
            >
              <Text
                style={[
                  styles.unitToggleButtonText,
                  hoseUnit === 'length' && styles.unitToggleButtonTextActive,
                ]}
              >
                M
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.unitToggleButton,
                hoseUnit === 'hoses' && styles.unitToggleButtonActive,
              ]}
              onPress={() => handleHoseUnitToggle('hoses')}
            >
              <Text
                style={[
                  styles.unitToggleButtonText,
                  hoseUnit === 'hoses' && styles.unitToggleButtonTextActive,
                ]}
              >
                #
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Hose Diameter</Text>
          <View style={styles.diameterPresets}>
            <TouchableOpacity
              style={[
                styles.diameterButton,
                hoseDiameter === '1' && styles.diameterButtonActive,
              ]}
              onPress={() => handleHoseDiameterSelect('1')}
            >
              <Text
                style={[
                  styles.diameterButtonText,
                  hoseDiameter === '1' && styles.diameterButtonTextActive,
                ]}
              >
                1"
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.diameterButton,
                hoseDiameter === '1.5' && styles.diameterButtonActive,
              ]}
              onPress={() => handleHoseDiameterSelect('1.5')}
            >
              <Text
                style={[
                  styles.diameterButtonText,
                  hoseDiameter === '1.5' && styles.diameterButtonTextActive,
                ]}
              >
                1 1/2"
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Elevation</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter elevation"
            placeholderTextColor="#ccc"
            keyboardType="decimal-pad"
            value={elevation}
            onChangeText={setElevation}
          />
        </View>
      </View>

      {/* Widget 3: Jewelry */}
      <View style={styles.widget}>
        <Text style={styles.widgetTitle}>Jewelry</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Number of Thieves</Text>
          <View style={styles.counterContainer}>
            <TouchableOpacity
              style={styles.counterButton}
              onPress={() => decrementCounter(thievesCount, setThievesCount)}
            >
              <Text style={styles.counterButtonText}>−</Text>
            </TouchableOpacity>
            <Text style={styles.counterValue}>{thievesCount || '0'}</Text>
            <TouchableOpacity
              style={styles.counterButton}
              onPress={() => incrementCounter(thievesCount, setThievesCount)}
            >
              <Text style={styles.counterButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Number of 3-Ways</Text>
          <View style={styles.counterContainer}>
            <TouchableOpacity
              style={styles.counterButton}
              onPress={() => decrementCounter(threewaysCount, setThreewaysCount)}
            >
              <Text style={styles.counterButtonText}>−</Text>
            </TouchableOpacity>
            <Text style={styles.counterValue}>{threewaysCount || '0'}</Text>
            <TouchableOpacity
              style={styles.counterButton}
              onPress={() => incrementCounter(threewaysCount, setThreewaysCount)}
            >
              <Text style={styles.counterButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Widget 4: Nozzles */}
      <View style={styles.widget}>
        <Text style={styles.widgetTitle}>Nozzles</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Number of Nozzles</Text>
          <View style={styles.counterContainer}>
            <TouchableOpacity
              style={styles.counterButton}
              onPress={() => decrementCounter(nozzlesCount, setNozzlesCount)}
            >
              <Text style={styles.counterButtonText}>−</Text>
            </TouchableOpacity>
            <Text style={styles.counterValue}>{nozzlesCount || '0'}</Text>
            <TouchableOpacity
              style={styles.counterButton}
              onPress={() => incrementCounter(nozzlesCount, setNozzlesCount)}
            >
              <Text style={styles.counterButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Bottom padding for scroll */}
      <View style={{ height: 100 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },

  // Widget Container
  widget: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  widgetTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 16,
  },

  // Input Group
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#555',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: '#333',
  },

  // Unit Toggle
  unitToggleRow: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  unitToggleButton: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    minWidth: 50,
    alignItems: 'center',
  },
  unitToggleButtonActive: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  unitToggleButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  unitToggleButtonTextActive: {
    color: '#ffffff',
  },

  // Diameter Presets
  diameterPresets: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'space-between',
  },
  diameterButton: {
    flex: 1,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  diameterButtonActive: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  diameterButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  diameterButtonTextActive: {
    color: '#ffffff',
  },

  // Counter System
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingVertical: 12,
  },
  counterButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  counterButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  counterValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    minWidth: 50,
    textAlign: 'center',
  },
});
