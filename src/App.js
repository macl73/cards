import React from 'react';
import Card from './components/Card.js'
import ImageCard from './components/ImageCard.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import PropTypes from 'prop-types';

function App() {

  const card = {
    img: "https://media.proglib.io/wp-uploads/2018/05/react-props-1024x576.jpg",
    title: "Это карточка!",
    text: "Прочитайте этот текст про React.Props!"
  }

  const card1 = {
    title: "Это карточка без картинки",
    text: "Прочитайте этот текст про React.Props!"
  }

  return (
    <div>
    <Card card={card}>
      <ImageCard card={card} />
    </Card>

    <Card card={card1} />
    </div>
  );
};

App.propTypes = {
  card: PropTypes.object
};

export default App;
