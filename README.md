# School Management API - Educase Assignment

A RESTful API for managing schools with geolocation-based features. This API allows you to add schools with their geographic coordinates and retrieve a list of schools sorted by distance from a given location.

## 🚀 Features

- **Add Schools**: Register new schools with name, address, and coordinates
- **List Schools**: Retrieve schools sorted by proximity to a specified location
- **Distance Calculation**: Uses Haversine formula for accurate geographic distance calculation
- **MySQL Database**: Persistent data storage with MySQL
- **RESTful Architecture**: Clean API design following REST principles
- **CORS Enabled**: Cross-origin requests supported
- **Vercel Deployment**: Ready for deployment on Vercel platform

## 📋 Prerequisites

- Node.js (v14 or higher)
- MySQL database
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/manish-gkv/EducaseIndia-Assignment.git
   cd EducaseIndia-Assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory with the following variables:
   ```env
   PORT=3000
   DB_HOST=your_mysql_host
   DB_USER=your_mysql_username
   DB_PASSWORD=your_mysql_password
   DB_NAME=your_database_name
   ```

4. **Set up MySQL database**
   Create a MySQL database and a table for schools:
   ```sql
   CREATE DATABASE your_database_name;
   USE your_database_name;
   
   CREATE TABLE schools (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       address TEXT NOT NULL,
       latitude DECIMAL(10, 8) NOT NULL,
       longitude DECIMAL(11, 8) NOT NULL,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

5. **Start the server**
   ```bash
   npm start
   ```

The server will start on `http://localhost:3000` (or the port specified in your environment variables).

## 📚 API Endpoints

### 1. Add School
**POST** `/api/addSchool`

Add a new school to the database.

**Request Body:**
```json
{
    "name": "Springfield Elementary",
    "address": "123 Main Street, Springfield",
    "latitude": 39.7817,
    "longitude": -89.6501
}
```

**Response:**
```json
{
    "success": true,
    "message": "School added successfully"
}
```

**Validation:**
- `name` and `address` are required fields
- `latitude` and `longitude` must be valid numbers

### 2. List Schools
**GET** `/api/listSchools?latitude={lat}&longitude={lng}`

Retrieve all schools sorted by distance from the provided coordinates.

**Query Parameters:**
- `latitude` (required): Your current latitude
- `longitude` (required): Your current longitude

**Example Request:**
```
GET /api/listSchools?latitude=40.7128&longitude=-74.0060
```

**Response:**
```json
{
    "success": true,
    "message": "Schools fetched successfully",
    "data": [
        {
            "id": 1,
            "name": "Springfield Elementary",
            "address": "123 Main Street, Springfield",
            "latitude": 39.7817,
            "longitude": -89.6501,
            "created_at": "2025-01-01T10:00:00.000Z"
        }
    ]
}
```

## 🏗️ Project Structure

```
├── config/
│   └── mysqldb.js          # MySQL database connection
├── controllers/
│   └── schoolControllers.js # Request handlers for school operations
├── repository/
│   ├── mySQLRepository.js   # Repository pattern implementation
│   └── mySQL/
│       ├── crudRepository.js    # Generic CRUD operations
│       └── schoolRepository.js  # School-specific repository
├── routes/
│   └── schoolRoutes.js     # API route definitions
├── services/
│   ├── getDistanceService.js    # Haversine distance calculation
│   └── schoolService.js    # Business logic for school operations
├── utils/
│   └── constant.js         # Environment variables and constants
├── server.js               # Express server setup
├── package.json           # Project dependencies
├── vercel.json            # Vercel deployment configuration
└── README.md              # Project documentation
```

## 🧮 Distance Calculation

The API uses the **Haversine formula** to calculate the great-circle distance between two points on Earth given their latitude and longitude coordinates. This provides accurate distance calculations for sorting schools by proximity.

## 🚀 Deployment

This project is configured for deployment on Vercel:

1. **Deploy to Vercel**
   ```bash
   vercel --prod
   ```

2. **Set environment variables** in your Vercel dashboard or using Vercel CLI:
   ```bash
   vercel env add DB_HOST
   vercel env add DB_USER
   vercel env add DB_PASSWORD
   vercel env add DB_NAME
   ```

## 🛡️ Error Handling

The API includes comprehensive error handling for:
- Invalid input validation
- Database connection errors
- Missing required fields
- Invalid coordinate formats

## 🧪 Testing

To test the API endpoints, you can use tools like Postman, curl, or any HTTP client:

**Example using curl:**
```bash
# Add a school
curl -X POST http://localhost:3000/api/addSchool \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test School",
    "address": "123 Test Street",
    "latitude": 40.7128,
    "longitude": -74.0060
  }'

# List schools
curl "http://localhost:3000/api/listSchools?latitude=40.7128&longitude=-74.0060"
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Manish** - [manish-gkv](https://github.com/manish-gkv)

## 📞 Support

If you have any questions or need help with setup, please feel free to open an issue in the repository.

