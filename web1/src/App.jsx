function App() {
  return (<div class="login-container">
    <h1>Login</h1>
    <form>
        <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" required/>
        </div>
        <div class="form-group">
            <label for="password">Password:</label>
            <div class="password-container">
                <input type="password" id="password" name="password" placeholder="Enter your password" required/>
                <button type="button" id="togglePassword" class="toggle-password">👁</button>
            </div>
        </div>
        <button type="submit" id="login-button">Login</button>
    </form>
</div>)
}

export default App
