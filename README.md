# starter-react-project

## Overview(概要)

このプロジェクトは React 開発用のテンプレートプロジェクトです。\
(create-react-app used npm で作成されたものを拡張)

## Features(機能)

- React(create-react-app) `ver18`
- TypeScript
- ESLint
- Prettier
- React Router `ver6`
- styled-components `ver5`
- Axios

## How To Setup(セットアップ方法)

1. ローカルフォルダに任意のディレクトリを作成してクローンする

```
mkdir hoge && cd hoge

git clone https://github.com/yk-graph/starter-react-project .

npm install
```

2. 拡張機能をインストールする

```
npm install -D eslint prettier eslint-config-prettier
```

3. vscode のワークスペースの setting.json の編集

VSCode でワークスペースを作成し、その setting.json を編集することをオススメ

```
"settings": {
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## DirectoryStructure(ディレクトリ構成)

※src 配下以外は省略

```
/
├ src
  ├ components     // atomicデザインの構成
    ├ atoms
    ├ molecules
    ├ organisms
    ├ templates    // defualtのレイアウトはここで管理
  ├ hooks          // カスタムフックはここで管理
  ├ pages          // NextJS的にページはこのディレクトリに設置
  ├ router
    ├ index.tsx    // 認証してるかを判定してリダイレクトの設定をここで管理
  ├ store
    ├ index.tsx    // useContext, useReducer でstateの管理
  ├ types          // TypeScriptの記述
  ├ utils          // ファイル内で共通で使うような変数とかはここで管理
```

## AppStructure(App の構成)

```
Provider
    ├ Router
      ├ Layout
          ├ App
```

- `root階層のindex.tsx`に Provider(ContextProvider)で wrap している
- `root階層のindex.tsx`に記述されている Provider(ContextProvider)直下に BrowserRouter の設置
- `router/index.tsx`で、GlobalState の値から条件を作ってリダイレクトの設定をしている
- `router/index.tsx`で、templates で作成した defualt のレイアウトを import して wrap している
- `App.tsx`は`Login.tsx`, `Register.tsx`, `NotFound.tsx`**以外**の pages の親コンポーネントとしいる
