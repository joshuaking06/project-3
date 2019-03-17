
# General Assembly Project 3: City Spot

## Project Brief

A group project to build a fullstack React application.

### Timeframe

7 Days

## Technologies Used
* React
* Javascript(ES6)
* Node.js
* MongoDB
* Express
* Webpack
* Mocha/Chai/Supertest
* Filestack
* Axios
* SCSS/CSS
* Babel
* Semantic UI
* HTML5
* Git/Github
* Heroku

## Contributors

Bete Yemane, Josh King, Lauren Bell, Alessandro Lepri

## Our Application - City Spot

![Screenshot 2019-03-16 at 12 34 52](https://user-images.githubusercontent.com/44004811/54475500-d18ad700-47e9-11e9-8997-b206c1586b30.png)

## Project Summary

City Spot is a web application where users can sign up and post images from their travels. The users can navigate to the city they visited to share their adventures with other travellers.

## Users Journey

When the user first visits City Spot, they have two paths to reach their desired city: the search bar where they can search for a city, or the links that takes them to each continent where they can select a city.

![Screenshot 2019-03-16 at 12 34 27](https://user-images.githubusercontent.com/44004811/54475406-e7e46300-47e8-11e9-87c3-6099e41a5c8e.png)

Once on a city's page, users can view information about that city, posts made by other users and a link to view event and restaurant recommendations.

Users can also like and comment on the posts made by other users. Posts with high amounts of likes will be added to the popular posts page and will be able to like the posts they see on that page.

If a user would like to add a post they will have to register and login, and if the user has forgotten their password they can request an email with the link to change their password.

![Screenshot 2019-03-16 at 12 54 08](https://user-images.githubusercontent.com/44004811/54475586-af458900-47ea-11e9-8524-854cdcbe9512.png)

The user has a profile page which contains their uploaded profile image, bio, a cover photo and their posts. They are also able to edit their bio and cover photo image.

## Process

### Development

We first began creating wireframes to work out the structure of the website and content placement. From then, we were able to establish the endpoints, models and routes needed for our app. We firstly began to develop our backend API using Mongoose, and created three of our main models; City, Continent, and User, as well as the controllers. We were then able to test our routes making adjustments needed to populate the accurate information we wanted to display, using Insomnia as our client. We then created a seeds file and added the data for both Continent and City schemas. 

Frontend setup
-setting up components and pages
-setting up forms
-connecting API requests to the front end.

### Task Management and Communication

Being in a team of four, we decided the easiest way to divide the workload was to have two people build the front-end, and two people build the back-end. We held stand-ups every morning and communicated via Slack to update each other with our progress.

## Styling

We used Semantic UI as our CSS Framework which created a sleek and user friendly design. 

## Challenges and Wins
Challenges:
-email system

Wins:

One of the biggest wins was the team communication. We had a group Slack channel where every member was equally active. This really helped us manage Git as a team, as we all got into the habit of informing each other when we were pushing to the development branch. Any errors or conflicts during this process, we notified the group channel where we all worked together to resolve the issues.

Another win was the implentation of our 'like' feature.

```const postSchema = new mongoose.Schema({
  city: { type: mongoose.Schema.ObjectId, ref: 'City' },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  image: { type: String, required: 'Please add an image'},
  caption: { type: String, required: 'Please add a caption' },
  comments: [commentSchema],
  likes: [likeSchema]
},{
  timestamps: true
})
```
```
function likeCreateRoute(req, res, next) {
  req.body.user = req.currentUser
  Post
    .findById(req.params.postId)
    .then(post => {
      post.likes.push(req.body)
      return post.save()
    })
    .then(post => res.status(201).json(post))
    .catch(next)
}
```

## Future features

* Currently, the only way to add new Cities is via our seeds file, so an admin account to add the cities will be a useful feature to add.

* To follow the conventions of a social media platform, and for users to engage with each other to have a sense of community, I'd like to implement user messaging & friend requests.

* A search bar for the Continent and City pages to improve user navigation.

