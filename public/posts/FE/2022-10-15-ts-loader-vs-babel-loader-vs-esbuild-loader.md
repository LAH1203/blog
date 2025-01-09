---
title: ts-loader vs babel-loader vs esbuild-loader
description: 최근에 가장 재밌게 한 로더 공부
date: October 15, 2022
---

최근 [모두모여라 프로젝트](https://www.moyeora.site/)를 진행하며 웹팩에 적용할 로더에 대해 많은 고민이 있었습니다. (2022년 기준)

대표적으로는 가장 많이 사용되는 `ts-loader`와 `babel-loader`가 있고, 최근에는 `esbuild-loader`라는 좀 더 빠른 로더가 등장했습니다. (esbuild-loader는 vite에서 사용할 정도로 핫한 로더라고 하더라고요!)

타입스크립트를 사용하면서 타입 체크에 관련된 부분과 빠른 빌드까지 확실히 챙기고 싶었던 저는 이 세 로더 중 하나를 선택하기로 했습니다.

<br />

### 🚀 ts-loader

[ts-loader](https://github.com/TypeStrong/ts-loader)는 타입 체커가 내장된 로더입니다. 기본적으로 해당 프로젝트의 tsconfig.json 파일을 보고 해당 옵션에 따라 타입 체킹을 실행합니다.

ts-loader의 실행 순서는 타입 체킹 → (타입 에러가 발생하지 않았을 경우) 빌드이기 때문에 빌드 성공까진 비교적 시간이 오래 걸립니다. 그렇지만 강력한 타입 체크로 인해 안전한 타이핑이 가능합니다.

만약 ts-loader의 빌드 속도를 향상시키고 싶다면 컴파일러 옵션을 사용하면 됩니다.

```ts
module.exports = {
  ...
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            },
          },
        ],
      },
    ],
  },
};
```

위와 같이 `transpileOnly` 옵션을 true로 한다면 빌드 시 타입 체킹을 하지 않습니다.
[출처](https://github.com/TypeStrong/ts-loader#faster-builds)

근데 타입 체킹을 하지 않으면 ts-loader를 사용한 의미가 없지 않나? 전 그렇게 생각했습니다. 그래서 타입 체킹을 하면서 빌드 속도를 높일 수 있는 방법이 없을까 고민했습니다.

<br />

### 🚀 fork-ts-checker-webpack-plugin

ts-loader를 만든 TypeStrong에서 타입 체킹 기능만 가져와 만든 [fork-ts-checker-webpack-plugin](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin) 웹팩 플러그인이 있습니다.

```ts
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  ...,
  plugins: [new ForkTsCheckerWebpackPlugin()],
};
```

이 플러그인을 사용하면 자동으로 ts-loader의 transpileOnly 옵션은 true로 설정되어 로더에서는 타입 체킹이 되지 않고, 별도의 프로세스에서 이 플러그인을 통해 타입 체킹 과정이 이루어집니다. 타입 체킹이 이루어지는 시점은 명확하게 밝힌 바가 없어 확실히는 모르겠지만, 터미널에서 웹팩이 성공적으로 컴파일되었다는 메시지 이후로 타입 체킹이 실행된다는 문구가 나온 것을 보아 저는 컴파일 후 타입 체킹 과정이 실행된다고 생각했습니다. (만약 추후 진실을 알게 된다면 수정하겠습니당 😎)

더욱 좋은 것은 fork-ts-checker-webpack-plugin은 ts-loader가 아닌 다른 로더 조합에도 사용할 수 있다는 점이었습니다. 그래서 저는 ts-loader보다는 다른 로더 + fork-ts-checker-webpack-plugin을 사용하는 것이 좋겠다고 판단했습니다.

근데 이 fork-ts-checker-webpack-plugin은 일반적인 tsc와 타입 체크를 하는 과정에서 차이가 있었습니다.

#### fork-ts-checker-webpack-plugin

먼저 fork-ts-checker-webpack-plugin의 경우 빌드할 때마다 새로 변경된 파일이 어떤 파일과 종속성이 있는지를 찾아냅니다. 이때 \*.d.ts 파일의 타입 체킹도 진행하기 때문에 이 과정은 프로젝트의 규모가 커질수록 소요시간도 늘어난다는 단점이 있습니다.

다만 타입 체킹이 컴파일과 별도이기 때문에 타입 에러가 나더라도 컴파일은 제대로 이루어진다는 점, 파일의 변경이 있을 때마다 타입 체킹 과정을 자동으로 수행해준다는 점을 보아 개발 모드에서 사용하기 적절해보였습니다.

#### tsc

tsc의 경우 빌드 시 .tsbuildinfo 파일을 생성하여 다음 빌드부터 해당 파일을 참조합니다. 이러한 방식 덕분에 두 번째 빌드부터는 fork-ts-checker-webpack-plugin보다 더 적은 시간이 소요된다는 장점이 있습니다.

다만 타입 에러가 나면 컴파일을 하지 않고 종료시켜버린다는 점, 파일의 변경이 있어도 타입 체킹 과정을 자동으로 수행해주지는 않는다는 점으로 보아 배포 모드에서 사용하기 적절해보였습니다.

<br />

### 🚀 babel-loader

[babel-loader](https://github.com/babel/babel-loader)는 babel을 사용하여 빌드를 진행하는 로더입니다.

```ts
module.exports = {
  ...
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
    ],
  },
};
```

기본적으로 바벨은 빌드 시 타입을 제거합니다. 별도의 타입 체킹 과정이 없는 것입니다. 때문에 타입에서 에러가 발생하더라도 일반적으로 바벨은 해당 에러를 잡지 못합니다.

그렇기에 별도의 타입 체킹 과정이 필요하다면 앞서 보았던 fork-ts-checker-webpack-plugin나 tsc를 활용해야 합니다.

이렇게만 본다면 babel-loader의 장점은 타입을 제거하기 때문에 빌드 시간이 ts-loader보다 빠르다는 것밖에 없는 것 같습니다. 사실 babel-loader의 가장 큰 장점은 확장에 용이하다는 것입니다.

앞서 말했다시피 babel-loader는 babel을 사용합니다. babel에는 적용할 수 있는 플러그인들이 많습니다. 케이스별로 다르겠지만 플러그인을 잘 적용하면 오히려 다른 로더보다 더 좋은 방식으로 프로젝트 설정을 할 수 있을 것입니다.

만약 기본적으로 많이 사용되는 플러그인을 제외하고 별도의 플러그인을 추가로 적용하지 않는다면, 밑에서 설명드릴 esbuild-loader를 사용하면 빌드 속도에 있어서 더 좋습니다.

만약 babel-loader의 속도를 더 높이고 싶다면 캐시를 사용할 수 있습니다. 로더 옵션 중 `cacheDirectory`를 설정해주면 됩니다. (기본값은 false입니다.)
[참고](https://webpack.js.org/loaders/babel-loader/)

<br />

### 🚀 esbuild-loader

마지막으로 [esbuild-loader](https://github.com/privatenumber/esbuild-loader)입니다. esbuild-loader는 Go 언어로 제작된 esbuild를 사용하여 속도가 매우 빠릅니다.

```ts
module.exports = {
  ...
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'esbuild-loader',
          options: {
            loader: 'tsx',
            target: 'esnext',
          },
        },
      },
    ],
  },
};
```

esbuild는 기본적으로 캐시를 지원합니다. 일부 데이터가 캐시되고, 마지막 빌드 이후 원본 파일이 변경되지 않은 경우 캐시된 데이터를 재사용합니다. 그렇기에 두 번째 빌드 시부터는 일반 빌드보다 더 효율적입니다.

그리고 esbuild-loader의 경우 ESBuildMinifyPlugin도 지원하는데요. 기본적인 terser-plugin보다 짧은 시간이 소요됩니다.

```ts
const { ESBuildMinifyPlugin } = require('esbuild-loader');

module.exports = {
  ...,
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'esnext',
        css: true,  // 이 옵션을 사용하면 css의 minify도 가능합니다.
      }),
    ],
  },
};
```

실제로 제가 테스트했을 때 모든 옵션을 적용 후 esbuild-loader + fork-ts-checker-webpack-plugin과 ts-loader를 비교했을 때 약 1/3 가량 빌드 시간이 줄어든 것을 확인할 수 있었습니다.

<br />

### 🚀 결론

제가 내린 결론은 다음과 같습니다.

- 기본적으로는 속도가 빠른 `esbuild-loader`를 사용
- 타입 체킹 시 개발 모드에서는 fork-ts-checker-webpack-plugin, 배포 모드에서는 tsc 사용

하는 것이 좋을 것 같다!
