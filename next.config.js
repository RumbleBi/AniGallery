module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => 'king-nyaa-deploy',
  // exportPathMap: () => ({
  //   '/': { page: '/' },
  //   boards: { page: '/boards' },
  //   new: { page: '/boards/new' },
  //   '/404': { page: '/404' },
  //   fleamarket: { page: '/fleamarket' },
  //   login: { page: '/fleamarket/login' },
  //   main: { page: '/fleamarket/main' },
  //   mypage: { page: '/fleamarket/mypage' },
  //   buying: { page: '/fleamarket/mypage/buying' },
  //   changePassword: { page: '/fleamarket/mypage/changePassword' },
  //   pickedList: { page: '/fleamarket/mypage/pickedList' },
  //   pointInfo: { page: '/fleamarket/mypage/pointInfo' },
  //   selling: { page: '/fleamarket/mypage/selling' },
  //   payment: { page: '/fleamarket/payment' },
  //   reg: { page: '/fleamarket/reg' },
  //   signin: { page: '/fleamarket/signin' },
  // }),
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}
