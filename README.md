# Shopping Cart - React E-commerce App

A modern e-commerce shopping cart application built with React, TypeScript, and Vite. This project demonstrates advanced React concepts including Context API for state management and CSS Modules for component styling.

🌐 **Live Demo**: [shopping-cart.vercel.app](https://shopping-cart.vercel.app)

## 📋 Features

- **Product Catalog**: Browse products fetched from Fake Store API
- **Shopping Cart**: Add/remove items with persistent cart state
- **Responsive Design**: Mobile-friendly interface using CSS Modules
- **Type Safety**: Full TypeScript implementation
- **Modern Routing**: React Router for navigation between pages

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **React Router** for client-side routing
- **CSS Modules** for scoped styling
- **Context API** for global state management
- **Fake Store API** for product data

## 🎯 Learning Objectives

This project was part of The Odin Project curriculum and taught me several key concepts:

### Context API
- **Global State Management**: Learned how to use React's Context API to share state across components without prop drilling
- **Provider Pattern**: Implemented a DataProvider component to wrap the entire application and provide shopping cart state
- **useContext Hook**: Used the useContext hook to consume context data in child components
- **State Updates**: Managed complex state updates for adding/removing items from the cart

### CSS Modules
- **Scoped Styling**: Learned how CSS Modules prevent style conflicts by automatically scoping CSS classes
- **Component-Level Styles**: Created dedicated style files for each component (e.g., `Card.module.css`, `Navbar.module.css`)
- **Dynamic Class Names**: Used JavaScript to conditionally apply CSS classes based on component state
- **Maintainable CSS**: Organized styles in a way that's easy to maintain and doesn't leak between components

### Additional Skills
- **API Integration**: Fetched data from external APIs and handled async operations
- **TypeScript**: Improved code quality with static typing and better developer experience
- **React Router**: Implemented client-side routing for a single-page application
- **Component Architecture**: Designed reusable components with clear separation of concerns

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd shopping-cart
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Card.tsx
│   ├── Navbar.tsx
│   └── *.module.css    # Component-specific styles
├── pages/              # Route components
│   ├── Home.tsx
│   ├── Store.tsx
│   └── Cart.tsx
├── contexts/           # Context providers
│   └── DataProvider.tsx
├── styles/             # Global and page-specific styles
└── data.tsx           # API utilities
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 📚 What I Learned

### Context API Deep Dive
The Context API was crucial for this project because:
- **Avoided Prop Drilling**: Instead of passing cart state through multiple component layers, I used context to make it available anywhere in the component tree
- **Centralized State**: All cart-related state lives in one place, making it easier to manage and debug
- **Provider Pattern**: Created a clean separation between state logic and UI components

### CSS Modules Benefits
CSS Modules solved several styling challenges:
- **No Global Conflicts**: Each component's styles are automatically scoped, preventing CSS conflicts
- **Better Organization**: Styles are co-located with components, making the codebase more maintainable
- **Type Safety**: When using with TypeScript, CSS Modules provide autocomplete for class names

## 🤝 Contributing

This is a learning project, but feel free to open issues or submit pull requests if you find any bugs or have suggestions for improvements.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
