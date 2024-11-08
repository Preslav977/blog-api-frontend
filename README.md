# blog-api-frontend

![Screenshot_2024-06-14_10-51-36](https://github.com/Preslav977/readme-repository/assets/119291608/c44c2d0f-0094-44cc-972f-8dfedff98108)

# Overview

This is the front-end of the project. Created with React library.

# About the project the project

This part of the frontend allows the user to log in and read the posts, and they can also leave a comment on each post. This project contains bulgarian culture and folklore that is actual information about bulgarian culture.

# Features

- Filter posts by ID
- Filter posts by tag
- Filter posts by category
- Add a comment.
- Delete a comment.
- Create a post.
- Add post category
- Update the privacy of the post.
- Delete a post.
- Live validation when signing up or logging up.
- Guest account

# Live Previews

- [View the live site here](https://blog-api-frontend-lime.vercel.app/)
- [View the live CMS site here](https://blog-api-cms-ten.vercel.app/)
- [View the front-end CMS repository here](https://github.com/Preslav977/blog-api-cms)
- [View the back-end API repository here](https://github.com/Preslav977/blog-api-backend)

# Technology Used

- React Context API: for allowing to pass down the state in the tree
- React Router: rendering different components depending on the route
- PropTypes: validating the prop of a component
- Vitest: testing the components of the application
- Dom Purify: sanitize the content of the post in order to prevent injections.
- Date Fns: library for date formatting
- CSS module: organized CSS style files for each component

# Lessons Learned

- React Content API: how to use the useContext API, which allows me to pass a state down the tree and use that state in different components
- HTTP headers: how to use fetch with different headers, methods, and bodies to send JSON back to the server
- Client Side Validation: show the user before this is sent to the server.
- useNavigate Hook: that redirects pragmatically to a different page or part of the component
- useRef hook: clear the fields on the form component on submit
- useParams hook: fetch to fetch posts based on ID, category, tag, and so on.
- HTTP status: handle response status 401 if the user is not authorized
- Live Validation: how to use the user event type to test if there is a value on the input
- Local Storage: how to store the token in the local storage after the user is logged in and send it back to the frontend with the Bearer schema.
- DOM Purify: how to sanitize the HTML using dom purify and render it.

# Future Improvements

- Better organization of CSS variables
- Test if the user clicked a button that is not pragmatically redirected to a certain component.
- Testing if the state is true after the button has been clicked
- Implementing semantic HTML
- Improve accessibility
- Reducing components by reusing the CSS styling
- Add Animations
- Dialog that allows you to search for posts
- Implement like for a post and a comment.
- Implementing use to be able to edit his information
- How to make users verified
