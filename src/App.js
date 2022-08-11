import React, {useState} from 'react';
import './App.css';

const GIFS = [
  "https://media2.giphy.com/media/tJgvmO4ZoI7QlvH9X3/giphy.gif?cid=ecf05e47rrr9k7fcnrifvcopi362elpuyqju3teq3eimud9m&rid=giphy.gif&ct=g",
  "https://media2.giphy.com/media/3ouZci1ItopAHgLJn4/giphy.gif?cid=ecf05e47hj4gdfar3ssrvwm79rnn5puir16ly00b20uz83vz&rid=giphy.gif&ct=g"

]

const GIFS2 = [ 
  "https://media3.giphy.com/media/1wXdlljhvr6vij74jH/giphy.gif?cid=ecf05e47vg5dnzer12a7lndtarptqf3mtctmo0iilghhv6eh&rid=giphy.gif&ct=g"
]

function App() {
  const [gifs,setGifs] = useState(GIFS)


  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => <img src={singleGif}/> )
        }
        

      </section>
    </div>
  );
}

export default App;
