# **NxtWave Backend Assignment** 


## **Deployment Link:**
https://street-style-store-t1t7.onrender.com

## **Description**

Backend Assignment to implement CRUD operations, node and express.

## **Prerequisites**

Ensure you have the following dependencies installed:

- **Node.js** (v16 or higher)
- **npm or yarn** (package manager)

## **Installation**

Follow these steps to set up your development environment:

### **1. Clone the repository:**  

```bash
git clone https://github.com/VigneshNukala/street-style-store.git
cd street-style-store
```

### **2. Install dependencies:**

run npm install (or yarn install).

```bash
npm install  # or yarn install
```

### **3. Start the application:**

Navigate to the src directory and start the application.

```bash
cd src
node index.js
```

## **Evaluation using Postman**
Ensure you follow below steps:

- Download and install postman from a web browser
- Signup and Login with your account
- Check each and every endipoints mentioned in below

## **API Documentation**

### **Tasks Routes**

#### - **INSERT NEW Tasks :**

```
POST /tasks
```

- **Description :**  Creates and inserts a new task into the databse(here array).

- **Request Body :**
```
{
  "title" : "Xbox",
  "description" : "This is a microsoft gaming console"
}
```

- **Response :**
```
{
  "status": "success",
  "message": "Task added successfully",
  "newItem": {
    "id": 1,
    "title": "Xbox",
    "description": "This is a microsoft gaming console",
  }
}
```

#### - **RETRIVE ALL Tasks :**

can provide page and limit query parameters for pagination

```
GET /tasks/
```

- **Description :**  Fetches all Tasks from the database(array).

- **Response :**
```
{
  "status": "success",
  "message": "Fetched all Tasks",
  "items": [
    {
      "id": 1,
      "title": "Xbox",
      "description": "This is a gaming console of microsoft",
    },
    {
      "id": 2,
      "title": "PS5",
      "description": "This is a gaming console of sony",
    },
    ...
  ]
}
```

#### - **RETRIVE A SPECIFIC Task :**

```
GET /task/:id
```

- **Description :**  retrieve a specific Task by its ID from the database(array).

- **Response :**
```
{
  "status": "success",
  "message": "Task fetched successfully",
  "item": {
    "id": 1,
    "title": "Xbox",
    "description": "This is a microsoft gaming console",
  }
}
```

#### - **UPDATES A SPECIFIC Task :**

```
PUT /tasks/:id
```

- **Description :**  updates a specific Task by its ID.

- **Request Body :**
```
{
  "name": "PS5",
  "description": "This is video game console of Sony"
}
```

- **Response :**
```
{
  id : 2,
  name : PS5,
  description : "This is video game console of Sony",
}
```

#### - **DELETE A SPECIFIC Task :**

```
DELETE /tasks/:id
```

- **Description :**  delete a specific Task by its ID.

- **Response :**
```
{
  "status": "success",
  "message": "Item deleted successfully",
  "deletedItem : {
    id : 2,
    name : PS5,
    description : "This is video game console of Sony",
  }
}
```

## **Assumptions & Design Decisions**

- **Database :**   An array

- **Error Handling :**   Standardized error responses for better API consistency.
