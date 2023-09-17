import React from "react";
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
  const ReactEditorJS = createReactEditorJS();
  const blocks = {
    time: 1635603431943,
    blocks: [
      {
        id: "sheNwCUP5A",
        type: "header",
        data: {
          text: "Editor.js",
          level: 2,
        },
      },
      {
        id: "12iM3lqzcm",
        type: "paragraph",
        data: {
          text: "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.",
        },
      },
      {
        id: "fvZGuFXHmK",
        type: "header",
        data: {
          text: "Key features",
          level: 3,
        },
      },
      {
        id: "xnPuiC9Z8M",
        type: "list",
        data: {
          style: "unordered",
          items: [
            "It is a block-styled editor",
            "It returns clean data output in JSON",
            "Designed to be extendable and pluggable with a simple API",
          ],
        },
      },
      {
        id: "-MhwnSs3Dw",
        type: "header",
        data: {
          text: "What does it mean «block-styled editor»",
          level: 3,
        },
      },
      {
        id: "Ptb9oEioJn",
        type: "paragraph",
        data: {
          text: 'Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class="cdx-marker">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor\'s Core.',
        },
      },
      {
        id: "-J7nt-Ksnw",
        type: "paragraph",
        data: {
          text: 'There are dozens of <a href="https://github.com/editor-js">ready-to-use Blocks</a> and the <a href="https://editorjs.io/creating-a-block-tool">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games.',
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
          text: "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏",
        },
      },
      {
        id: "FF1iyF3VwN",
        type: "image",
        data: {
          file: {
            url: "https://codex.so/public/app/img/external/codex2x.png",
          },
          caption: "",
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
