import { useState } from 'react';
import ConfirmModal from 'components/ConfirmModal';
import ContactSvg from './ContactSvg';

export const index = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    'Oops... Something went wrong. Please try again later.'
  );

  const sendMessage = async e => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, message }),
      });
      const json = await res.json();
      if (json?.success) {
        setSuccess(true);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        throw new Error(json.message);
      }
    } catch (e) {
      setErrorMessage(e.message);
      setError(true);
    }

    setLoading(false);
  };

  return (
    <>
      <section
        id='contact'
        className='relative bg-gray-900 grid md:grid-cols-2 lg:mt-20'
      >
        <div>
          <ContactSvg className='w-full h-full' />
        </div>
        {/* <div className='relative max-w-md px-4 py-12 mx-auto sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32'> */}
        <div className='relative w-full p-6 lg:p-10 xl:p-20'>
          {/* <div className='md:ml-auto md:w-1/2 md:pl-10'> */}
          <div className=''>
            <h2 className='mt-2 mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl'>
              Contact
            </h2>
            <h3 className='mt-2 mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              Send me a message
            </h3>
            <form
              className='grid grid-cols-1 gap-y-6'
              onSubmit={e => sendMessage(e)}
            >
              <div>
                <label htmlFor='full_name' className='block mb-2 text-white'>
                  Full name
                </label>
                <input
                  type='text'
                  name='full_name'
                  id='full_name'
                  autoComplete='name'
                  className='block w-full px-4 py-3 placeholder-gray-500 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md'
                  placeholder='John Doe'
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor='email' className='block mb-2 text-white'>
                  Email
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  className='block w-full px-4 py-3 placeholder-gray-500 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md'
                  placeholder='jdoe@gmail.com'
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor='phone' className='block mb-2 text-white'>
                  Phone
                </label>
                <input
                  type='tel'
                  name='phone'
                  id='phone'
                  autoComplete='tel'
                  className='block w-full px-4 py-3 placeholder-gray-500 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md'
                  placeholder='Optional'
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor='message' className='block mb-2 text-white'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={4}
                  className='block w-full px-4 py-3 placeholder-gray-500 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md'
                  placeholder='What would you like to build?'
                  required
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                />
              </div>
              <div>
                <button
                  type='submit'
                  className={`${
                    loading ? 'pointer-events-none ' : ''
                  }inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900`}
                >
                  {loading ? (
                    <svg
                      className='w-5 h-5 mr-3 -ml-1 text-white animate-spin'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <circle
                        className='opacity-25'
                        cx={12}
                        cy={12}
                        r={10}
                        stroke='currentColor'
                        strokeWidth={4}
                      />
                      <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                      />
                    </svg>
                  ) : (
                    <svg
                      className='w-5 h-5 mr-3 -ml-1'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                      <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                    </svg>
                  )}
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <ConfirmModal
        open={success}
        setOpen={setSuccess}
        title='Message sent'
        message='Thank you! I have received your message and will get back to you as soon as possible.'
        type='success'
      />
      <ConfirmModal
        open={error}
        setOpen={setError}
        title='Error sending message'
        message={errorMessage}
        type='error'
      />
    </>
  );
};

export default index;
