// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import News from './components/News/News';
import { Row, Spinner } from 'react-bootstrap';


// const c = [];
// const number = c.length ===0 ? 5: 10;
function App() {


  // const items = [
  //   { name: 'Hobbiton', description: 'professor', img: 'https://www.planetware.com/wpimages/2020/02/new-zealand-in-pictures-beautiful-places-to-photograph-hobbiton.jpg' },
  //   { name: 'Hobbiton', description: 'professor', img: 'https://www.planetware.com/wpimages/2020/02/new-zealand-in-pictures-beautiful-places-to-photograph-hobbiton.jpg' },
  //   { name: 'Hobbiton', description: 'professor', img: 'https://www.planetware.com/wpimages/2020/02/new-zealand-in-pictures-beautiful-places-to-photograph-hobbiton.jpg' },
  //   { name: 'Hobbiton', description: 'professor', img: 'https://www.planetware.com/wpimages/2020/02/new-zealand-in-pictures-beautiful-places-to-photograph-hobbiton.jpg' }
  // ]
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=c71ce05babb347dea290bae41cf836c2')
      .then(res => res.json())
      .then(data => setNews(data.articles));
  }, [])
  return (
    <div className="App">

      {news.length === 0 ?
        <Spinner animation="border" />
        :
        <Row
          xs={1} md={3} className="g-4">
          {
            news.map(nw => <News news={nw}></News>)
          }
        </Row>
      }
    </div >

  );
}

export default App;
