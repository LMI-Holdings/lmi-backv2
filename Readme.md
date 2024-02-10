# LMI Project: Bridging the Gap in Shipping, Delivery, and Logistics

## Overview

The LMI Project is a comprehensive platform designed to bridge the gap between users and the intricate processes involved in shipping, delivery, storage, and logistics. Whether it's sending goods across the country or storing items securely, LMI ensures a seamless experience for both businesses and individuals. This platform incorporates cutting-edge technology to provide tracking solutions, efficient storage management, and reliable delivery services.

## How to Start the App Locally

To run the LMI Project locally on your machine, follow these steps:

1. **Clone the Repository**: 
    ```bash
    git clone [https://github.com/LMI-Holdings/lmi-backend.git]
    ```

2. **Navigate to the Project Directory**:
    ```bash
    cd lmi-backend
    ```

3. **Install Dependencies**:
    ```bash
    npm install
    ```

4. **Set Environment Variables**: 
   Create a `.env` file in the root directory and add the following configurations:
    ```
    NODE_ENV=development
    PORT=8000
    OTP_SECRET=ABC123XYZ
    MAIL_USERNAME=exampleuser@gmail.com
    MAIL_PASSWORD=mysecretpassword
    MAIL_SERVICE=smtp.example.com
    MAIL_PORT=587
    JWT_SECRET=MY_JWT_SECRET_KEY
    ```

5. **Run the Application**:
    ```bash
    npm run dev
    ```

## How to Get to the API Endpoint Documentation

To explore the API endpoint documentation, follow these steps:

1. After starting the application locally, navigate to your web browser.
2. Enter the following URL to access the Swagger documentation:

[http://localhost:8000/api-docs](http://localhost:8000/api-docs)


This Swagger UI provides detailed documentation about the available API endpoints, request and response formats, and other essential information related to the LMI Project's functionalities.


For any inquiries or support related to the LMI Project, please contact our team at [contact-email@example.com](mailto:contact-email@example.com).

