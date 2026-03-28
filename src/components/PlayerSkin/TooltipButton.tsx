import { Button, Tooltip, theme } from 'antd';

export default function TooltipButton({
  title,
  icon,
  onClick,
}: {
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
}) {
  const { token } = theme.useToken();
  return (
    <Tooltip title={title}>
      <Button
        type="text"
        // size="large"
        icon={icon}
        onClick={onClick}
        style={{ color: '#fff', fontSize: token.fontSizeXL }}
      />
    </Tooltip>
  );
}
