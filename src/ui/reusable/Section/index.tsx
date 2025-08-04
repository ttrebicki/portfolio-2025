export const Section = (props: React.ComponentPropsWithoutRef<"section">) => {
  return (
    <section
      {...props}
      className={`pt-16 pb-16 relative ${props.className || ""}`}
    />
  );
};
