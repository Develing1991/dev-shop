/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "suhan_lee_deploy_id",
  // // 정적 파일 빌드 직접 지정
  // exportPathMap: () => ({
  //   "/": { page: "/" },
  //   "/boards": { page: "/boards" },
  //   "/404": { page: "/404" },
  // }),
  // 정적파일 로지컬
  exportPathMap: function (defaultPathMap) {
    let staticPathMap = {};
    for (const [key, value] of Object.entries(defaultPathMap)) {
      if (!key.includes("[") && !key.includes("]")) {
        staticPathMap = {
          ...staticPathMap,
          [key]: value,
        };
      }
    }
    console.log(staticPathMap);

    return staticPathMap;
  },
};

module.exports = nextConfig;
