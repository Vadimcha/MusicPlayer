import { HomePage } from '@/pages/HomePage';
import { redirect } from 'next/navigation';

const Func = () => {
  redirect('/Home');
  return HomePage
};

export default Func;