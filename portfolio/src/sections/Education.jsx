import { IconSchool } from '@tabler/icons-react';

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
    period: 'Until 2021',
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
          <div className='absolute left-6 md:left-1/2 top-0 -translate-x-1/2 h-full w-0.5 bg-blue-600 shadow-[0_0_12px_2px_#7f5fff99] rounded-full z-0' />

          <div className='flex flex-col w-full z-10 pb-4'>
            {educationData.map((edu, idx) => {
              const isRight = idx % 2 === 0;

              return (
                <div key={edu.institution} className='relative flex items-center w-full min-h-[120px] mb-12 last:mb-0'>
                  <div className='absolute left-6 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20'>
                    <div className='w-4 h-4 md:w-4.5 md:h-4.5 rounded-full bg-black border-2 md:border-3 border-blue-600 shadow-[0_0_12px_#7f5fff99]' />
                  </div>

                  {/* Education Card Wrapper */}
                  <div
                    className={`w-full md:w-1/2 relative flex flex-col items-start pl-14 pr-2 md:pl-0 md:pr-0 ${
                      isRight ? 'md:ml-auto md:pl-12 md:items-start' : 'md:mr-auto md:pr-12 md:items-end'
                    }`}
                  >
                    <div className='relative bg-black/30 border border-blue-500/40 shadow-md hover:shadow-blue-500/30 transition-all duration-300 backdrop-blur rounded-xl px-6 py-5 max-w-md w-full'>
                      {/* Connectors */}
                      <div
                        className={`absolute top-1/2 -translate-y-1/2 h-[2px] bg-blue-500/60 z-0 -left-8 w-8 md:-left-12 md:w-12 ${isRight ? 'block' : 'block md:hidden'}`}
                      />

                      {!isRight && (
                        <div className='absolute top-1/2 -translate-y-1/2 -right-8 md:-right-12 w-8 md:w-12 h-[2px] bg-blue-500/60 hidden md:block z-0' />
                      )}

                      {/* Card Content */}
                      <div className='relative z-10'>
                        <div className='text-lg md:text-xl font-semibold text-white mb-1 space-title text-left'>{edu.institution}</div>
                        {edu.period && <div className='text-xs text-blue-300 mb-1 font-mono tracking-wide text-left'>{edu.period}</div>}
                        <div className='text-sm text-blue-100 font-light space-desc text-left'>{edu.description}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className='absolute left-6 md:left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 z-20 pointer-events-none'>
            <div className='w-7 h-7 rounded-full bg-black border-2 border-blue-600 flex items-center justify-center shadow-[0_0_12px_#7f5fff99]'>
              <IconSchool size={14} className='text-blue-600' stroke={2.2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
