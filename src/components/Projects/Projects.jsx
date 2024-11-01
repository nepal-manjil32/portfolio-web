import React, { useRef } from 'react'
import './Projects.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import project_1 from '../../assets/hospital.png'
import project_2 from '../../assets/blogging.png'
import project_3 from '../../assets/school.png'
import user_4 from '../../assets/user-4.png'

const Project = () => {
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
    <div className='project'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="project-slider">
          <ul ref={slider}>
            <li>
              <div className="project-slide">
                <div className="project-info">
                  <img src={project_1} alt="" />
                  <div>
                    <h3>Medical Automation App</h3>
                    <span>SRM University-AP, Andhra Pradesh</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Odio tempore vitae ipsa mollitia porro nobis, veniam consequatur 
                  aspernatur, repellat aliquid, ipsam ut accusamus aperiam quasi 
                  error sequi architecto excepturi quia!</p>
                <a href="https://github.com/nepal-manjil32/medical_automation" className='project-link' target='_blank'>Project Link</a>
              </div>
            </li>

            <li>
              <div className="project-slide">
                <div className="project-info">
                  <img src={project_3} alt="" />
                  <div>
                    <h3>University Website</h3>
                    <span>Himalayan Institute of Research and Innovation, Nepal</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Odio tempore vitae ipsa mollitia porro nobis, veniam consequatur 
                  aspernatur, repellat aliquid, ipsam ut accusamus aperiam quasi 
                  error sequi architecto excepturi quia!</p>
                  <a href="https://github.com/nepal-manjil32/medical_automation" className='project-link' target='_blank'>Project Link</a>
              </div>
            </li>

            <li>
              <div className="project-slide">
                <div className="project-info">
                  <img src={project_2} alt="" />
                  <div>
                    <h3>IntellectNest</h3>
                    <span>Bloging Website</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Odio tempore vitae ipsa mollitia porro nobis, veniam consequatur 
                  aspernatur, repellat aliquid, ipsam ut accusamus aperiam quasi 
                  error sequi architecto excepturi quia!</p>
                  <a href="https://github.com/nepal-manjil32/intellect-nest" className='project-link' target='_blank'>Project Link</a>
              </div>
            </li>

            <li>
              <div className="project-slide">
                <div className="project-info">
                  <img src={user_4} alt="" />
                  <div>
                    <h3>Yann LeCun</h3>
                    <span>New York University, USA</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Odio tempore vitae ipsa mollitia porro nobis, veniam consequatur 
                  aspernatur, repellat aliquid, ipsam ut accusamus aperiam quasi 
                  error sequi architecto excepturi quia!</p>
                  <a href="https://github.com/nepal-manjil32/medical_automation" className='project-link' target='_blank'>Project Link</a>
              </div>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default Project
