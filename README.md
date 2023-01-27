# backend-assessment
Make It Real - This is a solution to the Backend Assessment Project (a FAVS API) of the Make It Real course.

## Built with
- TypeScript: as programming language and compiled into JavaScript.
- Node.js: to run the program.
- MongoDB: to storage the data.

Some dependencies as:
- express: to build the server.
- mongoose: to structure the models data.
- dotenv: to read the environment variables.
- bcryptjs: to become stronger the passwords.
- jsonwebtoken: to do the users authentication.


## User Flow
 1. [User Registration](#user-registration)
 2. [User Login](#user-login)
 3. [Create a Fav List](#create-a-fav-list)
 4. [Get All Favs List](#get-all-favs-list)
 5. [Get a Single Fav List](#get-a-single-fav-list)
 6. [Add a Fav to a Given List](#add-a-fav-to-a-given-list)
 7. [Delete a List](#delete-a-list)

### User Registration
The user can enter his/her email and a password to register to the system.
![Registration](https://res.cloudinary.com/dirhpjaka/image/upload/v1674855756/dataFiles/e1216f35b2b211bcf1eaaba9be3d54d2.png)

### User Login
The user can enter his/her email and password to log in to the system.
![Login](https://res.cloudinary.com/dirhpjaka/image/upload/v1674855754/dataFiles/886daa90ec66c75ecdfd6758305187b5.png)

### Create a Fav List
When the user is authenticated, he/she can create a new fav list, with a name and the favs.
![CreateFavList](https://res.cloudinary.com/dirhpjaka/image/upload/v1674855750/dataFiles/72d90bd06bd58d6d90b8169c88e6d60e.png)

### Add a Fav to a Given List
When the user is authenticated, he/she can add a new fav to a list.
![UpdateFavList](https://res.cloudinary.com/dirhpjaka/image/upload/v1674855755/dataFiles/1081a61455ba87ece6741c653d82bb6d.png)

### Get All Favs List
When the user is authenticated, he/she can see all the fav lists that have been created.
![GetAllFavList](https://res.cloudinary.com/dirhpjaka/image/upload/v1674855752/dataFiles/c807ddae1da0ad75469f74acd3e50d41.png)

### Get a Single Fav List
When the user is authenticated, he/she can see a specific fav list.
![GetAFavList](https://res.cloudinary.com/dirhpjaka/image/upload/v1674855753/dataFiles/7c55eaf2b76e05f4a494ac8453a8c07e.png)

### Delete a List
When the user is authenticated, he/she can delete a specific fav list.
![DeleteFavList](https://res.cloudinary.com/dirhpjaka/image/upload/v1674855751/dataFiles/ada2091241973f97e010ea9ded0860e2.png)
