# JavaScript Debounce

This project demonstrates the debounce technique in JavaScript, which ensures that a function is not called too frequently. It can be useful in scenarios like resizing windows or handling input events.

## Getting Started

Follow the instructions below to set up and run the project on your local machine.

### Prerequisites

Ensure you have the following software installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- npm (Node Package Manager, comes with Node.js)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Jordinky/javascript-debounce.git
    cd javascript-debounce
    ```

2. **Install the dependencies:**

    ```bash
    npm install
    ```

### Running the Project

1. **Start the development server:**

    ```bash
    npm start
    ```

    This will start a local server and you can view the project in your browser at `http://localhost:3000`.

### Testing the API

1. **Run the tests:**

    ```bash
    npm test
    ```

    This command will execute the test suite to ensure the debounce functionality is working as expected.

2. **Manual Testing:**

    - Open `index.html` in your browser.
    - Type quickly in the input field.
    - Observe that the event handler does not fire with every keystroke but waits until typing has paused for a set amount of time.

### Project Structure

- `src/`: Contains the source code.
- `index.ts`: The main TypeScript file demonstrating the debounce function.
- `frontend/`: Contains the front-end code to demonstrate the debounce in action.
- `tests/`: Contains the test cases for the debounce function.

### Explanation

The debounce function ensures that a particular function is not executed too frequently. In this project, it is demonstrated by limiting the number of times an input event handler is called as the user types.

### Example Usage

To see the debounce function in action:

1. Open `index.html` in your browser.
2. Type quickly in the input field.
3. Observe that the event handler does not fire with every keystroke but waits until typing has paused for a set amount of time.

### Contact

If you have any questions, feel free to contact me at [jordinky@example.com](mailto:jordinky@example.com).

---

Feel free to reach out if you have any questions or need further assistance!
