export type PropfileIamgeProps = {
  imgSrc?: string;
};

const ProfileImage = ({ imgSrc = "default.jpg" }: PropfileIamgeProps) => {
  return (
    <div className="w-8 h-8 border-gray-50 rounded-full overflow-hidden">
      <img className="w-full h-full object-cover" src={imgSrc} alt="" />
    </div>
  );
};

export default ProfileImage;
