router.post("/signup", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      console.log("Received signup request:", { email, password }); // Log the incoming request
  
      // Check if user already exists
      const userExists = await User.findOne({ email });
      if (userExists) {
        console.log("User already exists"); // Log if user already exists
        return res.status(400).json({ message: "User already exists" });
      }
  
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log("Hashed password:", hashedPassword); // Log the hashed password
  
      // Create new user
      const newUser = new User({ email, password: hashedPassword });
      await newUser.save();
      console.log("User created successfully");
  
      res.status(201).json({ message: "User created successfully!" });
    } catch (error) {
      console.error("Error signing up:", error);
      res.status(500).json({ message: "Server error" });
    }
  });
  router.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      console.log("Received login request:", { email, password });
  
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        console.log("No user found with this email");
        return res.status(400).json({ message: "Invalid email or password" });
      }
  
      // Compare passwords
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        console.log("Password mismatch");
        return res.status(400).json({ message: "Invalid email or password" });
      }
  
      console.log("Login successful");
      res.status(200).json({ message: "Login successful", token: "jwt-token" });
    } catch (error) {
      console.error("Error logging in:", error);
      res.status(500).json({ message: "Server error" });
    }
  });
  