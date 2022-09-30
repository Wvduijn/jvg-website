const Paragraph = (props: any) => {
  const { children, size = 'text-base', color = 'text-gray-500' } = props;
  return (
    <p className={`font-Roboto leading-relaxed p-6 ${color} ${size} `}>
      {children}
    </p>
  );
};

export default Paragraph;
