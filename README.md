## Setup
1. Use this template repository to create your own repo, and clone the code on your machine.
1. Replace `HouseRules` with your project name in the following files:
    1.  `Program.cs`
    1.  `HouseRulesDbContext.cs`
    1.  `UserProfile.cs`
    1.  `AuthController.cs`
    1.  `NavBar.js` (in the `client` folder)

1. Consider making git commits during the installation 
1. In the project directory, run `dotnet restore` to install dependencies.
1. ( The next three steps are about user secrets ) Run this: 
    ``` bash
    dotnet user-secrets init
    ```
1. Run this (replace `HouseRules` with your project name; replace `<your password>` with your postgres password) to save the connection string to user secrets:
    ``` bash
    dotnet user-secrets set HouseRulesDbConnectionString "Host=localhost;Port=5432;Username=postgres;Password=<your password>;Database=HouseRules"
    ```
1. Run this to save the app's admin user password in user secrets:
    ``` bash
    dotnet user-secrets set AdminPassword password
    ```
1. Spend some time seeding your data: Use ERD to create classes under Models folder. Use the `OnModelCreating` method in the `HouseRulesDbContext` class ( or `YourProjectNameDbContext` class ) to add data to the database when it is created. There should already be code for creating an Admin role, an admin `IdentityUser`, and giving that `IdentityUser` the role of `Admin` with a row in `UserRoles`. Add more initial data based on the project's need.
1. Create the database migration:
    ``` bash 
    dotnet ef migrations add InitialCreate
    ```
1. Create the database:
    ``` bash
    dotnet ef database update
    ```
1. In the `client` directory inside the project directory, run `npm install`
1. (might have already been there) In `package.json` add this under the first line:
    ```json
    "proxy": "https://localhost:5001",
    ```
1. Navigate back to the parent directory and start the C# debugger, or run `dotnet watch run`
1. In the client folder, run `npm start`. 

## Logging In
The React client should show the login view when it starts. If so, conside these: 
1. Write GitHub Issues
1. Create a project related to your repo and add Issues to it
1. Push your current code to GitHub
1. Create and switch into a new branch like `feature/5/feature-name` and start building