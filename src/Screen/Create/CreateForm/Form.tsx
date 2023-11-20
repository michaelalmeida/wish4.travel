import { Tabs } from "antd";
import { CreatePost } from "Models/Post.model";
import { PostInfoForm } from "./PostInfoForm";
import { EditorJsWrapper } from "./EditorJsWrapper";
import type { TabsProps } from "antd";
import { InputForTitle } from "../Create.style";
import { useTranslation } from "react-i18next";
import { useCreateContext } from "../CreateProvider";
import { OutputBlockData } from "@editorjs/editorjs";

export const Form = () => {
  const { t } = useTranslation();
  const { data, setData } = useCreateContext();

  const setTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      title: e.target.value,
    });
  };

  const setBlocks = (blocks: OutputBlockData[]) => {
    setData({
      ...data,
      blocks,
    });
  };

  const setDate = (duration: any) => {
    setData({
      ...data,
      duration,
    });
  };

  const setDestination = (destination: any) => {
    setData({
      ...data,
      destination,
    });
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Informações básicas",
      children: (
        <>
          <InputForTitle
            onChange={setTitle}
            value={data.title}
            placeholder={t("createStory.form.title.placeholder")}
          />
          <EditorJsWrapper setPostBlocks={setBlocks} />
        </>
      ),
    },
    {
      key: "2",
      label: "Informações adicionais",
      children: (
        <PostInfoForm setDate={setDate} setDestination={setDestination} />
      ),
    },
  ];
  return <Tabs defaultActiveKey="1" items={items} size="large" />;
};
