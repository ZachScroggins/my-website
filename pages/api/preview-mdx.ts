import { prepareMDX } from 'lib/utils/mdx';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function mdx(req: NextApiRequest, res: NextApiResponse) {
  if (req.preview) {
    const { content } = JSON.parse(req.body);

    const { code, readingTime } = await prepareMDX(content);

    res.status(200).json({ code, readingTime });
  } else {
    res.status(403).json({ message: 'nice try 💩' });
  }
}
