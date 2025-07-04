const skillsData = [
  {
    category: 'Languages',
    skills: [
      { name: 'C++', logo: '/cpp_logo.png' },
      { name: 'Python', logo: '/python_logo.png' },
      { name: 'JavaScript', logo: '/javascript_logo.png' },
    ],
  },
  {
    category: 'Frameworks',
    skills: [
      { name: 'React', logo: '/react_logo.png' },
      { name: 'Node.js', logo: '/nodejs_logo.png' },
      { name: 'Express.js', logo: '/expressjs_logo.png' },
      { name: 'Tailwind CSS', logo: '/tailwind_logo.png' },
      { name: 'Bootstrap', logo: '/bootstrap_logo.png' },
      { name: 'REST APIs', logo: '/restapi_logo.png' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'PostgreSQL', logo: '/postgresql_logo.png' },
      { name: 'MongoDB', logo: '/mongodb_logo.png' },
    ],
  },
  {
    category: 'Developer Tools',
    skills: [
      { name: 'Git', logo: '/git_logo.png' },
      { name: 'GitHub', logo: '/github_logo.png' },
      { name: 'Postman', logo: '/postman_logo.png' },
      { name: 'VS Code', logo: '/vscode_logo.png' },
    ],
  },
];

function Skills() {
  return (
    <section className='w-full py-12 px-4 flex flex-col items-center'>
      <h2 className='text-3xl md:text-4xl font-bold text-white mb-8 space-title'>Tech Skills</h2>
      <div className='w-full max-w-5xl flex flex-col gap-10'>
        {skillsData.map(group => (
          <div key={group.category}>
            <h3 className='text-xl md:text-2xl font-semibold text-space-accent mb-4 space-title'>{group.category}</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              {group.skills.map(skill => (
                <div
                  key={skill.name}
                  className='flex items-center bg-[#181824] border border-white/10 rounded-lg px-4 py-2 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer min-h-[56px]'
                >
                  <div className='flex items-center justify-center w-10 h-10 bg-[#232336] rounded-md mr-3 border border-white/10'>
                    <img src={skill.logo} alt={skill.name + ' logo'} className='w-7 h-7 object-contain' />
                  </div>
                  <span className='text-white text-base font-medium ml-1'>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
