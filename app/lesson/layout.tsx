type Props = {
  children: React.ReactNode;
};

const LessonLayout = ({ children }: Props) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};
