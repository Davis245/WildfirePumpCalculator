# Wildfire Pump Calculator

A mobile application for wildfire firefighting professionals to calculate and plan pump operations in the field.

## About

The Wildfire Pump Calculator provides essential tools for wildfire firefighting operations, including:

- **Nozzle Pressure Calculator** - Determine optimal nozzle pressure for various scenarios
- **Kicker Pump Placement** - Calculate placement strategies for kicker pumps
- **Relay Pump Planner** - Plan relay pump configurations and distances
- **Tender Shuttle Calculator** - Analyze water supply logistics for tender shuttles

This app runs entirely on your device with no internet connection required, making it ideal for field operations.

## Tech Stack

- **React Native** - Cross-platform mobile development
- **Expo** - Development platform for React Native
- **TypeScript** - Type-safe JavaScript development

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- Expo Go app installed on your mobile device (iOS or Android)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Davis245/WildfirePumpCalculator.git
   cd WildfirePumpCalculator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the development server:

```bash
npm start
```

This will display a QR code in your terminal. Use the Expo Go app on your phone to scan the QR code and run the app.

#### Platform-Specific Commands

- **iOS**: `npm run ios`
- **Android**: `npm run android`
- **Web**: `npm run web`

## Project Structure

```
/components    - Reusable UI components
/screens       - Screen components for different tools
/calculations  - Calculation logic and algorithms
/utils         - Utility functions and helpers
/docs          - Documentation and guides
/assets        - Images and other static assets
```

## Development

### Adding New Features

1. Create calculation logic in `/calculations`
2. Build UI components in `/components` or `/screens`
3. Test on your device using Expo Go

### Roadmap

- [ ] Implement Nozzle Pressure Calculator
- [ ] Add Kicker Pump Placement tool
- [ ] Develop Relay Pump Planner
- [ ] Build Tender Shuttle Calculator
- [ ] Add result history/notes

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.