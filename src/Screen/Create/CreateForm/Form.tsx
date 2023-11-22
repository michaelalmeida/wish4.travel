import { Skeleton, Tabs } from "antd";
import { PostInfoForm } from "./PostInfoForm";
import { EditorJsWrapper } from "./EditorJsWrapper";
import type { TabsProps } from "antd";
import { InputForTitle } from "../Create.style";
import { useTranslation } from "react-i18next";
import { useCreateContext } from "../CreateProvider";
import { CreatePost } from "Models/Post.model";
import { OutputBlockData } from "@editorjs/editorjs";
import { useEffect } from "react";
import { useGetPostRequest } from "@requests/postRequests";

export const Form = ({ postId }: { postId?: string }) => {
  const { t } = useTranslation();
  const { data, setData, clearData, setPostId } = useCreateContext();

  console.log("Form data", data.title);

  const {
    data: requestedPostData,
    isSuccess,
    isLoading,
  } = useGetPostRequest({ postId });

  useEffect(() => {
    if (!!postId && isSuccess) {
      setData(requestedPostData);
      setPostId(postId);
    }
  }, [requestedPostData, postId, isSuccess]);

  useEffect(() => {
    return () => clearData();
  }, []);

  const handleFieldChange = (
    field: string,
    value: OutputBlockData[] | string | unknown[]
  ): void => {
    setData((prevState: CreatePost) => ({ ...prevState, [field]: value }));
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Informações básicas",
      children: (
        <>
          <InputForTitle
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFieldChange("title", e.target.value)
            }
            value={data.title}
            placeholder={t("createStory.form.title.placeholder")}
          />
          <EditorJsWrapper
            isLoading={isLoading}
            setPostBlocks={handleFieldChange}
            isEditing={!!postId}
          />
        </>
      ),
    },
    {
      key: "2",
      label: "Informações adicionais",
      children: <PostInfoForm setValue={handleFieldChange} />,
    },
  ];

  return isLoading ? (
    <Skeleton active />
  ) : (
    <Tabs defaultActiveKey="1" items={items} size="large" />
  );
};
