const Box = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => <div className={className}>{children}</div>;

export { Box };
