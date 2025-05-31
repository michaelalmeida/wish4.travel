import { Button } from "antd";
import { DeleteOutlined, RedoOutlined } from "@ant-design/icons";
import { useArchivePostRequest } from "@requests/postRequests/useArchivePostRequest";

type ArchiveButtonProps = {
  postId: string;
  archived?: boolean;
  onSucessCallback: () => void;
};

export const ArchiveButton = ({
  postId,
  archived,
  onSucessCallback,
}: ArchiveButtonProps) => {
  const { mutate, isLoading } = useArchivePostRequest(onSucessCallback);

  const handleClick = () => {
    mutate(postId);
  };

  return (
    <Button
      icon={archived ? <RedoOutlined /> : <DeleteOutlined />}
      loading={isLoading}
      onClick={handleClick}
      shape="circle"
    />
  );
};
