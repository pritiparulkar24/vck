import Header from "../components/Header/Header";

const Home = () => {

    return (
        <div>
            <Header/>
            <h1> Welcome to Vivekanand College </h1>
            <img src="/images/vck.jpeg" width="1300" height="300"/>
            <p>
        <strong>Vivekanand College</strong> is a premier educational institution dedicated to fostering academic excellence,
         innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], 
         we have proudly served generations of students, empowering them to achieve their full potential.
      </p>
      <p>
        At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. 
        Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique 
        ecosystem where curiosity thrives and future leaders are shaped.
      </p>
      <h3>Why Choose Vivekanand College?</h3>
      <hr />
      <ul>
        <li><strong>Legacy of Excellence:</strong> Decades of commitment to quality education.</li>
        <li><strong>Experienced Faculty:</strong> Learn from renowned experts and passionate educators.</li>
        <li><strong>Modern Facilities:</strong> Well-equipped labs, expansive library, and comfortable campus.</li>
        <li><strong>Holistic Development:</strong> Focus on co-curricular activities, sports, and community service.</li>
        <li><strong>Strong Placements:</strong> Excellent career opportunities with leading companies.</li>
      </ul>

        <h3>Campus Life & Facilities </h3>
        <img src="/images/vck2.jpg"width="600" height="300"/>
        <img src="/images/vck1.jpeg"width="600" height="300"/>
        
      <p>Ready to start your journey with us?</p>
      <button onClick={() => alert('Apply Now clicked!')}>Apply Now</button>

       </div>
    
    )
}

export default Home;