import Image from 'next/image'
import SideNavigation from '../components/SideNavigation'

export default function Home() {
  return (
    <>
      <SideNavigation />
      <main className="container">
      <section className="hero">
        <div className="photo">
          <Image src="/images/Sanjog.jpeg" alt="Profile" width={260} height={260} />
        </div>
        <div className="intro">
          <h1>Sanjog Sigdel</h1>
          <h2>Lecturer, DoCSE, Kathmandu University</h2>
          <p>
            Sanjog Sigdel is a Lecturer at the Department of Computer Science and Engineering, School of Engineering, Kathmandu University, Nepal. He completed his Master's Degree in Technology in Information Technology (MTech. IT) from Kathmandu University in 2020 A.D. Mr. Sigdel brings years of industrial and academic experience. Mr. Sigdel has previously worked as a Software Engineer, Project and Product Manager in the U.S. Healthcare Data Analytics Industry. Mr. Sigdel's key research interests include Neuroinformatics, Brain Computer Interface (BCI),  Artificial Intelligence, High Performance Computing (HPC), Health Informatics, Crisis Informatics, and Crisis Information Management Systems. Mr. Sigdel is a published author who has contributed to national and international conferences and peer-reviewed international journals. Sanjog currently serves as a Subject Committee Member to the Department of Health Informatics contributing in the course curruculum development.
          </p>
          <div className="details">
            <p><strong>Email:</strong> sanjog.sigdel@ku.edu.np</p>
            <p><strong>Location:</strong> Dhulikhel, Kavre</p>
          </div>
        </div>
      </section>

      <section className="about">
        <h3>About</h3>
        <p>Add more details here about background, projects, or your resume.</p>
      </section>
    </main>
    </>
  )
}
