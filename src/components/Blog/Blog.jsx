import React, { useRef } from 'react'
import './Blog.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import blog_1 from '../../assets/blog-1.jpg'

const Testimonials = () => {
  const slider = useRef(); // to access the user tag
  let transX = 0;
  const slideForward = () => {
    if(transX > -50){
      transX -= 25;
    }
    slider.current.style.transform = `translateX(${transX}%)`
  }

  const slideBackward = () => {
    if(transX < 0){
      transX += 25;
    }
    slider.current.style.transform = `translateX(${transX}%)`
  }


  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={blog_1} alt="" />
                  <div>
                    <h3>"History and the Cause of Russia-Ukraine War": My Review
                    </h3>
                    <span>July 29, 2023</span>
                  </div>
                </div>
                <p>The Russia-Ukraine war is a multi-dimensional disaster. It is an undeniable fact that Putin started 
                  the war and is responsible for Russia’s conduct on the battlefield. America's obsession with bringing 
                  Ukraine to NATO....</p>
                <a href="https://manjilinsights.blogspot.com/2023/07/the-cause-of-russia-ukraine-war.html" className='project-link' target='_blank'>Read Full Article</a>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={blog_1} alt="" />
                  <div>
                    <h3>Geoffry E Hinton</h3>
                    <span>University of Toronto, Canada</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Odio tempore vitae ipsa mollitia porro nobis, veniam consequatur 
                  aspernatur, repellat aliquid, ipsam ut accusamus aperiam quasi 
                  error sequi architecto excepturi quia!</p>
                  <a href="https://manjilinsights.blogspot.com/2023/07/the-cause-of-russia-ukraine-war.html" className='project-link' target='_blank'>Read Full Article</a>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={blog_1} alt="" />
                  <div>
                    <h3>David J Malan Nepal</h3>
                    <span>Harvard, USA</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Odio tempore vitae ipsa mollitia porro nobis, veniam consequatur 
                  aspernatur, repellat aliquid, ipsam ut accusamus aperiam quasi 
                  error sequi architecto excepturi quia!</p>
                <a href="https://manjilinsights.blogspot.com/2023/07/the-cause-of-russia-ukraine-war.html" className='project-link' target='_blank'>Read Full Article</a>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={blog_1} alt="" />
                  <div>
                    <h3>Yann LeCun</h3>
                    <span>New York University, USA</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Odio tempore vitae ipsa mollitia porro nobis, veniam consequatur 
                  aspernatur, repellat aliquid, ipsam ut accusamus aperiam quasi 
                  error sequi architecto excepturi quia!</p>
                <a href="https://manjilinsights.blogspot.com/2023/07/the-cause-of-russia-ukraine-war.html" className='project-link' target='_blank'>Read Full Article</a>
              </div>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default Testimonials
