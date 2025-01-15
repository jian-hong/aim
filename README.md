# aim
Accelerating Interactive Moments
Here’s a detailed *README.md* file for your repository, explaining your project *AIM* (Accelerating Interactive Moments):

markdown
# AIM - Accelerating Interactive Moments

## Introduction

**AIM** is a next-generation **social connectivity platform** designed to revolutionize how people connect, interact, and build communities. AIM bridges the gap between physical and virtual connections, providing **seamless, secure, and versatile tools** for personal, professional, and group interactions.

AIM takes inspiration from platforms like Zenly, NFC-based systems, and advanced social networking applications, but goes a step further by introducing **Shake-to-Connect**, **NFC Tap-to-Connect**, **real-time group formation**, and **integrated payments**. It combines these features into a single, intuitive, and highly interactive application.

---

## Vision

The vision of AIM is to:
- **Make Connections Effortless:** Users can shake their phones or tap using NFC to instantly connect with others.
- **Foster Interactive Experiences:** Create dynamic groups, share locations, and engage with stories and feeds in real-time.
- **Enhance Privacy and Security:** Provide granular control over personal details while ensuring end-to-end encrypted interactions.
- **Unify Social and Professional Needs:** With distinct modes, AIM supports both casual social networking and professional networking.

---

## Core Features

### 1. **Shake-to-Connect**
- **Description:** Shake your phone to discover and connect with nearby users or groups within a 100m radius.
- **Options:**
  - **Add Friends:** View a sorted list of individuals (sorted by proximity) and add specific ones.
  - **Join Groups:** Join dynamic groups formed in real time by others shaking their phones.
- **Use Case:** Perfect for social events, conferences, or impromptu group activities.

### 2. **NFC Tap-to-Connect**
- **Description:** Tap your phone with another user's phone to exchange information instantly.
- **Use Case:** Great for quick and secure sharing of contact details or joining groups.

### 3. **Real-Time Group Formation**
- **Description:** Dynamically form or join groups when multiple users are shaking their phones within proximity.
- **Features:**
  - Group member list.
  - Real-time notifications for group activity.
  - Shared group chats with integrated location sharing.
- **Use Case:** Ideal for group outings, team-building activities, or spontaneous collaborations.

### 4. **Location Check-Ins**
- **Description:** Share your location, create memories, and view a history of past check-ins.
- **Use Case:** For personal memory keeping, group meet-ups, or even tracking your travel timeline.

### 5. **Stories and Feeds**
- **Description:** Share photos, videos, and updates via stories. Engage with threads for discussions and group announcements.
- **Use Case:** Mimics the functionality of Instagram stories or Twitter threads, but tailored for group and individual dynamics.

### 6. **Integrated Payments**
- **Description:** Built-in digital wallet to send money, split bills, or fund group activities.
- **Use Case:** Useful for shared expenses like splitting restaurant bills or managing event costs.

### 7. **Anonymity Options**
- **Description:** Allows users to interact while controlling the exposure of personal details.
- **Use Case:** Perfect for public or professional scenarios where privacy is key.

### 8. **Professional Mode**
- **Description:** Switch to a professional setting with tools like business card exchange, group presentations, and networking features.
- **Use Case:** Ideal for conferences, job fairs, or professional meetups.

---

## Technical Architecture

### **Frontend**
- **Technology:** React Native
- **Description:** A cross-platform mobile application designed for both iOS and Android.

### **Backend**
- **Technology:** Node.js, Express.js
- **Description:** Handles APIs for real-time matching, group creation, location sharing, and user interactions.

### **Database**
- **Primary:** MongoDB (for persistent storage of user and group data).
- **Temporary:** Redis (for session management during Shake-to-Connect or group creation).

### **Real-Time Communication**
- **Technology:** WebSocket or Firebase
- **Description:** Enables real-time updates for user matching, group formation, and chat interactions.

### **Cloud Infrastructure**
- **Provider:** AWS
- **Services Used:** S3 (storage), EC2 (compute), Lambda (serverless functions).

### **Security**
- **Authentication:** OAuth 2.0, JWT
- **Encryption:** End-to-end encryption for all communications and data exchanges.

---

## Development Status

### **Phase 1: Minimum Viable Product (MVP)**
- Core features like Shake-to-Connect, NFC Tap-to-Connect, and Real-Time Group Formation are under development.

### **Phase 2: Enhancements**
- Adding Stories, Feeds, and Location Check-Ins.
- Integration of payment systems for digital wallets.

### **Phase 3: Professional Features**
- Implementation of Professional Mode, including business card exchange and presentation tools.

---

## How It Works

### **1. Shake-to-Connect**
1. User shakes their phone, activating the accelerometer.
2. Location and timestamp are sent to the backend.
3. The backend matches users within a 100m radius and returns a list of nearby individuals or groups.
4. The user selects to either:
   - Add individual friends (sorted by proximity).
   - Join a group.

### **2. NFC Tap-to-Connect**
1. Users tap their phones together.
2. NFC exchanges encrypted contact details or group joining requests.
3. Data is securely stored and updated in the backend.

### **3. Real-Time Group Formation**
1. Users shaking within proximity form a temporary group in Redis.
2. Group details (members, location) are visible to others within range.
3. Groups persist until users disband or timeout.

---

## Installation (For Developers)

### **Frontend**
1. Clone the repository:
   bash
   git clone https://github.com/your-repo-name.git
   cd frontend
   
2. Install dependencies:
   bash
   npm install
   
3. Start the development server:
   bash
   npm start
   

### **Backend**
1. Navigate to the backend folder:
   bash
   cd backend
   
2. Install dependencies:
   bash
   npm install
   
3. Start the server:
   bash
   node server.js
   

---

## Contributing

We welcome contributions from the community! To contribute:
1. Fork the repository.
2. Create a new branch (`feature/my-feature`).
3. Commit your changes and open a pull request.

---

## Future Plans

- Add gamification features (achievements, badges).
- Expand to support desktop apps.
- Introduce AI-powered suggestions for events, groups, and connections.

---

## Contact

For more information, please contact us at:
- **Email:** oojianhongg@gmail.com
- **Website:** not published yet
---

Let me know if you'd like me to adjust this README or tailor it further for your project needs!
