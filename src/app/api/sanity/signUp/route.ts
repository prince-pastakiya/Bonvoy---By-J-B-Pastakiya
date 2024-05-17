import { signUpHandler } from 'next-auth-sanity';

import sanityClient from '@/Libraries/sanity';

export const POST = signUpHandler(sanityClient);
