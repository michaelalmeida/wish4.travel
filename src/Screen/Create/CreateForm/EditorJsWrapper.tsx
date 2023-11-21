import { memo, useEffect, useRef } from "react";
// @ts-ignore
import EditorJS, { OutputBlockData } from "@editorjs/editorjs";
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
import Image from "simple-image-editorjs";
// @ts-ignore
import Quote from "@editorjs/quote";

import { useInitialBlocks } from "./blocks";

type EditorJsWrapperProps = {
  setPostBlocks: (field: string, blocks: OutputBlockData[]) => void;
};

export const EditorJsWrapper = memo(
  ({ setPostBlocks }: EditorJsWrapperProps) => {
    const blocks = useInitialBlocks();
    const ejInstance = useRef<EditorJS | undefined>();

    const initEditor = () => {
      const editor = new EditorJS({
        holder: "editorjs",
        onReady: () => {
          ejInstance.current = editor;
        },
        autofocus: true,
        data: blocks,
        onChange: async () => {
          if (editor && editor.saver && editor.saver.save) {
            const content = await editor.saver.save();

            setPostBlocks("blocks", content.blocks);
          }
        },
        tools: {
          checkList: CheckList,
          Table: Table,
          header: {
            class: Header,
            config: {
              placeholder: "Adicione um subtitulo",
              levels: [2, 3, 4],
              defaultLevel: 3,
            },
          },
          list: List,
          delimiter: Delimiter,
          image: Image,
          Quote: Quote,
        },
      });
    };

    useEffect(() => {
      if (ejInstance.current === undefined) {
        initEditor();
      }

      return () => {
        if (ejInstance.current) {
          ejInstance.current.destroy();
          ejInstance.current = undefined;
        }
      };
    }, []);

    return <div id="editorjs" />;
  }
);
