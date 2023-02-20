import Link from 'next/link';

const NavBarLink = (props: any) => {
  const { title, goto, active } = props;

  return (
    <Link href={goto}>
      <span className={`my-8 font-bold text-gray-700 transition-colors duration-300 transform dark:text-gray-500 hover:text-blue-violet-500 dark:hover:text-blue-violet-400 md:mx-4 md:my-0  ${active ? 'text-blue-violet-500 dark:text-blue-violet-500' : ''}`}>
        { title }
      </span>
    </Link>
  );
};

export default NavBarLink;
