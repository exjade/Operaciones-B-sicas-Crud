# Operaciones-Basicas-Crud

Node Packet Management
npm install 


Install Tailwind via npm

npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9

https://tailwindcss.com/docs/guides/create-react-app


Install and configure CRACO

npm install @craco/craco

  
Next, create a "craco.config.js" at the root of our project.
  
  // craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}

{
    // ...
    "scripts": {
     "start": "react-scripts start",
     "build": "react-scripts build",
     "test": "react-scripts test",
     "start": "craco start",
     "build": "craco build",
     "test": "craco test",
      "eject": "react-scripts eject"
    },
  }
  
  Next, generate your tailwind.config.js file:
  
  npx tailwindcss-cli@latest init
  
 In your tailwind.config.js file, configure the purge option with the paths to all of your components so Tailwind can tree-shake unused styles in production builds:
  
   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   

Include Tailwind in your CSS ./src/index.css

/* ./src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

Finally, ensure your CSS file is being imported in your ./src/index.js file:

  // src/index.js
 import './index.css';
  // ...
