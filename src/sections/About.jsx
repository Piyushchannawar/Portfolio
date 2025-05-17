import AboutImg from "../assets/about.png";
import Title from "../components/Title";

const About = () => {
  return (
    <section id="about" className="pt-32">
      <div className="container">
        <div className="md:grid md:grid-cols-2 md:gap-2 items-center">
          <div className='mb-8 md:mb-0 flex justify-center'>
                <img className='w-64 h-64 object-cover rounded-full mx-auto shadow-lg border-4 border-purple-600 ' src={AboutImg}alt="" />
            </div>

          <div>
            <Title
              title="about"
              highlight="me"
              subtitle="Get To Know Me Better"
              isCenter={false}
            />
            <p className="leading-7">
              I’m a passionate and driven student working toward a career in
              Software Engineering. I enjoy exploring the intersection of web
              development, cloud computing, and AI/ML, and I’m actively building
              projects that help me turn theory into real-world applications. My
              current focus is on developing full-stack web applications,
              deploying scalable systems on AWS, and experimenting with machine
              learning models using Python and scikit-learn. I love learning by
              doing — whether it's writing clean code, solving problems, or
              optimizing workflows. As I continue to learn and build, I'm
              excited to connect with other developers, mentors, and teams who
              are shaping the future of technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
