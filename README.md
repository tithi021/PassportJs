# PassportJs

# What we’ll be building:

We will build an application that will have:

    # Local account logins and signups (using passport-local)
    # Facebook logins and registration (using passport-facebook)
    # Twitter logins and registration (using passport-twitter)
    # Google+ logins and registration (using oauth with passport-google-oauth)
    # Require login for certain routes/sections of your application
    # Creating a password hash for local accounts (using bcrypt-nodejs)
    # Displaying error messages (using flash with connect-flash. required since express 3.x)
    # Linking all social accounts under one user account
    # Allowing a user to unlink a specific social account


# Application Structure

  	- app
    ------ models
    ---------- user.js  <!-- our user model -->
    ------ routes.js    <!-- all the routes for our application -->
    - config
    ------ auth.js      <!-- will hold all our client secret keys (facebook, twitter, google) -->
    ------ database.js  <!-- will hold our database connection settings -->
    ------ passport.js  <!-- configuring the strategies for passport -->
    - views
    ------ index.ejs    <!-- show our home page with login links -->
    ------ login.ejs    <!-- show our login form -->
    ------ signup.ejs   <!-- show our signup form -->
    ------ profile.ejs  <!-- after a user logs in, they will see their profile -->
    - package.json      <!-- handle our npm packages -->
    - server.js         <!-- setup our application -->
