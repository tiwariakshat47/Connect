# Connect

**Connect** is a simple app designed to help UCSC students connect with others in their classes.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- Expo CLI
- Node.js

## Installation

1. **Clone the project:** ```git clone <repository_url>```
2. **Navigate to the project directory:** ```cd ConnectApp```
3. **Set up your IP address:**

Create a `secrets.js` file inside the `components` folder and add the following code:

```javascript
// components/secrets.js

const localIp = 'YOUR_IP_ADDRESS_HERE';
export default localIp;

// Replace 'YOUR_IP_ADDRESS_HERE' with your actual IP address.
```
4. Install dependencies:
npm install


5. Run the backend:

Start the backend server (assuming it's a Python script):

```bash
python backend/webscraper.py
```

Navigate into the backend folder  ```cd backend```

Run the folder:
```
npm start
```
Open a new terminal and navigate back to project directory: ```cd connectApp```

Start the frontend:
```
npm start
```
This will start the Expo development server.

## Contributing
Contributions are welcome. Feel free to fork the repository and submit pull requests.

## License
This project is licensed under the MIT License.
