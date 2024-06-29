type NickNameProps = {
  Nick?: string;
};
const NickName = ({ Nick = "슬픔이" }: NickNameProps) => {
  return <span className="font-extrabold  text-gray-300">{Nick}</span>;
};

export default NickName;
