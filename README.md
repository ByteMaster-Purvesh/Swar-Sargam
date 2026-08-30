# 🎵 Swar-Sandhan (IMAX Music AI)

## AI-Powered Emotion-Aware Music Recommendation & Facial Analysis Platform

**Swar-Sandhan** (IMAX Music AI) is an advanced AI-powered web platform that performs real-time facial expression analysis using Google MediaPipe and TensorFlow.js, mapping emotional states directly to dynamic music recommendations, and persisting scan telemetry to MongoDB.

Built with **Google MediaPipe, TensorFlow.js, MERN Stack (MongoDB, Express, React, Node.js), and Redis Cloud**, the platform delivers end-to-end user authentication, mood-aware audio streaming, and database persistence.

---

## ✨ Key Features

* 🎭 **Real-Time Emotion Scanning** — Analyze facial mesh landmarks (40+ blendshape score vectors) in real-time using Google MediaPipe Vision tasks & TensorFlow.js.
* 💾 **MongoDB Facial Telemetry Persistence** — Automatically save facial scan records, confidence scores, and emotion classifications to the MongoDB database via backend REST APIs.
* 🎵 **Mood-Curated Playlists** — Dynamically serve customized music playlists based on emotional states (Happy, Sad, Nature, Energetic).
* 🔐 **JWT & HTTP-Only Cookie Authentication** — Secure authorization workflow with encrypted password hashing and HTTP-only cookie management.
* ⚡ **Redis Token Blacklisting** — Instant session invalidation on logout powered by `ioredis` and Redis Cloud.
* 👤 **Dynamic Profile & Session Header** — Interactive header with logged-in user profile dropdown, account info, and quick logout.
* 📱 **Adaptive Desktop & Mobile UI** — 2-column horizontal showcase card on desktop and single-column vertical card layout on mobile viewports (<768px).
* 🎨 **IMAX Glassmorphism Aesthetic** — High-end dark theme featuring Framer Motion micro-animations, Lucide React icons, dark autofill inputs, and SVG audio visualizers.

---

## 🧠 Supported Emotions

| Emotion      | Description / Music Recommendation          |
| ------------ | ------------------------------------------- |
| 😊 Happy     | Sunburst euphoria & upbeat electronic beats |
| 😢 Sad       | Soft piano rain & soothing acoustic melodies|
| 🌿 Nature    | Forest canopy & organic ambient soundscapes |
| ⚡ Energetic | High-BPM HIIT session & synthwave surge     |

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
        │ Emotion Analysis │      │ & Curation Engine│
        └────────┬─────────┘      └────────┬─────────┘
                 │                         │
                 └────────────┬────────────┘
                              ▼
                    ┌─────────────────────┐
                    │ Node.js + Express   │
                    │      Backend        │
                    └──────────┬──────────┘
                               │
              ┌────────────────┴────────────────┐
              ▼                                 ▼
       ┌─────────────┐                   ┌─────────────┐
       │  MongoDB    │                   │    Redis    │
       │   Atlas     │                   │    Cloud    │
       └─────────────┘                   └─────────────┘
