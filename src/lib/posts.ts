import type { Post } from "@/types/post";

export const posts: Post[] = [
  {
    postId: "start-blog",
    title: "블로그 시작! 계획과 구조",
    tags: [],
    thumbnail: "https://placehold.co/400x300?text=Post+Image",
    content: `
<p align="center">
  <img src="https://velog.velcdn.com/images/cxaosdev/post/bf2ca8c7-1838-44d6-b0a2-2bc92f27bfd2/image.png" />
</p>

> 먼저 폰트와 색상을 정했다. 사실상 마크다운으로된 블로그 내용 부분이 주가 되는 페이지기때문에 헤더에만 쓰일거 같지만 일단 마음에 드는 폰트를 골랐다.

## 계획
일단 Next로 처음부터 끝까지 다하기로 마음을 먹었으니 로직을 그려봐야 했다.

### 상세 페이지

1. 사용자가 \`/posts/first-post\`에 접속
→ \`posts/[slug]/page.tsx\` 이 렌더링되며, \`first-post\`는 \`params.slug\`로 전달됨

2. \`page.tsx\`는 서버 컴포넌트에서 \`params.slug\`를 이용해 \`/api/posts/first-post\`로 API 요청을 보냄
→ 요청은 \`api/posts/[slug]/route.ts\`에서 처리됨

3. API 라우트(\`route.ts\`)에서는 전달받은 slug에 해당하는 글을 찾아 JSON으로 반환
→ 백엔드 연동 전에는 로컬 더미 데이터 사용할 예정
 
4. \`page.tsx\`에서는 응답 데이터를 받아 마크다운 파서로 HTML로 변환하고, 상세 페이지 렌더링.


### 에디터
\`toast-ui editor\`를 활용해 마크다운 형식으로 글을 작성할 수 있도록 구성할 예정. 작성한 글은 \`/api/posts\`로 POST 요청을 보내 저장하게 하고, 이후 DB에 저장될 구조.. \`app/editor/page.tsx\` 파일에서 관리되며 마크다운 입력, 프리뷰, 저장 기능도 천천히 넣어보자.

이 계획을 가지고 파일 구조를 짰다
![](https://velog.velcdn.com/images/cxaosdev/post/3e54702a-2277-448d-9ce2-ca821a806d13/image.png)

굳 스타트!
    `,
  },
  {
    postId: "why-next",
    title: "왜 Next일까?",
    tags: [],
    thumbnail: "https://placehold.co/400x300?text=Post+Image",
    content: `
## 왜 Next일까?

_일단 Next가 뭔지 알아보자!_  
## Next.js란?
React 기반의 웹 프레임워크다! React에 없는 기능들을 보완해주고, 프론트엔드부터 백엔드까지 한 프로젝트 안에서 다룰 수 있는 풀스택 프레임워크다!

### 파일 기반 라우팅 (File-based Routing)
React에서는 \`react-router-dom\`을 써서 직접 라우팅을 설정해야 하지만, Next.js는 디렉토리 구조만으로 라우팅을 자동화한다!  
\`pages/\` 디렉토리나 \`app/\` 디렉토리에 파일을 만들면 자동으로 URL 라우트가 생성된다.

    pages/blog.tsx → /blog

### 서버 사이드 렌더링(SSR)과 정적 생성(SSG)
\`getServerSideProps()\` → 요청마다 HTML을 서버에서 생성 (SSR)  
\`getStaticProps()\` → 빌드 타임에 HTML을 미리 만들어둠 (SSG)  
\`ISR(Incremental Static Regeneration)\` 지원 → SSG지만 정기적으로 재생성 가능!

\`React\`는 기본적으로 \`클라이언트 렌더링(CSR)\`만 지원하기 때문에 SEO에 약하다.  
반면 \`Next.js\`는 상황에 따라 \`SSR\`/\`SSG\`/\`CSR\`을 조합할 수 있어 유연하다!

### API Routes
\`pages/api/hello.ts\`처럼 API를 만들 수 있다!  
별도 백엔드 없이, Next.js 안에서 바로 작성 가능하다.

### 이미지 최적화
\`next/image\` 컴포넌트를 쓰면 자동으로 사이즈 조절, 웹 최적화, lazy loading 등 제공

### App Router
\`app/\` 디렉토리 기반으로 구성: 레이아웃 중첩, 서버 전용 컴포넌트, 로딩 처리 등 더 유연하게 가능

### Middleware (미들웨어)
페이지가 뜨기 전에 사용자의 요청을 먼저보고  
보안, 리다이렉트, 조건 검사 같은 작업을 처리할 수 있게 해준다.

### 풀스택 지원 (서버 액션 & 데이터베이스 연결)
\`server actions\`: 폼 처리나 서버 코드를 백엔드 없이 쓸 수 있게 해줌. 함수에 \`use server\`만 붙이면 자동으로 서버에서 실행된다.  
\`Edge Functions\`: 지리적으로 가까운 서버(엣지)에서 코드가 실행되도록 해주는 서버리스 함수

### 서버리스 환경?
_서버를 직접 운영하지 않아도 코드만 올리면 자동으로 실행해주는 환경_

서버를 따로 구축하거나 관리할 필요 없이 \`Next.js\` + \`Vercel\` 같이 서버리스 플랫폼 위에 코드를 올리면 끝!

## Why \`Next\`?
_왜 나는 Next로 기술 블로그를 만들기로 했는가_

Next.js는 App Router 기반의 아키텍처를 제공하며, SSR, CSR, SSG 등을 통합적으로 지원한다. 기술 블로그라는 주제로서 페이지 생성과 데이터 관리, 렌더링 방식 등 프론트엔드 개발의 핵심 흐름을 모두 실습해볼 수 있을 것!

**SEO 친화적인 SSR 기술 적용**  
기술 블로그 같은 문서 서비스는 초기 로딩 속도와 검색 최적화(SEO)가 중요하다. Next.js는 페이지를 서버에서 미리 렌더링할 수 있어 검색엔진에 유리하며, 이는 블로그 포스트 노출에 직접적인 영향을 준다.  
~~엄청나게 유명한 블로거가 될건 아니지만 장점이라면 장점 아닐까 ㅎ~~

**확장성과 실용성**  
블로그는 CRUD(글 생성, 조회, 수정, 삭제), 라우팅, 마크다운 렌더링, 에디터 등이 필요하다.  
Next.js 14은 서버 액션, 서버 컴포넌트 등 기능으로 이것들의 구현을 간단하게 가능하게 한다.

**배포**  
Next.js는 Vercel을 통해 무료 배포가 쉽고 빠르며, 실제 서비스처럼 운영할 수 있다.
    `,
  },
  {
    postId: "dummy1",
    title: "테스트",
    tags: [],
    thumbnail: "https://placehold.co/400x300?text=Post+Image",
    content: `# 테스트 
  ### 테스트`,
  },
  {
    postId: "dummy2",
    title: "테스트2",
    tags: [],
    thumbnail: "https://placehold.co/400x300?text=Post+Image",
    content: `# 테스트
  ### 테스트`,
  },
  {
    postId: "dummy3",
    title: "테스트3",
    tags: [],
    thumbnail: "https://placehold.co/400x300?text=Post+Image",
    content: `# 테스트 
  ### 테스트`,
  },
];

export function getPostByPostId(postId: string) {
  return posts.find((post) => post.postId === postId);
}

export function getAllPosts() {
  return posts;
}
