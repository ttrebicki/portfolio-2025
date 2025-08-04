export const Section = (props: React.ComponentPropsWithoutRef<"section">) => {
  return (
    <section
      {...props}
      className={`h-screen min-h-screen max-h-screen pt-16 pb-16 relative ${
        props.className || ""
      }`}
    />
  );
};
