import { Button, Tabs } from "antd";
import type { TabsProps } from "antd";

import { useTranslation } from "react-i18next";
import { PrivateLayout } from "../../Components/PrivateLayout";

import { H2 } from "@ui/Typography";
import { EditorJsWrapper } from "./CreateForm";
import { ContentContainer, HeaderContent } from "@ui/Container";
import { PostInfoForm } from "./CreateForm/PostInfoForm";
import { memo, useState } from "react";
import { OutputBlockData } from "@editorjs/editorjs";
import { Destination } from "Models/Post.model";
import { useCreatePostRequest } from "@requests/postRequests";
import { InputForTitle } from "./Create.style";

const Create = memo(() => {
  const { t } = useTranslation();
  const { mutate } = useCreatePostRequest();
  const [title, setTitle] = useState("");
  const [blocks, setBlocks] = useState<OutputBlockData[]>([]);
  const [destination, setDestination] = useState<Destination>({
    city: "",
    lat: 0,
    long: 0,
  });
  const [date, setDate] = useState<any>([]);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Informações básicas",
      children: (
        <>
          <InputForTitle
            onChange={(e: any) => setTitle(e.target.value)}
            value={title}
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

  const handleSave = () => {
    // mutate({
    //   title,
    //   blocks,
    //   destination,
    //   duration: date,
    // });
  };

  return (
    <PrivateLayout>
      <ContentContainer>
        <HeaderContent>
          <H2 variation="thin">{t("menu.create")}</H2>
          <Button type="primary" onClick={handleSave}>
            {t("save")}
          </Button>
        </HeaderContent>
        <Tabs defaultActiveKey="1" items={items} size="large" />
      </ContentContainer>
    </PrivateLayout>
  );
});

export default Create;
