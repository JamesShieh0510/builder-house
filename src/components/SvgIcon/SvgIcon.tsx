interface Props {
  iconName: string;
  width?: number | string;
  height?: number | string;
  className?: string;
}

export default function SvgIcon(props: Props) {
  const { iconName, width, height } = props;

  return (
    <svg
      className={`svg-icon ${iconName} ${props.className ?? ""}`}
      width={width}
      height={height}
      fill="white"
    >
      <use xlinkHref={"#" + iconName} width={width} height={height} />
    </svg>
  );
}
