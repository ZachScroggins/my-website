import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const isPreview = req.preview ? req.preview : false
  const previewData = req.previewData

  res.status(200).json({ isPreview, previewData })
}
