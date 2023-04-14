module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    // "plugin:styled-components/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    indent: ["error", 2],
    "no-console": "warn",
    "no-var": "error",
    "sort-vars": "warn",
    // "object-property-newline": ["error", "multiline"],
    // if문 함수를 한줄로 처리하는 방식을 막는다. (에러발생이 안됨..)
    // error) if(condition) doSomething();
    // ok)
    // if (condition) {
    //   doSomething();
    // }
    curly: ["error", "all"],
    allowSingleLine: 0,

    // 외부 모듈과 내부 모듈을 구분하여 사용한다.(엔터키 공백사용)
    // ex) import 해서 가져온 모듈과 내부 파일에서 선언한 모듈을 구분

    // 변수, 함수에는 카멜 케이스을 사용한다.

    // URL, HTML 같은 범용적인 대문자 약어는 대문자 그대로 사용한다.
    // ex) parseHTML, getHTTPRequest

    // "react/react-in-jsx-scope": "off",
    // "react/prop-types": "off",
    // "no-unused-vars": "off",
    // "react/display-name": "off",
    // "array-callback-return": "off",
    // "one-var": "off",
  },
};
