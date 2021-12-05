import { useState, useEffect } from 'react'
import { FiXCircle } from 'react-icons/fi'

const ExitPreview = () => {
  const [isPreview, setIsPreview] = useState(false)
  const [slug, setSlug] = useState('')

  useEffect(() => {
    checkIsPreview()
  }, [])

  const checkIsPreview = async () => {
    const res = await fetch('/api/is-preview')
    const json = await res.json()
    const { isPreview, previewData } = json
    setIsPreview(isPreview)
    setSlug(previewData?.slug)
  }

  return (
    <>
      {isPreview && (
        <a
          href={`/api/exit-preview?slug=${slug}`}
          className='fixed bottom-0 left-0 grid p-2 mb-4 ml-4 font-medium text-center bg-blue-500 rounded-full place-items-center'
        >
          <FiXCircle className='w-8 h-8 text-white' />
        </a>
      )}
    </>
  )
}

export default ExitPreview
