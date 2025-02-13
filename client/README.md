/service-booking-client
│── /public # Static assets like images, favicon, etc.
│── /src # Main source folder
│ │── /assets # Images, fonts, icons, etc.
│ │── /ui # Reusable UI components (buttons, cards, etc.)
│ │── /pages # Page-level components
│ │ │── HomePage.jsx # Homepage component
│ │ │── Services.jsx # Services page
│ │ │── Contact.jsx # Contact page
│ │ │── Booking.jsx # Booking form page
│ │ └── Dashboard.jsx # Admin/user dashboard
│ │── /components # components (e.g., Navbar, Footer)
│ │── /context # React Context for global state management
│ │── /hooks # Custom React hooks
│ │── /utils # Helper functions (e.g., API calls, formatters)
│ │── /styles # Global styles (e.g., Tailwind config, custom CSS)
│ │── /routes # App routing configuration
│ │── App.js # Main app component
│ │── main.jsx # Entry point for React (Vite)
│── /node_modules # Dependencies
│── .gitignore # Files to ignore in Git
│── package.json # Project dependencies and scripts
│── tailwind.config.js # Tailwind CSS configuration
│── postcss.config.js # PostCSS config for Tailwind
│── vite.config.js # Vite config for React
└── README.md # Project documentation

client/
│── public/
│── src/
│ ├── assets/ # Images, icons, logos
│ ├── components/ # Reusable UI components
│ │ ├── Navbar.jsx
│ │ ├── Footer.jsx
│ ├── pages/ # Main pages
│ │ ├── Homepage.jsx
│ │ ├── Services.jsx
│ │ ├── Contact.jsx
│ ├── routes/ # React Router setup
│ │ ├── AppRoutes.jsx
│ ├── styles/ # Global styles
│ │ ├── index.css
│ ├── App.jsx # Main app component
│ ├── main.jsx # React entry point
├── package.json
├── tailwind.config.js
├── postcss.config.js
