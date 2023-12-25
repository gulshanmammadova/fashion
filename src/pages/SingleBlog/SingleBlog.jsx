import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import blogs from '../../data/blog';
import './SingleBlog.css';
import MoonLoader from "react-spinners/MoonLoader";
import UpIcon from '../../components/Up/UpIcon';
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "blueviolet",
};
const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundBlog = blogs.find(blog => blog.id == id);
    if (foundBlog) {
      setBlog(foundBlog);
  setLoading(false);

    }
  }, [id]);

  return (
    <div>
      <div className="col-lg-12 col-md-10">
        {blog ? (
          <div className="single-blog">
            <div className="blog-photo">
              <img
                className="w-75"
                src={blog.mainImg}
                alt="Blog Photo"
              />
             
            </div>
            <div className='d-flex flex-wrap mx-auto blog-images' style={{textAlign:'center'}}>
            {blog.otherImg &&
                blog.otherImg.map((image, i) => (
                  <img
                    key={i}
                    className="w-25"
                    src={image}
                    alt={`Blog Photo ${i}`}
                  />
                ))}
            </div>
            <div className="blog-setting-info">
              <div className="blog-creater-info">
                <h5>{blog.author}</h5>
              </div>
              <hr />
              <span className="created-day my-2">{blog.date} | </span>
              <span className="comment-count my-2"> | </span>
              <hr />
            </div>
            <div className="blog-text">
              <h2 className="blog title">{blog.title}</h2>
              <h3>{blog.additionalTitle}</h3>
              <div className="blog-big-description">
                {blog.mainDesc &&
                  blog.mainDesc.length > 0 &&
                  blog.mainDesc.map((x, i) => (
                    <React.Fragment key={i}>
                      <p>{x}</p>
                      {i !== blog.mainDesc.length - 1 && <br />}
                    </React.Fragment>
                  ))}
              </div>
            </div>
            <div className="blog-big-description">
                {blog.comments &&
                  blog.comments.length > 0 &&
                  blog.comments.map((x, i) => (
                    <React.Fragment key={i}>
                     <p  className=' blog-comment'> Comment by <span className='commentor-settings'>  : {x.commenter}   ||   {x.commenDate}</span>
                     </p><p className='text'>{x.commentTeaxt}</p>

                      {i !== blog.mainDesc.length - 1 && <hr />}
                    </React.Fragment>
                  ))}
              </div>
            <div className="comment">
                    <h2>LIVE A REPLY</h2>
                    <p className="my-3">Your email address will not be published.Required fields are marked *</p>
                    <div className="comment-form-group">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Name*</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput2">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput2"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput3">Website</label>
                                <input type="text" className="form-control" id="exampleFormControlInput3"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Comment*</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="form-check ">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                    Save my name, email, and website in this browser for the next time I comment.
                                </label>
                            </div>

                            <button type="submit">POST COMMENT</button>

                        </form>
                    </div>
                </div>

          </div>
        ) : (
          <MoonLoader
                color='#89BC98'
                loading={loading}
                cssOverride={override}
                size={30}
                margintop={30}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
        )}
      </div>
  <UpIcon/>

    </div>
  );
};

export default SingleBlog;
