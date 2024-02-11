Default route 
/ Index page

// Router Dishes // Some routes restriced to super user
// Browse of all dishes
GET /dishes

// Read singular dish
GET /dishes/:id

// Edit dishes /SU
POST /dishes/:id

// Add dish /SU
POST /dishes

// delete /SU
POST /dishes/:id/delete

\\ Router for Order_Items (Cart)
// Browse of all the items // View my cart
GET /items

// Get singular item
GET /items/:id

// Edit items // Only updating quantities
POST /items/:id

// Add item to order_orderitems(cart)
POST /items

// delete
POST /item/:id/delete

// User or Login routes
POST /login/:id // Log in to track orders, or if I am the super user

(Stretch) additional routes to support tracking users order information. 

// Orders
GET /orders

// Add new order to orders
POST /orders

// delete order
POST /orders/:id/delete

//edit
POST /orders/:id /SU









Routes
Restful routes
Browse GET /users
Read GET /users/:id
EDIT post /users/:id
Add post /users
Delete post /users/:id:delete
Resources plural / Actions singular 
MVP
