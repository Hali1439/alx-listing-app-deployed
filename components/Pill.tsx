const Pill = ({ label }: { label: string }) => (
  <span className="px-4 py-2 bg-gray-200 rounded-full text-sm cursor-pointer hover:bg-gray-300">
    {label}
  </span>
);

export default Pill;
