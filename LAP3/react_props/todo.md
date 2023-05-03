# File Structure and Props Todos

## Refactor component structure
- [x] create 'components', 'pages' and 'layouts' folders with index.js files
  - [x] move FaveButton and its tests to own folder in 'components'

- [x] create a `News` component in 'pages' folder which has local state and renders:
  - [x] A `Greeting` component which has local state
  - [x] A `ReaderCount` component which has local state
  - [x] A `FeaturedArticle` component that receives `chosenStory` as a prop
  - [x] A `Headlines` component that receives `stories` and `handleStorySelect` as props

- [x] adjust App to render only `Header`, `News` and `Footer`

## Add new components
- [x] create a basic `Header` layout component
- [x] create a basic `Footer` layout component

## Update tests
**Header**: *New test*
- [x] renders a nav tag

**Footer**: *New test*
- [x] shows the copyright logo and futureproof name

**News**: *New test*
- [x] loads with no featured story
- [x] changes featured story when a story headline is clicked
  
**Greeting**: *Move existing tests*
- [x] greets a user as 'friend' if no username given'
- [x] does not change greeting whilst a user enters input
- [x] greets a user by name if a username is given
- [x] clears user input after submission

**ReaderCount**: *Move existing tests*
- [x] increases reader count when "I've read!" button is clicked

**Headlines**: *Move and update existing tests*
- [x] renders story headlines
- [x] triggers `handleStorySelect` prop when a story headline is clicked

**FeaturedArticle**: *New test*
- [x] renders given story
