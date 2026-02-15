# 💅 Golden Ridgewell - Beauty Booking System

> **Golden, Grey & Black Elegance** - A modern React beauty booking application with Firebase Authentication

![Version](https://img.shields.io/badge/version-1.0.0-gold)
![License](https://img.shields.io/badge/license-MIT-black)

## 🌟 Overview

**Golden Ridgewell** is a modern, elegant beauty booking system built with React, TypeScript, and Tailwind CSS. The application features a public booking interface and a secure, hidden admin dashboard for managing appointments, deployed on Vercel.

### ✨ Key Features

- 🎨 **Golden Theme** - Golden, Grey & Black Elegance design palette
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🔒 **Secure Admin Panel** - Hidden routes with Firebase Authentication
- ⚡ **Real-time Updates** - Dynamic booking management
- 🎭 **Smooth Animations** - CSS-powered transitions
- 🚀 **Vercel Deployed** - Optimized for modern web hosting

## 📁 Project Structure

```
goldenridgewellspa/
├── src/                    # React + TypeScript UI
│   ├── components/        # React components
│   ├── pages/             # Page components
│   ├── config/            # Firebase client config
│   ├── context/           # React contexts
│   ├── services/          # API services
│   └── lib/               # Utilities
├── public/                # Static assets
│   └── images/            # Image assets
├── [config files]         # Vite, Tailwind, TypeScript
└── [documentation]/       # Setup guides & docs
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Firebase account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Brandon05-dev/Goldenridgewellspa.git
   cd Goldenridgewellspa
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your Firebase configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Access the Application**
   - Frontend: http://localhost:8080
   - Admin Login: http://localhost:8080/admin-login-glampro

## 📚 Documentation

- **[README_GLAMPRO.md](./README_GLAMPRO.md)** - Complete setup guide
- **[SETUP_CHECKLIST.md](./SETUP_CHECKLIST.md)** - Step-by-step checklist
- **[GLAMONGO_THEME.md](./GLAMONGO_THEME.md)** - Theme documentation
- **[Images README](./public/images/README.md)** - Image assets guide

## 🎨 Theme

**Golden Ridgewell - Golden, Grey & Black Elegance**

| Color | Hex | Usage |
|-------|-----|-------|
| Golden | `#D4AF37` | Primary accent |
| Grey | `#808080` | Secondary accent |
| Black | `#000000` | Text & contrast |
| White | `#FFFFFF` | Background |

**Fonts:**
- Headings: Playfair Display
- Body: Poppins

## 🔐 Admin Access

The admin dashboard is intentionally hidden and not linked in the navigation:

- **Login URL**: `/admin-login-glampro`
- **Dashboard URL**: `/admin-dashboard-4921` (protected)

> 💡 **Tip**: Bookmark these URLs for easy access

## 🛠️ Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Firebase SDK
- Axios
- Shadcn/ui

### Deployment
- Vercel
- Firebase Hosting (optional)

## 📦 Features

### Public Features
- ✅ Book appointments without registration
- ✅ Choose from multiple service types
- ✅ Select date and time
- ✅ Email confirmations

### Admin Features
- ✅ View all bookings
- ✅ Filter & search bookings
- ✅ Update booking status
- ✅ Delete bookings
- ✅ View statistics
- ✅ Automatic reminders

## 🧪 Development

Start the development server:

```bash
npm run dev
```

Access at: http://localhost:8080

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Brandon**
- GitHub: [@Brandon05-dev](https://github.com/Brandon05-dev)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Built with ✨ for elegant beauty management**
