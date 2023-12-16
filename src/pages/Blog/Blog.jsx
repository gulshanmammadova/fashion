import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import datas from '../../data/blog';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  const [tags, setTags] = useState([]);
  const [searchByTags, setSearchByTags] = useState([]);
  const [searchByNames, setSearchByNames] = useState([]);
  const [inp, setInp] = useState('');

  useEffect(() => {
    const allTags = datas.reduce((accumulator, currentBlog) => {
      currentBlog.tags.forEach(tag => {
        if (!accumulator.includes(tag)) {
          accumulator.push(tag);
        }
      });
      return accumulator;
    }, []);

    setTags(allTags);
  }, []);

  useEffect(() => {
    tagHandle();
  }, [inp]);

  const inpHandle = (e) => {
    setInp(e.target.value);
  };

  const tagHandle = (tag) => {
    const filterByName = datas.filter(
      n => n.title.trim().toLowerCase().includes(inp.trim().toLowerCase())
    );
  
    if (inp.trim().length === 0 && searchByTags.length > 0) {
      const filteredResults = datas.filter(blog =>
        blog.tags.includes(tag)
      );
      setSearchByNames(filteredResults);
    } else if (searchByNames.length > 0 && searchByTags.length > 0 && inp.trim().toLowerCase()) {
      const filteredResults = searchByNames.filter(blog =>
        blog.tags.includes(tag)
      );
      setSearchByNames(filteredResults);
    } else if (searchByNames.length > 0) {
      setSearchByNames(filterByName);
    } else if (searchByTags.length > 0) {
      setSearchByNames(searchByTags);
    } else {
      setSearchByNames(datas);
    }
  };

 
  return (
    <div className='container'>
      <div className='blog-cards-all d-flex'>
        <div className='d-flex col-lg-8' style={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {searchByNames.map((blog, index) => (
            <Card className='mx-2 my-2 b-0 card-1' style={{ width: 270 }} key={index}>
              <Card.Img className='b-0' variant="top" src={blog.mainImg} />
              <Card.Body>
                <Card.Title className='blog-card-title'>{blog.date} | {blog.author}</Card.Title>
                <Card.Text>{blog.title}</Card.Text>
                <Link className='detail-blog' to={`/singleblog/${blog.id}`}> Read More ...</Link>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div className='filter col-lg-2'>
          <input type="text" onChange={inpHandle} />
          <div>
            <h3>Tags</h3>
            <ul>
              {tags.map((x, i) => (
                <li className='li-tag' key={i} onClick={() => tagHandle(x)}
                  style={{ color: 'rgb(92, 163, 163) !important', listStyleType: 'none', marginTop: '-20' }}>
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
