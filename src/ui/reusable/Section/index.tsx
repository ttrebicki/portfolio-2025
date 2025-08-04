export const Section = (props: React.ComponentPropsWithoutRef<"section">) => {
  return (
    <section
      {...props}
      className={`h-screen min-h-screen max-h-screen relative pt-4 pb-4 ${props.className}`}
    />
  );
};
