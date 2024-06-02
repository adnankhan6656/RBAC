const express=require("express");
const app=express();

app.use(express.json());
// middleware/permissionMiddleware.js
const db=require("./models/index.js");
const { where, Model } = require("sequelize");
const UserRoles=db.UserRoles;
const User=db.User;
const Role=db.Role;
const Permission=db.Permission;

const checkPermission =async (action, resource,req,res) => {
    try {
        // Get the user ID from the request object (assuming it's set during authentication)
        const userId =1;
       
  
        // Find the user along with their roles and associated permissions
        const user =await  User.findByPk(userId, {
          include: {
            model: Role,
            include: {
              model: Permission,
              where: { action, resource }
            }
          }
        });
res.status(200).json(user)
    //  console.log(user);
        // Check if the user has any roles with the required permissions
        // if (user && user.Roles.some(role => role.Permissions.length > 0)) {
        //   next(); // User has the required permissions, proceed to the next middleware or route handler
        // } else {
        //   res.status(403).send('Forbidden'); // User does not have the required permissions, send a 403 Forbidden response
        // }
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
};

app.get("/",(req,res)=>{
    checkPermission('write', 'user',req,res)

})


app.listen(8800,()=>{
    console.log("Server is runnning on Port 8800")
})