// import Image from "next/image";

import Reviews from "./components/reviews/reviews";

export default function Home() {
  return (
    <main className="relative">
      {/* <h1 className="text-4xl text-blue-950 font-bold">Symio</h1> */}

      <section className="text-center" id="schools-perspective">
        <h1>SCHOOL&apos;S PERSPECTIVE</h1>
        <div>
          <p>
            Today&apos;s Schooling is not all about books and classes; it&apos;s
            about creating educated Human Beings and developing civilized,
            social, literate and successful citizens of the future, Symbiosis
            World School believes in pursuing the same.
          </p>
          <p>
            We are dedicated to equip our students with the Knowledge and Life
            skills that can make them achievers in the journey of LIFE, turning
            them into global citizens of the 21st century.
          </p>
        </div>
        <button>READ MORE</button>
      </section>

      <section id="standout-qualities">
        <h1>STANDOUT QUALITIES</h1>

        <div>
          <img src="" alt="" />
          <h3>Safe environment</h3>
          <p>Happy, Safe, Clean and Stimulating environment.</p>
        </div>

        <div>
          <img src="" alt="" />
          <h3>Qualified Teachers</h3>
          <p>Experienced staff passionate about early childhood development.</p>
        </div>

        <div>
          <img src="" alt="" />
          <h3>Educational activities</h3>
          <p>
            Comprehensive, Integrated and Play-based curriculum for all age
            groups.
          </p>
        </div>

        <div>
          <img src="" alt="" />
          <h3>Infant care</h3>
          <p>Secure and hygienic environment with A crisp colorful ambiance.</p>
        </div>
      </section>

      <section id="curriculum-highlights">
        <h1>Curriculum Highlights</h1>
        <div className="grid md:grid-cols-3">
          <div>
            <h4>CLASSES</h4>
            <img src="" alt="" />
          </div>
          <div>
            <h4>FIELD TRIPS</h4>
            <img src="" alt="" />
          </div>
          <div>
            <h4>ACTIVITIES</h4>
            <img src="" alt="" />
          </div>
        </div>
      </section>

      <section id="pricipal-message" className="grid md:grid-cols-2">
        <div className="">Image</div>
        <div className="">
          <h2>Message From Pricipal&apos;s Desk</h2>
          <p className="">
            The faculty of Symbiosis World School is trained, highly experienced
            & ideal for
          </p>
          <p className="">
            children of this tender age. We have highly dedicated staff members,
          </p>
          <p className="">
            The didi’s shower love & affection on babies & have become so adept
            that
          </p>
          <p className="">
            they understand the child’s needs just by their expressions.
          </p>
        </div>
      </section>

      <Reviews />

      <section id="Footer" className="grid md:grid-cols-[2fr,1fr]">
        <div>
          <h3>Contact Us</h3>
          <ul>
            <li>+91-7447412381</li>
            <li>info@symbiosisworldschool.in</li>
            <li>
              Raut Arcade Gate No.02, Ground Floor, Shop No.15/16, Opposite
              Pendulkar Marriage Hall, Badlapur(E)
            </li>
          </ul>
        </div>
        <div>
          <h3>Working Hours</h3>
          <ul>
            <li>Monday to Saturday</li>
            <li>Open from 9:30 AM - 4:30 PM</li>
            <li>Holidays - Closed</li>
            <li>Weekends - Closed</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
