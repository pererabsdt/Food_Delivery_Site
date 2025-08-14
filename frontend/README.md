# 🍕 Tomato - Food Delivery Website

A full-stack food delivery application built with the MERN stack, featuring a customer-facing frontend, admin panel, and robust backend API with payment integration.

## 🌟 Features

### Customer Features
- **User Authentication**: Secure registration and login system
- **Food Browsing**: Browse food items by categories (Salad, Rolls, Desserts, Sandwich, Cake, Pure Veg, Pasta, Noodles)
- **Shopping Cart**: Add/remove items with quantity management
- **Order Placement**: Complete checkout process with delivery information
- **Payment Integration**: Secure payments via Stripe
- **Order Tracking**: View order history and track current orders
- **Responsive Design**: Mobile-friendly interface

### Admin Features
- **Food Management**: Add, list, and remove food items
- **Order Management**: View and update order status
- **Image Upload**: Food item image management
- **Real-time Updates**: Dynamic order status management

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern UI library
- **React Router DOM** - Client-side routing
- **Axios** - HTTP requests
- **CSS3** - Styling with responsive design
- **Vite** - Fast build tool and development server

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **Bcrypt** - Password hashing
- **Multer** - File upload handling
- **Stripe** - Payment processing
- **CORS** - Cross-origin resource sharing

### Admin Panel
- **React 19** - Admin interface
- **React Toastify** - Notifications
- **Axios** - API communication

## 📁 Project Structure

```
Food_Delivery_Site/
├── frontend/          # Customer-facing React app
├── backend/           # Express.js API server
└── admin/            # Admin panel React app
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB database
- Stripe account for payment processing

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pererabsdt/Food_Delivery_Site.git
   cd Food_Delivery_Site
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```
   
   Create a `.env` file:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```
   
   Start the server:
   ```bash
   npm run server
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. **Admin Panel Setup**
   ```bash
   cd admin
   npm install
   npm run dev
   ```


## 💳 Payment Integration

The application uses Stripe for secure payment processing:
- Checkout sessions for secure payment handling
- Automatic order verification after payment
- Support for EUR currency with delivery charges

## 🎨 Key Components

### Frontend Components
- **Navbar**: Navigation with cart indicator and user authentication
- **FoodDisplay**: Grid layout of available food items
- **FoodItem**: Individual food item with add/remove functionality
- **Cart**: Shopping cart with quantity management
- **PlaceOrder**: Checkout form with delivery information
- **MyOrders**: Order history and tracking

### Backend Models
- **User Model**: User authentication and cart data
- **Food Model**: Food item information and categorization
- **Order Model**: Order details, status, and payment information

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Input validation and sanitization
- Protected API routes with middleware
- CORS configuration for secure cross-origin requests

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first design approach
- Flexible grid layouts
- Optimized images and typography
- Touch-friendly interfaces


## 🙏 Acknowledgments

- React team for the amazing framework
- Stripe for payment processing
- MongoDB for the database solution
- All contributors and testers

---

⭐ If you found this project helpful, please give it a star!