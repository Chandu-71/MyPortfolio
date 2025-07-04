import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';

const projects = [
  {
    title: 'JobHaven – Job Portal Web App',
    timeline: 'June 2025',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Clerk', 'Cloudinary', 'Sentry'],
    features: [
      'Built a full-stack platform where job seekers apply and recruiters manage applications.',
      'Deployed frontend/backend on Vercel with serverless custom API routes.',
      'Integrated Clerk, Cloudinary, and Sentry for auth, uploads, and monitoring.',
    ],
    image: '/jobhaven_ss.png',
    video: '/space_cloth.mp4',
    github: 'https://github.com/Chandu-71/JobHaven',
    live: 'https://jobhaven-portal.vercel.app/',
  },
  {
    title: 'Gesture Controlled Robot',
    timeline: 'Oct 2024',
    techStack: ['Python', 'OpenCV', 'MediaPipe', 'PyBullet', 'NumPy'],
    features: [
      'Created a real-time robot simulation controlled via webcam hand gestures.',
      'Used OpenCV + MediaPipe for gesture detection and landmark tracking.',
      'Integrated robot motion with PyBullet for responsive real-time control.',
    ],
    image: '/gesture_control_ss.png',
    video: '/space_cloth.mp4',
    github: 'https://github.com/Chandu-71/GestureControlledRobot',
    live: null,
  },
  {
    title: 'Book Notes',
    timeline: 'Jan 2025',
    techStack: ['Node.js', 'Express.js', 'PostgreSQL', 'Bootstrap', 'Open Library Covers API'],
    features: [
      "Web app to track, rate, and take notes on books you've read.",
      'Used Open Library Covers API to fetch and display book covers.',
      'Included sorting by title, rating, and recently added with full CRUD.',
    ],
    image: '/booknotes_ss.png',
    video: '/space_cloth.mp4',
    github: 'https://github.com/Chandu-71/BookNotes',
    live: null,
  },
];

function TechBadge({ tech }) {
  return (
    <span className='bg-blue-700 text-white px-2 py-0.5 rounded-full text-xs font-medium mr-2 mb-2 inline-block hover:bg-blue-600 transition-colors duration-150 cursor-pointer'>
      {tech}
    </span>
  );
}

function ProjectCard({ project }) {
  return (
    <div className='relative w-full rounded-2xl overflow-hidden shadow-xl bg-[#181824]/80 backdrop-blur-md flex flex-col md:flex-row mb-10 border border-white/10'>
      {/* Video Background */}
      <video className='absolute inset-0 w-full h-full object-cover z-0' src={project.video} autoPlay loop muted playsInline />
      <div className='absolute inset-0 bg-black/70 z-10' />

      {/* Content */}
      <div className='relative z-20 flex flex-col md:flex-row w-full'>
        {/* Left: Image */}
        <div className='md:w-1/3 w-full flex items-center justify-center p-6 min-h-[200px]'>
          <div className='w-100 h-60 bg-white/10 rounded-xl flex items-center justify-center border border-white/10 overflow-hidden'>
            {project.image ? (
              <img src={project.image} alt={project.title} className='object-cover w-full h-full' />
            ) : (
              <span className='text-gray-400 text-lg'>Preview Not Available</span>
            )}
          </div>
        </div>

        {/* Right: Details */}
        <div className='md:w-2/3 w-full flex flex-col justify-center p-6'>
          <h3 className='text-2xl font-bold text-white mb-1'>{project.title}</h3>
          <div className='text-sm text-gray-400 mb-3'>{project.timeline}</div>
          <ul className='list-disc list-inside text-gray-200 mb-3 space-y-1'>
            {project.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
          <div className='flex flex-wrap mb-4'>
            {project.techStack.map(tech => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
          <div className='flex gap-4 mt-2'>
            {project.github && (
              <a
                href={project.github}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-400 hover:text-blue-200 flex items-center gap-1 no-underline'
                title='GitHub'
              >
                <IconBrandGithub size={22} />
                <span>Github</span>
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-400 hover:text-blue-200 flex items-center gap-1 no-underline'
                title='Live Site'
              >
                <IconExternalLink size={20} />
                <span>Live Site</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section className='w-full py-12 px-4 flex flex-col items-center min-h-screen'>
      <h2 className='text-3xl md:text-4xl font-bold text-white mb-10 space-title'>Projects</h2>
      <div className='w-full max-w-5xl'>
        {projects.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
