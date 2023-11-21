import { Tabs } from "antd";
import { PostInfoForm } from "./PostInfoForm";
import { EditorJsWrapper } from "./EditorJsWrapper";
import type { TabsProps } from "antd";
import { InputForTitle } from "../Create.style";
import { useTranslation } from "react-i18next";
import { useCreateContext } from "../CreateProvider";
import { CreatePost } from "Models/Post.model";
import { OutputBlockData } from "@editorjs/editorjs";
import { useEffect } from "react";

export const Form = ({ isEditing }: { isEditing: boolean }) => {
  const { t } = useTranslation();
  const { data, setData, clearData } = useCreateContext();

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
          <EditorJsWrapper setPostBlocks={handleFieldChange} />
        </>
      ),
    },
    {
      key: "2",
      label: "Informações adicionais",
      children: <PostInfoForm setValue={handleFieldChange} />,
    },
  ];
  return <Tabs defaultActiveKey="1" items={items} size="large" />;
};
