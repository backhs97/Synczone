# SyncZone

SyncZone, aims to meet the needs of users who struggle to stay connected with loved ones living far away. The main focus of our project is to bridge the communication gap by offering features that help users connect emotionally and practically. Whether through sending positive messages, scheduling events, or making video calls, SyncZone is designed to keep you connected.

## Demo

https://youtu.be/PkkkFOlyVUo

## Features

- **Real-time Chat with Emotion Analysis**: Engage in real-time conversations with emotion analysis to better understand the emotional tone of the conversation.
- **Calendar Integration**: Schedule events directly from the chat interface when negative emotions are detected.
- **Video Calling**: Seamlessly transition from chat to video calls (currently under development).
- **Contact Management**: Easily add and manage contacts within the app.
- **Emotion-Based Scheduling**: Automatically suggest scheduling events when negative emotions are detected in conversations.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/backhs97/Synczone.git
   ```
2. Navigate to the project directory:
   ```bash
   cd /frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables by creating a `.env` file in the root directory and adding your API keys and other sensitive information.

## Usage

1. Start the development server:
   ```bash
   npm start
   ```
2. Use an Android emulator or a physical Android device to test the application.

## Challenges & Solutions

### Emotion Analysis Integration

**Challenge**: Integrating emotion analysis into the chat feature was complex due to the need for real-time processing and accurate emotion detection. The challenge was compounded by the need to seamlessly integrate this feature into an existing chat interface built with React Native.

**Solution**: We utilized a model trained on 53 emotions and implemented a WebSocket connection for real-time data processing. This allowed us to accurately detect and display the predominant emotion in each message. The integration required careful handling of asynchronous data flows and ensuring that the emotion analysis did not introduce latency into the chat experience. We also had to ensure that the emotion data was stored efficiently in Supabase, allowing for quick retrieval and display.

### UI/UX Improvements

**Challenge**: Enhancing the user interface for better user experience, especially in displaying emotion analysis results. The existing UI needed to be intuitive and visually appealing, while also providing clear feedback on the emotional tone of conversations.

**Solution**: We improved the UI by mapping emotion words and colors to each chat message, making it more intuitive for users. Additionally, animations and button enhancements were added to the `ChatDetailScreen.jsx` for a more engaging experience. This involved using React Native's animation libraries to create smooth transitions and interactive elements that respond to user actions.

### Video Call Integration

**Challenge**: Integrating video call functionality using native modules conflicted with existing Expo modules, causing build issues. The challenge was further complicated by the need to support both Android and iOS platforms, each with its own set of requirements and limitations.

**Solution**: We transitioned from an Expo-based application to a native Android application using `expo prebuild` and `expo eas build`. This allowed us to integrate Agora SDK for video calling, although full integration is still in progress. The transition required significant refactoring of the codebase to accommodate native module dependencies and ensure compatibility with the existing app architecture.

### Deployment to Google Play

**Challenge**: Building and deploying the app to Google Play was hindered by module conflicts and version control issues. The deployment process also required compliance with Google's policies and guidelines, which added an additional layer of complexity.

**Solution**: We resolved these issues by removing incompatible Expo modules, managing version control meticulously, and using `expo eas build` for successful APK/AAB builds. We also set up a Google Play Developer account to manage the deployment process. This involved creating detailed app descriptions, setting up appropriate permissions, and ensuring that the app met all necessary security and performance standards.

### Permissions Management

**Challenge**: As the app transitioned to Android, managing permissions for camera, microphone, and location access became crucial. Ensuring that users were prompted for the correct permissions at the right time was essential for maintaining app functionality and user trust.

**Solution**: Implemented permission requests using `react-native-permissions` to ensure users are prompted for necessary permissions, enhancing security and functionality. This involved configuring the AndroidManifest.xml file to declare required permissions and implementing logic to handle user responses to permission requests.

### Security Enhancements

**Challenge**: Ensuring sensitive information such as API keys are not exposed in the codebase. This was critical for protecting user data and maintaining the integrity of the app's backend services.

**Solution**: Removed hardcoded API information and utilized environment variables to enhance security and prevent accidental exposure of sensitive data. We also implemented best practices for secure data storage and transmission, including using HTTPS for all network requests and encrypting sensitive data before storing it in the database.

### Database Management with Supabase

**Challenge**: Efficiently managing and retrieving data from Supabase, especially for emotion analysis and chat functionalities. The challenge was to ensure that data operations were fast and reliable, even as the app scaled to support more users and messages.

**Solution**: Implemented optimized queries and data structures to handle real-time data efficiently. This included creating separate tables for storing emotion analysis results and ensuring data consistency across different components. We also used Supabase's real-time capabilities to keep the app's UI in sync with the latest data changes.

### Cross-Platform Compatibility

**Challenge**: Ensuring the app functions seamlessly across different devices and platforms. This involved addressing differences in UI rendering, performance, and feature availability between Android and iOS.

**Solution**: Conducted extensive testing on both Android and iOS devices to identify and fix platform-specific issues. Adjusted UI components and layouts to ensure a consistent experience across devices. We also leveraged platform-specific APIs and features to enhance the app's functionality and performance on each platform.

### Integration with External APIs

**Challenge**: Integrating with external APIs for features like emotion analysis and video calling required careful management of API keys, rate limits, and error handling.

**Solution**: We used environment variables to securely manage API keys and implemented robust error handling to gracefully handle API failures. We also monitored API usage to ensure compliance with rate limits and avoid service disruptions.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with clear and descriptive messages.
4. Push your changes to your fork.
5. Submit a pull request with a detailed description of your changes.