```

---

## ⚡ Technology Stack

### Frontend
* **React 19** & **Vite 8**
* **React Router DOM 7**
* **Framer Motion 13** — Micro-interactions & animations
* **Lucide React** — Icon library
* **React Webcam** — Web camera stream capture
* **Axios** — API communication with CORS credentials support

### Backend
* **Node.js** & **Express 5**
* **JSON Web Tokens (JWT)** & **Cookie-Parser**
* **CORS Middleware** — Configured for credentialed cross-origin requests (`withCredentials: true`)
* **Bcryptjs** — Password hashing
* **Mongoose 9** — MongoDB ODM

### Database & Caching
* **MongoDB Atlas** — User accounts and facial scan expression history
* **Redis Cloud (ioredis)** — High-performance JWT token blacklisting

### AI / Computer Vision
* **Google MediaPipe Vision** (`@mediapipe/tasks-vision`) — Face landmarker & blendshapes model

---

## 📁 Project Structure

```text
Swar-Sandhan/
│
├── Frontend/
│   ├── src/
│   │   ├── assets/              # Banners & hero assets
│   │   ├── features/            # Authentication & Emotion scanner components
│   │   │   ├── auth/
│   │   │   │   ├── context/
│   │   │   │   │   └── auth.Context.jsx    # AuthProvider & checkAuth state
│   │   │   │   ├── hook/
│   │   │   │   │   └── useAuthHook.js      # Auth custom hook
│   │   │   │   ├── pages/
│   │   │   │   │   ├── LoginPage.jsx       # Adaptive responsive Login page
│   │   │   │   │   └── RegistrationPage.jsx# Adaptive responsive Register page
│   │   │   │   ├── Protected/
│   │   │   │   │   └── AuthProtected.jsx   # Route guard & loading screen
│   │   │   │   └── service/
│   │   │   │       └── authAPI.service.js  # Axios REST API services
│   │   │   ├── expression/
│   │   │   │   └── pages/
│   │   │   │       └── FaceScannerModal.jsx # MediaPipe AI camera scanner modal
│   │   │   ├── routes/
│   │   │   │   └── Route.jsx               # Application routes definition
│   │   │   └── CustomCursor.jsx
│   │   ├── App.jsx              # Main Dashboard, audio visualizer & player
│   │   ├── App.css
│   │   ├── index.css            # Global dark glassmorphic styling system
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── Backend/
│   ├── config/                  # Database & Redis configurations
│   │   ├── cache.Config.js
│   │   └── dataBase.Config.js
│   ├── controller/              # Auth & Expression business logic controllers
│   │   └── auth.controller.js
│   ├── middleware/              # JWT & Blacklist protection middleware
│   │   └── auth.middleware.js
│   ├── module/                  # Mongoose models
│   │   ├── audio.module.js
│   │   ├── blackListing.module.js
│   │   ├── expression.module.js  # Expression scan schema
│   │   └── user.module.js
│   ├── routes/                  # REST API endpoints definition
│   │   └── auth.routes.js
│   ├── src/
│   │   └── app.js               # Express application initialization & CORS config
│   ├── server.js                # Entry point
│   └── package.json
│
└── README.md
```

---

## 🔐 API Endpoints & Security

### Authentication & Expression Endpoints (`/api/auth`)

| Method | Endpoint | Description | Auth Required |
| ------ | -------- | ----------- | ------------- |
| `POST` | `/api/auth/register` | Register a new user & set JWT cookie | No |
| `POST` | `/api/auth/login` | Authenticate user & set JWT cookie | No |
| `GET` | `/api/auth/get-me` | Fetch current authenticated user details | Yes (`Cookie`) |
| `POST` | `/api/auth/logout` | Logout user & blacklist JWT token in Redis | Yes (`Cookie`) |
| `POST` | `/api/auth/expression` | Save facial scan emotion telemetry to MongoDB | Yes (`Cookie`) |
| `GET` | `/api/auth/expressions` | Retrieve user facial expression scan history | Yes (`Cookie`) |

---

## 🚀 Local Development Setup

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
PORT=8080
DATABASE_URI=your_mongodb_atlas_connection_string
DATABASE_NAME=Day-25
JWT_SECRET_TOKEN=your_jwt_secret_key

REDIS_HOST=your_redis_host
REDIS_PORT=your_redis_port
REDIS_PASSWORD=your_redis_password
```

Start the backend development server:

```bash
npm run dev
```

### 3. Frontend Setup

In a new terminal window:

```bash
cd Frontend
npm install
npm run dev
```

Open your browser at:

```text
http://localhost:5173
```

---

## 📈 Engineering Highlights

* 🤖 **On-Device Computer Vision**: Real-time 40+ facial mesh landmark classification powered by Google MediaPipe.
* 💾 **MongoDB Telemetry Persistence**: Face scan results dynamically stored in MongoDB with timestamp and confidence metrics.
* ⚛️ **Modern React Architecture**: Context API, custom auth hooks, route guards, and Framer Motion UI transitions.
* 🛡️ **Cross-Origin Security & Token Control**: CORS configured with `credentials: true` and Redis-backed session token revocation.
* 📱 **Adaptive UI**: Responsive layouts tailored for desktop (horizontal landscape 2-column) and mobile viewports (vertical single-column card).

---

## 👨‍💻 Author

### Purvesh Somwanshi

Full Stack Developer focused on building scalable, AI-powered web applications.

* **GitHub:** [ByteMaster-Purvesh](https://github.com/ByteMaster-Purvesh)

---

## ⭐ Support

If you find **Swar-Sandhan** interesting or useful, consider starring the repository and exploring the project.

**Swar-Sandhan — Turning emotions into music. 🎵**
