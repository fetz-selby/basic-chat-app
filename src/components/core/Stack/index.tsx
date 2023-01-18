const Stack = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => {
  const style = `flex-col ${className || ''}`;

  return <div className={style}>{children}</div>;
};
export { Stack };
