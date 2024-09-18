interface CustomButtonProps {
  label: string;
  onClick: () => void;
  className?: string
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  className,
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className={`w-full py-4 bg-airbnb text-white hover:bg-airbnb-dark transition rounded-xl cursor-pointer text-center ${className}`}
    >
      {label}
    </div>
  )
}

export default CustomButton