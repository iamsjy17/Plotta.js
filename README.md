javascript 프로젝트를 시작할 때 필요한 여러가지 기본 세팅들을 포함한 프로젝트입니다.

## 프로젝트 기본 설정

### git

#### git 초기화

```
git init
```

#### .gitignore 생성

```
# npm 디버그 기록
npm-debug.log*

# 프로젝트 의존성
node_modules

# Mac OS 폴더 속성
.DS_Store

# 임시 파일
*.tmp
*~
```

#### 의존성 설정

```
npm init
```

### 걸프와 바벨 설정

> 걸프: 자바스크립트에서 가장 널리 쓰이는 빌드 도구 중 하나
> 바벨: 가장 널리 쓰이는 트랜스 컴파일러.

#### 걸프 설치

gulp cli 설치

```bash
npm install -g gulp-cli
```

걸프 로컬 설치

```bash
npm install gulp@4.0 --save-dev
```

#### 바벨 설치

걸프와 바벨을 함께 사용할 수 있도록 패키지를 설치합니다.

```bash
npm install babel --save-dev
npm install --save-dev gulp-babel@7 babel-core babel-preset-env
npm install --save-dev babel-preset-es2015
```

#### .babelrc 파일 생성

프로젝트에서 바벨을 사용할 때 ES6를 사용한다는 것을 인식하도록 설정합니다.

```json
{
  "presets": ["es2015"]
}
```

#### 프로젝트 구조

걸프와 바벨을 사용하여 ES6 javascript를 ES5로 변환하기 전에 어디에 저장할 지 폴더 구조를 정해보겠습니다.
아래 폴더 구조는 본인 스타일대로 하시면 됩니다.

```
root
    src
      js
    dist
      js
```

#### gulpfile.js 추가

프로젝트 루트에 gulpfile.js를 추가합니다. gulp로 빌드시 어떻게 동작할 지 정의해줍니다.
걸프는 파이프라인 개념으로 작업을 처리합니다. js폴더 아래 모든 javascript 파일들을 es5로 변환하여 dist폴더에 저장합니다.

```js
const gulp = require("gulp");
const babel = require("gulp-babel");

const DIR = {
  SRC: "src",
  DEST: "dist"
};

const PATH = {
  SRC: {
    JS: DIR.SRC + "/js/*.js",
    CSS: DIR.SRC + "/css/*.css",
    HTML: DIR.SRC + "/*.html",
    IMAGES: DIR.SRC + "/images/*"
  },
  DEST: {
    JS: DIR.DEST + "/js",
    CSS: DIR.DEST + "/css",
    HTML: DIR.DEST + "/",
    IMAGES: DIR.DEST + "/images"
  }
};

gulp.task("js", () => {
  return gulp
    .src(PATH.SRC.JS)
    .pipe(babel())
    .pipe(gulp.dest(PATH.DEST.JS));
});
```

### eslint 설정

#### eslint 설치

```
npm install -g eslint
```

#### eslint 설정

```
eslint --init
```

위와 같이 명령어를 입력하면 이제 Command Line 대화형으로 프로젝트를 설정하게 됩니다.

저는 React를 사용하지 않고, Json형식의 파일로, 그리고 Airbnb 스타일로 linting을 적용한다고 답하였습니다.

```
How would you like to configure ESLint? Use a popular style guide
Which style guide do you want to follow? Airbnb (https://github.com/airbnb/javascript)
Do you use React? No
What format do you want your config file to be in? JSON
```

#### gulp 연동

```
npm install --save-dev gulp-eslint
```

#### gulpfile.js 수정

eslint를 빌드시에 자동 적용시키기 위해 gulpfile.js를 수정합니다.
테스트 코드로 의미없는 function이나 변수를 만들었었다면 error가 발생하는 것을 보실 수 있을겁니다... 저에요..

```js
...
const eslint = require('gulp-eslint');

...

gulp.task('default', () => {
  gulp
    .src(PATH.SRC.JS)
    .pipe(eslint())
    .pipe(eslint.format());

  return gulp
    .src(PATH.SRC.JS)
    .pipe(babel())
    .pipe(gulp.dest(PATH.DEST.JS));
});

```
