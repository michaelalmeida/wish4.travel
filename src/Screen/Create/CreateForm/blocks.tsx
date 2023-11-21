import { OutputBlockData } from "@editorjs/editorjs";
import { useTranslation } from "react-i18next";

export const useInitialBlocks = (blocks: OutputBlockData[]) => {
  const { t } = useTranslation();

  const initialBlocks = [
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
  ];

  return {
    time: 1635603431943,
    blocks: blocks ? blocks : initialBlocks,
  };
};
