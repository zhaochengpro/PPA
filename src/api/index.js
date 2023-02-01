import request from '@/utils/http';

const http = (params) => {
  return request({ ...params, baseURL: import.meta.env.VITE_API_URL });
};

export function listenTransaction(data){
  return http({
    url: '/asoh/score/listenTransaction',
    method: 'post',
    data,
  });
}

// 列举每周贡献分排名
export function listScorePerWeekRanking() {
  return http({
    url: '/asoh/score/listScorePerWeekRanking',
    method: 'get',
  });
}

// 取消代币提现
export function unconfirmTokensBill(data) {
  return http({
    url: '/asoh/score/unconfirmTokensBill',
    method: 'post',
    data,
  });
}

// 商店PassCard授权交易
export function approvePassCard(data) {
  return http({
    url: '/asoh/score/approvePassCard',
    method: 'post',
    data,
  });
}

// 提现授权交易
export function approveERC20(data) {
  return http({
    url: '/asoh/score/approveERC20',
    method: 'post',
    data,
  });
}

// 新增邀请关系
export function updateInvitation(data) {
  return http({
    url: '/asoh/score/updateInvitation',
    method: 'post',
    data,
  });
}

// 查询tokenId的质押信息
export function queryDepositedByTokenId(params) {
  return http({
    url: '/asoh/score/queryDepositedByTokenId',
    method: 'get',
    params,
  });
}

// 查询用户余额
export function queryBalanceByAccount(params) {
  return http({
    url: '/asoh/score/queryBalanceByAccount',
    method: 'get',
    params,
  });
}

// 根据地址查询所有质押信息
export function listAllDepositByAccount(params) {
  return http({
    url: '/asoh/score/listAllDepositByAccount',
    method: 'get',
    params,
  });
}

// 根据拍卖金额排名
export function rankingByContribution({ pageSize, currrentPage, price, account }) {
  return http({
    url: `/asoh/auction/rankingByContribution?currentPage=${currrentPage}&pageSize=${pageSize}&price=${price}&account=${account}`,
    method: 'get',
  });
}
// 获取奖池信息
export function getPool() {
  return http({
    url: '/asoh/score/getPool',
    method: 'get',
  });
}
// 获取所有的商品
export function listAllPropsByPage() {
  return http({
    url: '/asoh/props/listAllPropsByPage',
    method: 'get',
  });
}

// 获取所有的邀请成员
export function getTotalMembers(params) {
  return http({
    url: '/asoh/score/getTotalMembers',
    method: 'get',
    params,
  });
}

// 获取拍卖成功和失败的人数
export function getWinnerAndLoserAmount({ currrentPrice }) {
  console.log();
  return http({
    url: `/asoh/auction/getWinnerAndLoserAmount?currentPrice=${currrentPrice}`,
    method: 'get',
  });
}

// 获取用户的邀请人
export function getInviterByAccount({ account }) {
  return http({
    url: `/asoh/score/getInviterByAccount?account=${account}`,
    method: 'get',
  });
}

// 获取积分的来源记录
export function getScoreRec(params) {
  return http({
    url: '/asoh/score/getScoreRec',
    method: 'get',
    params,
  });
}

// 质押
export function deposit(data) {
  return http({
    url: '/asoh/score/deposit',
    method: 'post',
    data,
  });
}

// 质押二次未确认
export function unconfirmDeposit(data) {
  return http({
    url: '/asoh/score/unconfirmDeposit',
    method: 'post',
    data,
  });
}

// 质押量积分
export function rankingByDepositAmountAndPage(params) {
  return http({
    url: '/asoh/score/rankingByDepositAmountAndPage',
    method: 'get',
    params,
  });
}

// 返回总贡献分排名
export function listTotalScoreRanking() {
  return http({
    url: '/asoh/score/listTotalScoreRanking',
    method: 'get',
  });
}
