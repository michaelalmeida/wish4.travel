import { useTranslation } from "react-i18next";

export const useInitialBlocks = () => {
  const { t } = useTranslation();

  return {
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
    ],
  };
};
