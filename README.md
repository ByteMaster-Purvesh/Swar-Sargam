# 🎵 TriNaad

## AI-Powered Emotion-Aware Music Recommendation Platform

**TriNaad** is an AI-powered music recommendation platform that uses real-time facial analysis to identify a user's emotional state and deliver personalized music recommendations accordingly.

Built with **Google MediaPipe, MERN Stack, Redis, and ImageKit**, the platform combines AI-based emotion detection with a modern full-stack architecture to create an interactive and personalized music experience.

---

## ✨ Key Features

* 🎭 **Real-Time Emotion Detection** — Analyze facial expressions using Google MediaPipe.
* 🎵 **Mood-Based Recommendations** — Recommend songs according to the detected emotional state.
* 🔐 **JWT Authentication** — Secure user authentication and authorization.
* ⚡ **Redis Token Blacklisting** — Secure logout and JWT session invalidation.
* 👨‍💼 **Admin Dashboard** — Upload and manage songs through the admin interface.
* ☁️ **ImageKit Integration** — Cloud-based storage and delivery for music and media assets.
* 📱 **Responsive UI** — Modern interface optimized for different screen sizes.

---

## 🧠 Supported Emotions

TriNaad currently recognizes three primary emotional states:

| Emotion      | Recommendation             |
| ------------ | -------------------------- |
| 😊 Happy     | Energetic and upbeat music |
| 😢 Sad       | Calm and soothing music    |
| 😲 Surprised | Dynamic and engaging music |

The detected emotion is used to dynamically generate relevant music recommendations.

---

## 🏗️ System Architecture

```text
                    ┌─────────────────────┐
                    │       User          │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   React + Vite UI   │
                    └──────────┬──────────┘
                               │
                  ┌────────────┴────────────┐
                  │                         │
                  ▼                         ▼
        ┌──────────────────┐      ┌──────────────────┐
        │ Google MediaPipe │      │   Music Player   │
        │ Emotion Analysis │      │ & Recommendations│
        └────────┬─────────┘      └────────┬─────────┘
                 │                         │
                 └────────────┬────────────┘
                              ▼
                    ┌─────────────────────┐
                    │ Node.js + Express   │
                    │      Backend        │
                    └──────────┬──────────┘
                               │
             ┌─────────────────┼─────────────────┐
             ▼                 ▼                 ▼
      ┌─────────────┐   ┌─────────────┐   ┌─────────────┐
      │  MongoDB    │   │    Redis    │   │   ImageKit  │
      │   Atlas     │   │    Cloud    │   │     CDN     │
      └─────────────┘   └─────────────┘   └─────────────┘
```

---

## ⚡ Technology Stack

### Frontend

* React
* Vite
* Context API
* Responsive UI

### Backend

* Node.js
* Express.js
* JWT Authentication

### Database & Infrastructure

* MongoDB Atlas
* Redis Cloud
* ImageKit

### AI / Computer Vision

* Google MediaPipe
* Real-time facial analysis

---

## 📁 Project Structure

```text
TriNaad/
│
├── Frontend/
│   ├── src/
│   ├── assets/
│   ├── features/
│   └── app.routes.jsx
│
├── Backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── config/
│   │   └── services/
│   │
│   └── server.js
│
└── README.md
```

---

## 🔐 Authentication & Security

TriNaad uses **JWT-based authentication** for secure access control.

Redis is integrated into the authentication workflow to maintain a blacklist of invalidated JWT tokens. When a user logs out, the associated token can be invalidated through Redis, preventing further unauthorized use of the session token.

---

## 👨‍💼 Admin Functionality

Authorized administrators can access the song management functionality directly through the application's profile/navigation interface.

Admin functionality includes:

* Uploading songs
* Managing music content
* Adding media assets
* Controlling available recommendations

> **Security Note:** Never expose real admin credentials in a public GitHub README. Use environment variables and create demo credentials separately for testing.

---

## 🚀 Local Development

### 1. Clone the Repository

```bash
git clone https://github.com/ByteMaster-Purvesh/Swar-Sargam.git
cd Swar-Sargam
```

### 2. Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file inside the `Backend` directory:

```env
MONGO_URL=your_mongodb_cluster_url
PORT=5000
JWT_SECRET=your_jwt_secret

REDIS_HOST=your_redis_host
REDIS_PORT=your_redis_port
REDIS_PASSWORD=your_redis_password

IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

Start the backend:

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

The frontend will be available at:

```text
http://localhost:5173
```

---

## 📦 Core Modules

| Module                | Responsibility                            |
| --------------------- | ----------------------------------------- |
| MediaPipe Engine      | Real-time facial analysis                 |
| Recommendation Engine | Mood-based music selection                |
| JWT Authentication    | User authentication and authorization     |
| Redis                 | Token invalidation and session management |
| MongoDB Atlas         | Persistent application data               |
| ImageKit              | Media storage and CDN delivery            |
| Admin Panel           | Music content management                  |

---

## 📈 Engineering Highlights

TriNaad demonstrates the integration of:

* 🤖 AI and computer-vision capabilities into a web application
* 🎭 Real-time emotion-aware user interaction
* ⚛️ Modern React frontend architecture
* 🔧 RESTful Node.js/Express backend
* 🔐 JWT authentication and Redis-based token invalidation
* ☁️ Cloud-based media storage and delivery
* 🗄️ MongoDB-based application data management
* 📱 Responsive and production-oriented UI design

---

## 🌐 Deployment Architecture

| Component                      | Platform      |
| ------------------------------ | ------------- |
| Frontend                       | Vercel        |
| Backend                        | Render        |
| Database                       | MongoDB Atlas |
| Cache / Session Infrastructure | Redis Cloud   |
| Media Storage & CDN            | ImageKit      |

---

## 👨‍💻 Author

### Purvesh Somwanshi

Full Stack Developer focused on building scalable, AI-powered web applications.

**GitHub:** https://github.com/ByteMaster-Purvesh

---

## ⭐ Support

If you find **TriNaad** interesting or useful, consider starring the repository and exploring the project.

**TriNaad — Turning emotions into music. 🎵**
