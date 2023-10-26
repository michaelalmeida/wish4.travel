import React from "react";
import { useTranslation } from "react-i18next";
// @ts-ignore
import { createReactEditorJS } from "react-editor-js";
// @ts-ignore
import CheckList from "@editorjs/checklist";
// @ts-ignore
import Table from "@editorjs/table";
// @ts-ignore
import Header from "@editorjs/header";
// @ts-ignore
import List from "@editorjs/list";
// @ts-ignore
import Delimiter from "@editorjs/delimiter";
// @ts-ignore
import Image from "@editorjs/image";
// @ts-ignore
import Quote from "@editorjs/quote";
import { InputTitle } from "../Create.style";

export const EDITOR_JS_TOOLS = {
  checkList: CheckList,
  Table: Table,
  header: Header,
  list: List,
  delimiter: Delimiter,
  image: Image,
  Quote: Quote,
};

export const CreateHistoryForm = () => {
  const { t } = useTranslation();
  const ReactEditorJS = createReactEditorJS();
  const blocks = {
    time: 1635603431943,
    blocks: [
      {
        id: "12iM3lqzcm",
        type: "paragraph",
        data: {
          text: t("createStory.sample.paragraph"),
        },
      },
      {
        id: "fvZGuFXHmK",
        type: "header",
        data: {
          text: t("createStory.sample.heading"),
          level: 3,
        },
      },
      {
        id: "xnPuiC9Z8M",
        type: "list",
        data: {
          style: "unordered",
          items: [
            t("createStory.sample.list.item1"),
            t("createStory.sample.list.item2"),
          ],
        },
      },
      {
        id: "N8bOHTfUCN",
        type: "delimiter",
        data: {},
      },
      {
        id: "IpKh1dMyC6",
        type: "paragraph",
        data: {
          text: t("createStory.sample.paragraph2"),
        },
      },
      {
        id: "FF1iyF3VwN",
        type: "image",
        data: {
          file: {
            url: "https://i.ibb.co/f18RNcx/Screenshot-2023-10-01-at-20-16-31.png",
          },
          caption: t("createStory.sample.image.caption"),
          withBorder: false,
          stretched: false,
          withBackground: false,
        },
      },
    ],
  };

  return (
    <div>
      <InputTitle type="text" placeholder="title" value="My travel title" />
      <ReactEditorJS defaultValue={blocks} tools={EDITOR_JS_TOOLS} />
    </div>
  );
};
