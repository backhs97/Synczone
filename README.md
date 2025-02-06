# SyncZone

SyncZone, aims to meet the needs of users who struggle to stay connected with ones living far away. The main focus of our project is to bridge the communication gap by offering features that help users connect emotionally and practically. Whether through sending positive messages, scheduling events, (or making video calls), SyncZone is designed to keep you connected.

## Demo

https://youtu.be/PkkkFOlyVUo

## Features

- **Real-time Chat with Emotion Analysis**: Engage in real-time conversations with emotion analysis to better understand the emotional tone of the conversation.
- **Calendar Integration**: Schedule events directly or/and from the chat interface when negative emotions are detected.
- **Contact**: Easily add and manage contacts within the app.
- **Shop**: Own banners and stickers within the app, which users can use to decorate their profile or use when chatting with other users.
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
4. Set up environment variables by creating a `.env` file in the root directory and adding your API keys.

## Usage

1. Start the development server:
   ```bash
   npm start
   ```
2. Use an Android emulator or a physical Android device to test the application.

## Challenges & Solutions

### Emotion Analysis Integration

**Challenge**: Integrating emotion analysis into the chat feature was complex due to the need for real-time processing and accurate emotion detection. The challenge was compounded by the need to seamlessly integrate this feature into an existing chat interface built with React Native.

**Solution**: We utilized a model trained on 53 emotions and implemented a WebSocket connection for real-time data processing. This allowed us to detect and display the predominant emotion in each message accurately. The integration required careful handling of the emotion analysis and did not introduce latency into the chat experience. We also had to ensure that the emotion data was stored efficiently in Supabase, allowing for quick retrieval and display.

### UI/UX Improvements

**Challenge**: Enhance the user interface for a better user experience, especially when displaying emotion analysis results. The existing UI needed to be intuitive and visually appealing, while also providing clear feedback on the emotional tone of conversations.

<img src="https://github.com/user-attachments/assets/3ac87757-9d07-4bb4-8461-17efcaa84959" width="400" height="700"/> 
<img src="https://github.com/user-attachments/assets/bd987770-6be4-40a4-b718-abbcefe09443" width="400" height="700"/>
<img src="https://github.com/user-attachments/assets/6efa175f-2473-4459-b395-3ee646776822" width="400" height="750"/>

**Solution**: Improved the UI by mapping emotion colors to each chat message, making it more intuitive for users. Additionally, animations and button enhancements were added to the `ChatDetailScreen.jsx` for a more engaging experience. This involved using React Native's animation libraries to create smooth transitions and interactive elements that respond to user actions.

<img src="https://github.com/user-attachments/assets/d94b398e-fcb8-42c2-96d3-29e34c8a66e7" width="400" height="700"/>
<img src="https://github.com/user-attachments/assets/4bae9bcb-7500-4913-9a5b-0afcb75d0f77" width="400" height="700"/>

### Video Call Integration

**Challenge**: Integrating video call functionality using native modules conflicted with existing Expo modules, causing build issues. The challenge was further complicated by the need to support both Android and iOS platforms, each with its own set of requirements and limitations.

**Solution/Failure**: We transitioned from an Expo-based application to a native Android application using `expo prebuild` and `expo eas build`. This allowed us to integrate Agora SDK for video calling, although full integration is still in progress. The transition required significant refactoring of the codebase to accommodate native module dependencies and ensure compatibility with the existing app architecture. However, we refactored the entire codebase and converted it to an Android-based application, but ultimately failed to merge the existing code with the video calling functionality.

<img src="https://github.com/user-attachments/assets/984025b9-011d-453d-9306-a275b1e79286" width="600" height="800"/>
<img src="https://github.com/user-attachments/assets/ac2552cb-3b69-4800-b25f-e7ef04c7765d" width="400" height="800"/>

### Deployment to Google Play

**Challenge**: Building and deploying the app to Google Play was hindered by module conflicts and version control issues. The deployment process also required compliance with Google's policies and guidelines, which added an additional layer of complexity.

**Solution**: We resolved these issues by meticulously removing incompatible Expo modules, managing version control, and using `expo eas build` for successful APK/AAB builds. We also set up a Google Play Developer account to manage the deployment process. This involved creating detailed app descriptions, setting up appropriate permissions, and ensuring the app met all necessary security and performance standards.

### Security Enhancements

**Challenge**: Ensuring sensitive information such as API keys/endpoints are not exposed in the codebase. This was critical for protecting user data and maintaining the integrity of the app's backend services.

**Solution**: Removed hardcoded API information and utilized environment variables to enhance security and prevent accidental exposure of sensitive data by using .env. We also implemented best practices for secure data storage and transmission, including using HTTPS for all network requests. In addition, another reason for unifying the API to HTTPS was that it was one of the tasks that had to be integrated in order to distribute to Google Play.

### Database (Supabase)

**Challenge**: Efficiently managing and retrieving data from Supabase, especially for emotion analysis and chat functionalities. The challenge was to ensure that data operations were fast and reliable, even as the app scaled to support more users and messages.

**Solution**: Implemented optimized queries and data structures to handle real-time data efficiently. This included creating separate tables for storing emotion analysis results and ensuring data consistency across different components. We also used Supabase's real-time capabilities to keep the app's UI in sync with the latest data changes.

![dbfirst](https://github.com/user-attachments/assets/26fccfb3-1e2b-4259-bad4-a88311b0ff99)

![finaldb](https://github.com/user-attachments/assets/b829e248-eacf-4898-8c96-84f5a4a41dc1)

### Cross-Platform Compatibility

**Challenge**: Ensuring the app functions seamlessly across different devices and platforms. This involved addressing differences in UI rendering, performance, and feature availability between Android and iOS.

**Solution/Failure**: Adjusted UI components and layouts to ensure a consistent experience across devices. We also leveraged platform-specific APIs and features to enhance the app's functionality and performance on each platform. For example, libraries that worked on Android didn't work on iOS and vice versa, so we had to leverage features available on each platform. However, in the end, we realized that it was impossible to implement perfect layouts and UI features on both iOS and Android environments in a short period, as we were working on react-native-based apps at Expo.

### Integration with External APIs

**Challenge**: Integrating with external APIs for features like emotion analysis and video calling required careful management of API keys, rate limits, and error handling.

**Solution**: We used environment variables to securely manage API keys and implemented robust error handling to handle API failures. We also monitored API usage in real time. 

<img src="https://github.com/user-attachments/assets/a4abe3e6-f27f-44be-baca-795ed92e6324" width="400" height="700"/>

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with clear and descriptive messages.
4. Push your changes to your fork.
5. Submit a pull request with a detailed description of your changes.
