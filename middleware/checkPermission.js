// middleware/permissionMiddleware.js
const db=require("../models/index.js");
const User=db.User;
const Role=db.Role;
const Permisssion=db.Permisssion;
const checkPermission = (action, resource) => {
  return async (req, res, next) => {
    try {
      // Get the user ID from the request object (assuming it's set during authentication)
      const userId = req.user.id;

      // Find the user along with their roles and associated permissions
      const user = await User.findByPk(userId, {
        include: {
          model: Role,
          include: {
            model: Permisssion,
            where: { action, resource }
          }
        }
      });

      // Check if the user has any roles with the required permissions
      if (user && user.Roles.some(role => role.Permissions.length > 0)) {
        next(); // User has the required permissions, proceed to the next middleware or route handler
      } else {
        res.status(403).send('Forbidden'); // User does not have the required permissions, send a 403 Forbidden response
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
};

module.exports = checkPermission;
