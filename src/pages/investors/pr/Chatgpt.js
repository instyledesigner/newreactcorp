import React, { useState, useEffect } from 'react';
import xmlData from './Prdata';

function App() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');

  useEffect(() => {
    fetch(xmlData)
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'application/xml');
        const items = xmlDoc.getElementsByTagName('item');
        const posts = Array.from(items).map(item => ({
          title: item.getElementsByTagName('title')[0].innerHTML,
          description: item.getElementsByTagName('description')[0].innerHTML,
          link: item.getElementsByTagName('link')[0].innerHTML
        }));
        setPosts(posts);
        setFilteredPosts(posts);
      });
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTitle(value);
    const filtered = posts.filter(post => post.title.toLowerCase().includes(value.toLowerCase()));
    setFilteredPosts(filtered);
  }

  return (
    <div>
      <input type="text" placeholder="Search title" value={searchTitle} onChange={handleSearch} />
      <ul>
        {filteredPosts.map((post, index) => (
          <li key={index}>
            <a href={post.link}>{post.title}</a>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
