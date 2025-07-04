const educationData = [
  {
    institution: 'National Institute of Technology, Warangal',
    period: '2023–present',
    description: 'B Tech, Electrical and Electronics Engineering',
  },
  {
    institution: 'Resonance Junior College',
    period: '2021–2023',
    description: 'Board of Intermediate Education, Telangana',
  },
  {
    institution: 'Kakatiya Techno School',
    period: 'Until 10th Class',
    description: 'Board of Secondary Education, Telangana',
  },
];

function Education() {
  return (
    <section className='w-full min-h-screen bg-dot-white/[0.08] flex flex-col items-center justify-center py-16 px-2 md:px-4'>
      <h2 className='text-3xl md:text-4xl font-bold text-white mb-12 space-title'>Education</h2>

      <div className='relative w-full flex flex-row items-center justify-center'>
        {/* Astronaut Image */}
        <div className='hidden md:flex flex-col items-center justify-start mr-2 md:mr-15 mt-8 pointer-events-none'>
          <img src='/spacewalker.png' alt='Astronaut' className='w-52 md:w-82 animate-float' />
        </div>

        {/* Timeline */}
        <div className='md:max-w-2/3 relative flex-1 flex flex-col items-center'>
          {/* Vertical Line */}
          <div className='absolute left-1/2 top-0 -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-700 via-blue-500 to-blue-300 shadow-[0_0_12px_2px_#7f5fff99] rounded-full z-0' />

          <div className='flex flex-col w-full z-10'>
            {educationData.map((edu, idx) => {
              const isRight = idx % 2 === 0;
              return (
                <div key={edu.institution} className='relative flex w-full min-h-[120px] mb-12 last:mb-0'>
                  {/* Timeline Dot */}
                  <div className='absolute left-1/2 -translate-x-1/2 z-20 max-md:hidden'>
                    <div className='w-4 h-4 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 border-4 border-black shadow-lg' />
                  </div>

                  {/* Education Card */}
                  <div
                    className={`w-full md:w-1/2 ${isRight ? 'ml-auto pl-8 md:pl-12' : 'mr-auto pr-8 md:pr-12'} flex flex-col items-${
                      isRight ? 'start' : 'end'
                    } relative`}
                  >
                    <div className='bg-black/30 border border-blue-500/40 shadow-md hover:shadow-blue-500/30 transition-all duration-300 backdrop-blur rounded-xl px-6 py-5 max-w-md'>
                      <div className='text-lg md:text-xl font-semibold text-white mb-1 space-title text-left'>{edu.institution}</div>
                      {edu.period && <div className='text-xs text-blue-300 mb-1 font-mono tracking-wide text-left'>{edu.period}</div>}
                      <div className='text-sm text-blue-100 font-light space-desc text-left'>{edu.description}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
