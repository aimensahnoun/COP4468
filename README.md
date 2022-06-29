## About the project
This is a project for the Cross Platform App Development course (COP4468). 
**Expo** is used in order to develop the applcation, the app consists of a 5 pages where each page fetches data from a test **API** and diplays it to the user.

## Users Page
![Users Page](https://user-images.githubusercontent.com/62159014/176429323-ffa55d97-c8a4-4a10-9312-7092603441f5.jpeg)

This pages fetches data from this [endpoint](https://jsonplaceholder.typicode.com/users)and the result is then shown to the user using a FlatList

### User Details
![2022-06-29 14 50 56](https://user-images.githubusercontent.com/62159014/176429804-af34dc07-5952-4db9-be1c-e11794856fab.jpg)

![2022-06-29 14 51 02](https://user-images.githubusercontent.com/62159014/176429819-fd96cab5-ea57-496c-846f-7f96cc5f41a2.jpg)
![2022-06-29 14 51 06](https://user-images.githubusercontent.com/62159014/176429825-0ebe7a49-80b7-4eb5-8660-e4191ba04195.jpg)

This page displays the users details fetched from this [endpoint](https://jsonplaceholder.typicode.com/users/5) by userId, it also fetches the users albums ([Here](https://jsonplaceholder.typicode.com/albums)) and to do list ([Here](https://jsonplaceholder.typicode.com/todos))

### Photos List
![photo_2022-06-29 14 53 42](https://user-images.githubusercontent.com/62159014/176430226-d85b4c76-64ef-4413-a794-9492dbfd312e.jpeg)

The photos list is displayed based on album whenever a users clicks on a specific album, the details of the photos are fetched from this [endpoint](https://jsonplaceholder.typicode.com/photos)

## Posts
![photo_2022-06-29 14 55 02](https://user-images.githubusercontent.com/62159014/176430483-f71af0a2-ff0b-4f53-abc3-1be02050838f.jpeg)

Similar to the users page, a list of posts is rendered on this screen with data fetched from this [endpoint](https://jsonplaceholder.typicode.com/posts)

### Post Details
![photo_2022-06-29 14 56 38](https://user-images.githubusercontent.com/62159014/176430755-00bf133a-086c-4aef-953e-dba4176ad541.jpeg)

This page shows the details of the post that was selected by the user, the details are fetched from this [endpoint](https://jsonplaceholder.typicode.com/posts/5) as well as the comments on that post fetched from [here](https://jsonplaceholder.typicode.com/posts/5)
