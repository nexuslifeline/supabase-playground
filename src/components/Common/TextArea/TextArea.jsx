const TextArea = props => {
  return (
    <textarea
      className="w-full h-24 p-2 text-gray-700 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
    />
  );
};

export default TextArea;
