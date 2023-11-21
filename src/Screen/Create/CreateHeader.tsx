import { HeaderContent } from "@ui/Container";
import { H2 } from "@ui/Typography";
import { Button } from "antd";
import {
  useCreatePostRequest,
  useUpdatePostRequest,
} from "@requests/postRequests";
import { useCreateContext } from "./CreateProvider";
import convertStringToAlias from "helpers/convertStringToAlias.helper";
import { useUserCookie } from "@hooks/useUser";

import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

export const CreateHeader = ({ isEditing }: { isEditing: boolean }) => {
  const { t } = useTranslation();
  const { userId } = useUserCookie();
  const { mutate: createPost } = useCreatePostRequest();
  const { mutate: updatePost } = useUpdatePostRequest();

  const { data, postId } = useCreateContext();

  const handleSave = () => {
    const alias = convertStringToAlias(data.title);

    const payload = {
      ...data,
      alias,
      createdAt: new Date(),
      creatorUid: userId,
    };

    if (
      payload.title &&
      payload.creatorUid &&
      payload.destination.lat &&
      payload.destination.long
    ) {
      if (isEditing) {
        updatePost({ id: postId, ...payload });
      } else {
        createPost(payload);
      }
    } else {
      toast.warning(t("createStory.error.fieldMissing"));
    }
  };

  return (
    <HeaderContent>
      <H2 variation="thin">
        {isEditing ? t("menu.update") : t("menu.create")}
      </H2>
      <Button type="primary" onClick={handleSave}>
        {t("save")}
      </Button>
    </HeaderContent>
  );
};
