
## Day 02 of Backend Tour
# Todo API Controllers Documentation

## `updateTodo`

**Description:** Update a todo item by its ID.

**Endpoint:** `/todos/:id`

**Method:** `PUT`

**Request Body:**
- `title`: String (optional) - Updated title of the todo item.
- `description`: String (optional) - Updated description of the todo item.

**Response:**
- `success`: Boolean - Indicates whether the request was successful.
- `data`: Object - Updated todo item.
- `message`: String - Success message.

## `getTodo`

**Description:** Retrieve all todo items.

**Endpoint:** `/todos`

**Method:** `GET`

**Response:**
- `success`: Boolean - Indicates whether the request was successful.
- `data`: Array - Array of all todo items.
- `message`: String - Success message.

## `getTodoById`

**Description:** Retrieve a todo item by its ID.

**Endpoint:** `/todos/:id`

**Method:** `GET`

**Response:**
- `success`: Boolean - Indicates whether the request was successful.
- `data`: Object - Todo item.
- `message`: String - Success message.

## `createTodo`

**Description:** Create a new todo item.

**Endpoint:** `/todos`

**Method:** `POST`

**Request Body:**
- `title`: String - Title of the todo item.
- `description`: String - Description of the todo item.

**Response:**
- `success`: Boolean - Indicates whether the request was successful.
- `data`: Object - Newly created todo item.
- `message`: String - Success message.

## `deleteTodo`

**Description:** Delete a todo item by its ID.

**Endpoint:** `/todos/:id`

**Method:** `DELETE`

**Response:**
- `success`: Boolean - Indicates whether the request was successful.
- `message`: String - Success message.

# Todo API Controllers Documentation

## `updateTodo`

**Description:** Update a todo item by its ID.

**Endpoint:** `/todos/:id`

**Method:** `PUT`

**Request Body:**
- `title`: String (optional) - Updated title of the todo item.
- `description`: String (optional) - Updated description of the todo item.

**Response:**
- `success`: Boolean - Indicates whether the request was successful.
- `data`: Object - Updated todo item.
- `message`: String - Success message.

## `getTodo`

**Description:** Retrieve all todo items.

**Endpoint:** `/todos`

**Method:** `GET`

**Response:**
- `success`: Boolean - Indicates whether the request was successful.
- `data`: Array - Array of all todo items.
- `message`: String - Success message.

## `getTodoById`

**Description:** Retrieve a todo item by its ID.

**Endpoint:** `/todos/:id`

**Method:** `GET`

**Response:**
- `success`: Boolean - Indicates whether the request was successful.
- `data`: Object - Todo item.
- `message`: String - Success message.

## `createTodo`

**Description:** Create a new todo item.

**Endpoint:** `/todos`

**Method:** `POST`

**Request Body:**
- `title`: String - Title of the todo item.
- `description`: String - Description of the todo item.

**Response:**
- `success`: Boolean - Indicates whether the request was successful.
- `data`: Object - Newly created todo item.
- `message`: String - Success message.

## `deleteTodo`

**Description:** Delete a todo item by its ID.

**Endpoint:** `/todos/:id`

**Method:** `DELETE`

**Response:**
- `success`: Boolean - Indicates whether the request was successful.
- `message`: String - Success message.
