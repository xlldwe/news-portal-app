# News Portal App

This project is a news portal web application built using React and SCSS. It fetches data from [The Guardian API](https://open-platform.theguardian.com/documentation/) to display the latest news articles.

# Features

- View the latest news articles from The Guardian.
- Filter articles by keyword.
- Read full articles by clicking on the news card.

# Technologies Used

- React
- SCSS
- Axios for API requests

# Getting Started

To get a local copy of this project up and running, follow these simple steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/xlldwe/news-portal-app
    ```

2. **Navigate to the project directory:**

    ```bash
    cd news-portal-app
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Set up The Guardian API key:**

    - Obtain an API key from [The Guardian API](https://open-platform.theguardian.com/access/).
    - Create a new file named `key.js` in the `src` directory.
    - In `key.js`, add the following code:

        ```javascript
        export const API_KEY = 'your-api-key-here';
        ```

    - Replace `'your-api-key-here'` with your actual API key obtained from The Guardian API.
5. **Run the application:**

    ```bash
    npm run start
    ```

6. **Open your browser:**

    Visit `http://localhost:3000` to view the application.

# Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

# License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).