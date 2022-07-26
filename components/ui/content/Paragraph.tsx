const Paragraph = (props: any) => {
  const { children, size = 'text-base', color = 'text-gray-500' } = props;
  return (
    <p className={`font-roboto leading-relaxed mb-6 ${color} ${size} `}>
      {children}
    </p>
  );
};

export default Paragraph;
