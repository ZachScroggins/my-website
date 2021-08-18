import { useRef } from 'react';
import { Transition } from '@headlessui/react';
import useClickAway from 'lib/hooks/useClickAway';

const ConfirmModal = ({ open, setOpen, title, message, type }) => {
  const modalRef = useRef();
  useClickAway(modalRef, setOpen);

  return (
    <Transition show={open} appear={true}>
      <div className='fixed inset-0 z-10 overflow-y-auto'>
        <div className='flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
          <Transition.Child
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div
              className='fixed inset-0 transition-opacity'
              aria-hidden='true'
            >
              <div className='absolute inset-0 bg-gray-500 opacity-75' />
            </div>
            <span
              className='hidden sm:inline-block sm:align-middle sm:h-screen'
              aria-hidden='true'
            >
              ​
            </span>
          </Transition.Child>
          <Transition.Child
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div
              className='inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom bg-white rounded-lg shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6'
              role='dialog'
              aria-modal='true'
              aria-labelledby='modal-headline'
              ref={modalRef}
            >
              <div>
                {type === 'success' && (
                  <div className='flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full'>
                    <svg
                      className='w-6 h-6 text-green-600'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                  </div>
                )}
                {type === 'error' && (
                  <div className='flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full'>
                    <svg
                      className='w-6 h-6 text-red-600'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                      />
                    </svg>
                  </div>
                )}
                <div className='mt-3 text-center sm:mt-5'>
                  <h3
                    className='text-lg font-medium text-gray-900 leading-6'
                    id='modal-headline'
                  >
                    {title}
                  </h3>
                  <div className='mt-2'>
                    <p className='text-sm text-gray-500'>{message}</p>
                  </div>
                </div>
              </div>
              <div className='mt-5 sm:mt-6'>
                {type === 'success' && (
                  <button
                    type='button'
                    className='inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:text-sm'
                    autoFocus
                    onClick={() => setOpen(false)}
                  >
                    Close
                  </button>
                )}
                {type === 'error' && (
                  <button
                    type='button'
                    className='inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm'
                    autoFocus
                    onClick={() => setOpen(false)}
                  >
                    Close
                  </button>
                )}
              </div>
            </div>
          </Transition.Child>
        </div>
      </div>
    </Transition>
  );
};

export default ConfirmModal;
