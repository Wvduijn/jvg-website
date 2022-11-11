import Link from 'next/link';

const NavBarLink = (props: any) => {
  const { title, goto, active } = props;

  return (
    <Link href={goto}>
      <span className={`my-4 text-gray-700 transition-colors duration-300 transform dark:text-gray-500 hover:text-blue-violet-500 dark:hover:text-blue-violet-400 md:mx-4 md:my-0  ${active ? 'is-active' : ''}`}>
        { title }
      </span>
    </Link>
  );
};

export default NavBarLink;
