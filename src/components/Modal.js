import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function MyModal(props) {
  let [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState('')  
    
  const handleValue = (e) => {
      setValue(e.target.value);
  }

  function closeModal() {
    setIsOpen(false)
    setValue('')
  }

  function openModal(e) {
    e.preventDefault()
    setIsOpen(true)
  }

  return (
    <>
    <form className="flex justify-start mt-5 gap-1 h-14" >
        <input placeholder="Input Your Name" type='email' className="p-2 shadow-md border-0 outline outline-offset-1 outline-slate-50 rounded-lg" value={value} onChange={handleValue} />
        <button type='submit' className="warna-bg p-3 rounded-lg text-slate-50 font-medium text-sm" onClick={openModal}>Get Started</button>
    </form>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                   {props.title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-gray-500 text-base">
                      <span className='font-semibold'>{value}</span> {props.body}
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent warna-bg px-4 py-2 text-sm font-medium text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Start to buy
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
