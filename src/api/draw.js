import request from '@/utils/http';

const http = (params) => {
  return request({ ...params, baseURL: import.meta.env.VITE_LOTTERY_API_URL });
};

// 抽奖
export function draw(data) {
  return http({
    url: '/lottery_backend/draw',
    method: 'post',
    data,
  });
}

// 提取ETH
export function claimETH(data) {
  return http({
    url: '/lottery_backend/claimETH',
    method: 'post',
    data,
  });
}

// 提取代币
export function claimToken(data) {
  return http({
    url: '/lottery_backend/claimToken',
    method: 'post',
    data,
  });
}

// 提取积分
export function claimScore(data) {
  return http({
    url: '/lottery_backend/claimScore',
    method: 'post',
    data,
  });
}

// 获取在线用户数量
export function onlineAmount(data) {
  return http({
    url: '/lottery_backend/onlineAmount',
    method: 'post',
    data,
  });
}

// 获取当前账户的所有抽奖金额
export function getAccountInfo(data) {
  return http({
    url: '/lottery_backend/getAccountInfo',
    method: 'post',
    data,
  });
}

// 获取抽奖记录
export function records(data) {
  return http({
    url: '/lottery_backend/records',
    method: 'post',
    data,
  });
}
