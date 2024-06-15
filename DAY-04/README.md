## This is Day 04 Of Backend Development

# Blog API Controllers Documentation

## `createPost`

**Description:** Create a new post.

**Endpoint:** `/posts`

**Method:** `POST`

**Request Body:**
- `title`: String - Title of the post.
- `body`: String - Body content of the post.

**Response:**
- `post`: Object - Newly created post.

## `getAllPosts`

**Description:** Retrieve all posts with populated comments.

**Endpoint:** `/posts`

**Method:** `GET`

**Response:**
- `posts`: Array - Array of all posts with populated comments.

## `likePost`

**Description:** Like a post.

**Endpoint:** `/likes`

**Method:** `POST`

**Request Body:**
- `post`: String - ID of the post to be liked.
- `user`: String - User who liked the post.

**Response:**
- `post`: Object - Updated post object with added like.

## `unlikePost`

**Description:** Unlike a post.

**Endpoint:** `/unlikes`

**Method:** `POST`

**Request Body:**
- `post`: String - ID of the post to be unliked.
- `like`: String - ID of the like to be removed.

**Response:**
- `post`: Object - Updated post object with removed like.

## `dummyLink`

**Description:** A dummy endpoint.

**Endpoint:** `/dummy`

**Method:** `GET`

**Response:** String - Dummy message.

## `createComment`

**Description:** Create a new comment for a post.

**Endpoint:** `/comments`

**Method:** `POST`

**Request Body:**
- `post`: String - ID of the post the comment belongs to.
- `user`: String - User who created the comment.
- `body`: String - Body content of the comment.

**Response:**
- `post`: Object - Updated post object with added comment.
