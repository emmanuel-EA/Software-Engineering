import './App.css'
import ComplexComment from './components/complexComment';


function App() {
  const complexComment = {
    date: newDate = {},
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "https://placekitten.com/g/64/64",
    },
  };

  return (
    <>
      <Comment
        date={Comment.date}
        text={Comment.text}
        author={Comment.author}
      />
    </>
  );
}
export default App
