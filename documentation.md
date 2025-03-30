# Environment Variables Configuration

This document provides a comprehensive list of all the environment variables required for the project.

## **Server Configuration**

- **`PORT`** (Required) - The port on which the server runs.

  - Default: `3000`

- **`DB_URL`** (Required) - The connection string for the MongoDB database.
  - Example: `mongodb://localhost:27017`

## **Authentication & Security**

- **`JWT_SECRET`** (Required) - Secret key for signing JSON Web Tokens.

  - Example: `SECRET`

- **`SESSION_SECRET`** (Required) - Secret key for session handling.

## **Cloudinary Configuration**

- **`CLOUDINARY_API_KEY`** (Required) - API key for Cloudinary image storage.
- **`CLOUDINARY_API_SECRET`** (Required) - API secret for Cloudinary.
- **`CLOUDINARY_CLOUD_NAME`** (Required) - Cloud name associated with your Cloudinary account.

## **Payment Gateway (Flutterwave) Configuration**

- **`FLW_PUBLIC_KEY`** (Required) - Public key for Flutterwave transactions.
- **`FLW_SECRET_KEY`** (Required) - Secret key for Flutterwave transactions.
- **`FLW_ENCRYPTION_KEY`** (Required) - Encryption key for Flutterwave transactions.
- **`FLW_REDIRECT_URL`** (Required) - URL where Flutterwave should redirect after successful payment.
  - Example: `https://yourdomain.com/home`

## **Admin Credentials**

- **`ADMIN_EMAIL`** (Required) - Email address for the admin user.

  - Example: `admin@example.com`

- **`ADMIN_PASSWORD`** (Required) - Password for the admin user.
  - Example: `your-secure-password`

## **Client Configuration**

- **`CLIENT_URL`** (Required) - The frontend application URL.
  - Example: `https://yourfrontend.org`

### **Setting Up the `.env` File**

Copy and paste the following template into your `.env` file and replace the placeholders with actual values:

```env
PORT=3000
DB_URL=mongodb://localhost:27017
JWT_SECRET=your-secret-key
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
CLOUDINARY_CLOUD_NAME=your-cloud-name
FLW_PUBLIC_KEY=your-flutterwave-public-key
FLW_SECRET_KEY=your-flutterwave-secret-key
FLW_ENCRYPTION_KEY=your-flutterwave-encryption-key
FLW_REDIRECT_URL=https://yourdomain.com/home
SESSION_SECRET=your-session-secret
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your-secure-password
CLIENT_URL=https://yourfrontend.com
```

## **Publication section Admin Page**

- **`publication files`**: upload documents to a github repository and copy the file raw url (this will be the
  upblication url that will be used to download the documents)

  **`To get the document raw url from git repository you can use any of the approach`**

  - 1.click on the file in the respository file is stored click on the three horizontal dots at the extreme right corner of the repository and select copy permalink you should have a link like below
    `https://github.com/horiyorrmi72/wsh/blob/4c570b145f3602b308412bf163048bb2492ee39f/Women%20Safe%20House%20Policy%20(2).pdf`

  replace the blob in the url copied and replace with raw
  ` https://github.com/horiyorrmi72/wsh/raw/4c570b145f3602b308412bf163048bb2492ee39f/Women%20Safe%20House%20Policy%20(2).pdf`

  - option 2. if you have github copilot enabled on your github account you can prompt the copilot to provide you with the `raw user content link of the file` you should have a link like this: `https://raw.githubusercontent.com/horiyorrmi72/wsh/main/Women%20Safe%20House%20Policy%20(2).pdf`.

  this will be the publication url

## **Frontend Configuration**

- **`environments/environment.ts`** (Required) - Update the Server base url (apiBaseUrl). e.g `'https://wsh-admin.onrender.com/api'`


## **Flutterwave**
_ you can enable this on the dashboard to receive webhook events and send customized purchase data to the site owner.
- webhook uri = `baseUrl/api/payments/webhook
- webhook hash secret = `FLUTTERWAVE_WEBHOOK_SECRET`