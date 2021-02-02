# Install dotenv 
## With npm
```
    npm install dotenv
```

## With yarn
```
    yarn add dotenv
```

# Create src/index.js

# Require dotenv and config that
```js
    require('dotenv').config()
```

# Create .env in the root directory and insert the text bellow in that

```
    GMAIL_EMAIL="davilucasdlcreator@gmail.com"
    GMAIL_PASS="your_password_in_gmail"
```

# Take the credentials/environment variables in src/index.js
```js
    const { GMAIL_EMAIL,GMAIL_PASS } = process.env; // Destructuring
    console.log('GMAIL_EMAIL:',GMAIL_EMAIL);
    console.log('GMAIL_PASS:',GMAIL_PASS);
```

# Run the code
```
    node src/index.js
```
