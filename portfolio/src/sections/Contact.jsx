import { IconBrandGithub, IconMail, IconBrandLinkedin } from '@tabler/icons-react';
import { useState } from 'react';

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  const onSubmit = async event => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formData = new FormData(event.target);
      formData.append('access_key', '8bf45620-14c7-411c-b870-14b793df758f');
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      }).then(res => res.json());

      if (res.success) {
        setSubmitStatus('success');
        event.target.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);

      // Auto-hide status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  return (
    <div className='relative flex flex-col md:flex-row min-h-screen w-full items-center justify-center gap-7 px-4 pt-12'>
      {/* Blackhole Video Background */}
      <video
        src='/blackhole.mp4'
        autoPlay
        loop
        muted
        playsInline
        className='absolute left-0 bottom-0 w-full object-cover z-0 opacity-30 pointer-events-none select-none m-0 p-0'
        style={{ zIndex: 0, margin: 0, padding: 0, left: 0, bottom: 0 }}
      />

      {/* Left Card */}
      <div className='md:max-w-[40%] max-h-[50vh] flex flex-col items-center bg-gradient-to-b from-[#19376d] to-[#0b2447] rounded-2xl shadow-lg py-15 border border-[#3a7ca5] hover:-translate-y-2 transition duration-300 z-10'>
        <img src='/profile.jpg' alt='Profile' className='w-28 h-28 rounded-full object-cover border-4 border-[#3a7ca5] shadow-lg mb-5' />
        <div className='w-full text-center mx-10 px-5'>
          <h2 className='text-2xl font-semibold text-white border-b-2 pb-10 border-[#3a7ca570]'>T CHANDU</h2>
        </div>
        <div className='flex flex-row items-center justify-center gap-6 mt-5'>
          <a
            href='https://www.linkedin.com/in/chandu-tiruvayeepati-44b518286/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-200 hover:text-[#7ed6df] transition'
          >
            <IconBrandLinkedin size={28} stroke={1.2} />
          </a>
          <a href='https://github.com/Chandu-71' target='_blank' rel='noopener noreferrer' className='text-blue-200 hover:text-[#7ed6df] transition'>
            <IconBrandGithub size={28} stroke={1.2} />
          </a>
          <a href='mailto:chandu.hns7@gmail.com' className='text-blue-200 hover:text-[#7ed6df] transition'>
            <IconMail size={28} stroke={1.2} />
          </a>
        </div>
      </div>

      {/* Right Form */}
      <div className='md:w-[60%] w-full flex items-center justify-end z-10'>
        <form
          onSubmit={onSubmit}
          className='w-full max-w-2xl bg-[#0f172a]/50 backdrop-blur-md border border-[#3a7ca5] shadow-2xl rounded-2xl p-10 flex flex-col gap-6 animate-glow ml-auto relative'
        >
          {/* Success/Error Message */}
          {submitStatus && (
            <div
              className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg transition-all duration-500 ${
                submitStatus === 'success' ? 'bg-green-500/90 text-white' : 'bg-red-500/90 text-white'
              }`}
            >
              <div className='flex items-center gap-2'>
                {submitStatus === 'success' ? (
                  <>
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                        clipRule='evenodd'
                      />
                    </svg>
                    <span className='text-xs'>Transmission Successful. I’ll respond shortly!</span>
                  </>
                ) : (
                  <>
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
                        clipRule='evenodd'
                      />
                    </svg>
                    <span>Failed to send message. Please try again.</span>
                  </>
                )}
              </div>
            </div>
          )}

          <input
            type='text'
            name='name'
            placeholder='Your Name'
            required
            disabled={isSubmitting}
            className='w-full px-4 py-3 rounded-lg bg-[#19376d]/80 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-[#3a7ca5] border border-transparent focus:border-[#3a7ca5] transition disabled:opacity-50 disabled:cursor-not-allowed'
          />
          <input
            type='email'
            name='email'
            placeholder='Your Email'
            required
            disabled={isSubmitting}
            className='w-full px-4 py-3 rounded-lg bg-[#19376d]/80 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-[#3a7ca5] border border-transparent focus:border-[#3a7ca5] transition disabled:opacity-50 disabled:cursor-not-allowed'
          />
          <textarea
            name='message'
            placeholder='Your Message'
            required
            rows={5}
            disabled={isSubmitting}
            className='w-full px-4 py-3 rounded-lg bg-[#19376d]/80 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-[#3a7ca5] border border-transparent focus:border-[#3a7ca5] transition resize-none disabled:opacity-50 disabled:cursor-not-allowed'
          ></textarea>

          <button
            type='submit'
            disabled={isSubmitting}
            className={`self-center flex items-center w-35 gap-2 px-4 py-2 text-white font-medium text-lg rounded-xl transition-all duration-500 group cursor-pointer ${
              isSubmitting
                ? 'bg-gray-500/50 cursor-not-allowed'
                : 'bg-gradient-to-r from-[#1D4ED850] to-[#3B82F650] hover:from-[#1E40AF] hover:to-[#2563EB] active:scale-95 active:shadow-inner'
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className='w-6 h-6 animate-spin' fill='none' viewBox='0 0 24 24'>
                  <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  ></path>
                </svg>
                <span>Launching...</span>
              </>
            ) : (
              <>
                <svg
                  className='w-6 h-6 transform rotate-[30deg] transition-transform duration-500 group-hover:translate-x-1 group-hover:rotate-[90deg]'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M0 0h24v24H0z' fill='none' />
                  <path d='M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z' />
                </svg>
                <span className='transition-transform duration-500 group-hover:translate-x-1'>Submit</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
