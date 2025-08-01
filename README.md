🗣️ BaatPost - A Fun Twitter-Inspired Posting App

BaatPost is a Twitter clone with a desi (Indian) twist — built while learning through the Scrimba Frontend Developer Career Path. Users can post funny, relatable thoughts and interact with others. This project focuses on JavaScript, DOM manipulation, and responsive design.

🚀 Live Demo

🔗[ baatpost.netlify.app](https://baatpost.netlify.app/)
📁 Project Structure
BaatPost/
│
├── index.html            # Main HTML file
├── index.js              # Handles app logic & rendering
├── index.css             # Styling (responsive)
├── data.js               # Contains posts data
├── package.json          # (Optional, for npm tools)
│
├── images/               # Profile images and logo
│   └── tanishka.png
│   └── abhay.png
│   └── ...
│
└── README.md             # You're here!

⚙️ Features

📝 Create and view posts
❤️ Like and 🔁 repost functionality
💬 Replies and comments
🤖 Pre-filled sample users (Abhay, Tanishka, Rishabh, Nakul, Nyl)
📱 Responsive design for mobile & desktop

🛠️ Technologies Used

* HTML5
* CSS3 (Flexbox + basic responsiveness)
* JavaScript (DOM Manipulation)
* UUID via jspm.dev

🧹 Notes
Images must be stored inside the images/ folder or public/ depending on the build system
Avoid using file:/// protocol directly — always use a local server to support ES module imports (import { v4 as uuidv4 } from "https://jspm.dev/uuid")
On production (e.g. Netlify), make sure images are correctly placed under /public or root based on build tool

🙋‍♂️ Author

Built with ❤️ by Mohammad Nihal
feel free to fork and remix! 

Happy Coding!
