# Development Guide

## Project Structure Overview

### `/screens`
Contains screen components for each tool. Each screen handles UI and user interaction for a specific calculator.

Example: `NozzlePressureScreen.tsx`

### `/calculations`
Contains pure calculation logic and data processing functions. Keep these separate from UI code for testability.

Example: `nozzlePressure.ts` exports `calculateNozzlePressure(input: NozzlePressureInput): NozzlePressureResult`

### `/components`
Reusable UI components that can be used across multiple screens.

Examples:
- Input fields with validation
- Result display cards
- Custom buttons

### `/utils`
Helper functions and utility code.

Examples:
- Number formatting
- Unit conversions
- Validation helpers

### `/docs`
Project documentation and calculation references.

## Development Workflow

### 1. Creating a New Calculator

#### Step 1: Add Calculation Logic
Create a new file in `/calculations`:

```typescript
// calculations/kickerPumpPlacement.ts
export interface KickerPumpInput {
  // Define your input parameters
}

export interface KickerPumpResult {
  // Define your output parameters
}

export function calculateKickerPumpPlacement(input: KickerPumpInput): KickerPumpResult {
  // Implementation
}
```

#### Step 2: Create Screen Component
Create a new file in `/screens`:

```typescript
// screens/KickerPumpScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { calculateKickerPumpPlacement } from '../calculations/kickerPumpPlacement';

export default function KickerPumpScreen() {
  const [result, setResult] = useState(null);

  const handleCalculate = (input) => {
    const result = calculateKickerPumpPlacement(input);
    setResult(result);
  };

  return (
    <View style={styles.container}>
      {/* UI Implementation */}
    </View>
  );
}

const styles = StyleSheet.create({
  // Styles
});
```

#### Step 3: Add Navigation
Update `App.tsx` to navigate to the new screen.

### 2. Testing Calculations

Create test files in `/calculations` with `.test.ts` extension:

```typescript
// calculations/nozzlePressure.test.ts
import { calculateNozzlePressure } from './nozzlePressure';

describe('nozzlePressure', () => {
  it('should calculate pressure correctly', () => {
    const result = calculateNozzlePressure({
      flow: 100,
      nozzleSize: 2,
    });
    expect(result.pressure).toBeGreaterThan(0);
  });
});
```

## Style Guidelines

### TypeScript
- Use strict mode (enabled in `tsconfig.json`)
- Always define interfaces for data structures
- Use explicit return types on functions

### React Native
- Organize styles using `StyleSheet.create()`
- Keep component logic simple
- Extract complex logic into utility functions or custom hooks

### Naming Conventions
- Components: PascalCase (e.g., `NozzlePressureScreen`)
- Functions: camelCase (e.g., `calculateNozzlePressure`)
- Files: Match the export name for components, lowercase with camelCase for utilities

## Common Tasks

### Running on a Specific Device

**iOS:**
```bash
npm run ios
```

**Android:**
```bash
npm run android
```

**Web:**
```bash
npm run web
```

### Debugging

Use React Native Debugger or add console logs. View logs with:
```bash
npm start
```
Then check the terminal output.

### Hot Reload

The Expo development server supports hot reload. Simply save a file and the app will reload automatically.

## Performance Tips

1. **Keep Calculations Light**: Pure calculation functions should be fast
2. **Memoize Results**: For expensive calculations, consider caching
3. **Optimize Renders**: Use React.memo for components that don't change often
4. **Lazy Load**: Use React.lazy() for screens that load heavy modules

## Useful Resources

- [React Native Documentation](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
