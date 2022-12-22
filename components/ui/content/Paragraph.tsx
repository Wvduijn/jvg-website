const Paragraph = (props: any) => {
  const { children, size = 'text-base', color = 'text-gray-500', extraClasses } = props;
  return (
    <p className={`font-roboto leading-relaxed mb-6 ${color} ${size} ${extraClasses} `}>
      {children}
    </p>
  );
};

export default Paragraph;
