# AFFIX.
A Digital Moodboard/Collage Maker.

[Use Affix.](http://)

### Interact-js & React-rnd
In order to create draggable and resizable 'pin'/image React components, I chose to use [Interact-js](http://interactjs.io/). However, React was clashing with Interact-js — I could only drag a pin/image or resize it, not both — so I then found [React-rnd](https://github.com/bokuweb/react-rnd), an Interact-js 'wrapper' designed for use with React.


### Challenges:
- Working with React JS — Understanding how React works, the way components are incorporated into the app as a whole, using JSX syntax, React's relationship to DOM elements, etc. Simply the fact that I have only been working with React for little over a week.
- Creating draggable and resizable image components.
- Exporting and downloading an image of the artboard area, after a collage had been created. The image/'pin' components are not recognised properly and do not show up on exported png's of the artboard/canvas.

### Future Improvements:
- To successfully export an image from the 'artboard' and download the image file. Perhaps the use of a screenshot API may be necessary in order for images within the artboard to be rendered in an exported image?
- The functionality of selecting an image from a displayed range, rather than being automatically given the first result to be returned from the Unsplash API data. This is really an essential part of the app, without it, a user does not have control over their moodboard -  and cannot effectively create a cohesive design/concept tailored to their vision.
- User accounts — to be able to save, view, edit or delete moodboards/collages made by any particular user.

### Evaluation
Affix was designed to challenge. A task that required me to combine the use of React JS, JSX, React-rnd and an API. There was a lot of 'learning on the go' - researching methods and solutions each time I came across something I did not know how to resolve. Whilst the app may not be entirely functional yet, making it has helped parctise existing, and learn new, skills.
