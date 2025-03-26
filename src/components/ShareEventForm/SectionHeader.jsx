const SectionHeader = ({ title, description, children }) => {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="flex">
        <p className="flex-grow text-gray-500">{description}</p>
        {children}
      </div>
    </div>
  );
};

export default SectionHeader;
