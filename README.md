# Getting Started

## Prerequisites

- Node.js
- npm (you can use any package manager, in this repo we've used npm)
- npm account with access to Graphy's private packages

## Setup Instructions

### 1. Configure npm for Private Packages

To install Graphy's private packages, you'll need to authenticate with npm:

1. **Create an npm Access Token:**
   - Log in to your [npmjs.com](https://npmjs.com) account
   - Go to your account settings → Access Tokens
   - Create a new **Granular Access Token** with appropriate permissions
   - Copy the generated token

2. **Configure your project:**
   - In the root of your project, create a `.npmrc` file
   - Add the following configuration, replacing `######` with your actual token:

   ```
   @graphysdk:registry=https://registry.npmjs.org/
   registry.npmjs.org/:always-auth=true
   registry.npmjs.org/:_authToken=######
   ```

   > ⚠️ **Important**: Never commit your `.npmrc` file with tokens to version control. Add `.npmrc` to your `.gitignore` file.

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

### 4. You're Ready to Go! 🎉

The development server should now be running. Check your terminal output for the local URL (typically `http://localhost:3000` or similar).
