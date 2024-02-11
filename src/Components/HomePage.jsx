import React from 'react'
import Header from './Header'
import Button from './shared/Button'
import BlogList from './BlogList'

const HomePage = () => {
  return (
    <div>
      <body className='main-container'>
        <Header />
        <div className='about-section'>
          <p>Hi, I'm Rivon - founder of Platform, a social network and learning platfrom for entrerpreneurs. I'm 20 years old - I love technology and business. This is my blog.  </p>
        </div>
        <section>
          <div className='images'>
            <div className="img-1"></div>
            <div className="img-2"></div>
            <div className="img-3"></div>
          </div>
        </section>
        <section>
          <h1>Essays</h1>
          <BlogList />
        </section>
        <section>
          <h1>Projects</h1>
          <div><h2>Check out my github</h2></div>
          <div><a href="">https://github.com/GloryBoyCoder</a></div>
        </section>
        <section>
          <h1>Contact</h1>
          <div><p>I'm easy to reach. You can find me here:</p></div>
          <div>
            <div>
              <h3>Email: Rivonnewland@gmail.com</h3>
            </div>
            <div>
              <h3>Twitter: Startupvon</h3>
              <a href=""></a>
            </div>
          </div>
        </section>
      </body>
      <footer>
        <Button />
      </footer>
    </div>
  )
}

export default HomePage