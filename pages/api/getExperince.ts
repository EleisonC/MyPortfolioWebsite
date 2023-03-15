import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity';
import { Experince } from '@/typings';

const query = groq `
  *[_type == "experince"]{
    ..., technologies[]->
  }
`

type Data = {
    experince: Experince[]
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {

    const experince: Experince[] = await sanityClient.fetch(query)

    res.status(200).json({ experince });
  }