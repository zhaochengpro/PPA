import { computed } from 'vue';
import { useStore } from 'vuex';
import { Buffer } from 'buffer';

/**
 * 格式化数字 如：6,467
 * @param {*} s
 * @param {*} n 小数位数
 * @returns
 */
export function formatNumber(s, n = 0) {
  s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(n) + '';
  let l = s.split('.')[0].split('').reverse();
  let r = n ? s.split('.')[1] : '';
  let t = '';

  for (let i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 == 0 && i + 1 != l.length ? ',' : '');
  }
  return t.split('').reverse().join('') + (r ? '.' + r : '');
}

/**
 * 格式化account 如：0x780349882723...8498594456
 * @param {*} account
 * @returns
 */
export function formatAccount(account, first, end) {
  if (!account) {
    return '';
  }
  return account.slice(0, first) + '...' + account.slice(-end);
}

export const copyText = (text) => {
  let copyInput = document.createElement('input');
  document.body.appendChild(copyInput);
  copyInput.setAttribute('value', text);
  copyInput.select();
  document.execCommand('copy');
  document.body.removeChild(copyInput);
  return true;
};

export const countDow = (NewYear) => {
  var Now = new Date();
  var sjc = NewYear.getTime() - Now.getTime();
  sjc = sjc / 1000;
  const days = parseInt(sjc / 60 / 60 / 24);
  const hours = parseInt((sjc / 60 / 60) % 24);
  const minutes = parseInt((sjc / 60) % 60);
  const miao = parseInt(sjc % 60);
  return {
    days,
    hours,
    minutes,
    miao,
  };
};

export const shareText = computed(() => {
  const { protocol, hostname, host } = location;
  const store = useStore();
  const account = store.state.web3Modal.account || '';
  return protocol + '//' + host + '?inviter=' + account;
});

export const fixedNumber = (number) => {
  return Number(Number(number).toFixed(5).slice(0, -1));
};

export const formatBuffer = (buffer) => {
  return Buffer.from(buffer).toString('hex');
};

export const getQueryVariable = (name) => {
  const reg = new RegExp("(^|&)" + name+ "=([^&]*)(&|$)", "i");
  const result = window.location.search.substr(1).match(reg);
  if ( result != null ){
     return decodeURI(result[2]);
 }else{
     return null;
 }
}
