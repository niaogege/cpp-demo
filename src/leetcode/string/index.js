/*
 * @Author: Chendapeng
 * @Date: 2021-09-04 20:11:01
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-01-11 21:02:47
 * @Description: 字符串滑动窗口
 */

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  if (s && s.length <= 1) return 1
  s = s.split('')
  let max = 0
  let arr = [] // 滑动的窗口
  for(let i = 0; i < s.length;i++) {
      let cur = s[i]
      arr.push(cur)
      let index = arr.indexOf(cur)
      if (index > -1) {
        arr.splice(0, index + 1)
      }
      max = Math.max(max, arr.length)
  }
  return max
};

// https://leetcode-cn.com/problems/permutation-in-string/
/**
 * 
 * 输入：s1 = "ab" s2 = "eidbaooo"
 * 输出：true
 * 解释：s2 包含 s1 的排列之一 ("ba").
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
  // 找到s1的全排列 组成数组
  // 
};

var addBinary = function(a, b) {
  let maxLen = Math.max(a.length,b.length)
  a = a.padStart(a, '0')
  b = b.padStart(b, '0')
  let flag = 0
  let res = ''
  let i = maxLen - 1
  while(i >= 0) {
      flag = Number(a[i]) + Number(b[i]) + flag
      res = res + flag % 10
      flag = Math.floor(flag/10)
      i--
  }
  if(flag == 1) {
      res = '1' + res
  }
  return res
};
addBinary('1', '99')


apm_webnetworkVêH~A{"dimensions":{"url":"/web-config/api/jc/queryAllData","type":"fetch","status":"200","result":"success","method":"get"},"params":{"originUrl":"/web-config/api/jc/queryAllData?app=web&group=wap&key=ActivityWidget","request":"{}","response":"{}","networkType":"unknown","effectiveType":"unknown"},"metrics":{"duration":76}}apm_webnetwork0êH~${"dimensions":{"url":"https://m.ximalaya.com/revision/time","type":"xhr","status":"200","result":"success","method":"GET"},"params":{"originUrl":"https://m.ximalaya.com/revision/time","request":"{}","response":"{}","networkType":"unknown","effectiveType":"unknown"},"metrics":{"duration":27}}apm_webnetwork/êH~8{"dimensions":{"url":"/web-support/api/profile/queryCurrentUserInfo","type":"fetch","status":"200","result":"success","method":"get"},"params":{"originUrl":"/web-support/api/profile/queryCurrentUserInfo","request":"{}","response":"{}","networkType":"unknown","effectiveType":"unknown"},"metrics":{"duration":34}}apm_webnetwork-êH~{"dimensions":{"url":"/revision/help/location","type":"fetch","status":"200","result":"success","method":"get"},"params":{"originUrl":"/revision/help/location","request":"{}","response":"{}","networkType":"unknown","effectiveType":"unknown"},"metrics":{"duration":22}}apm_webnetwork(êH~:{"dimensions":{"url":"/tdk-web/seo/getTdk","type":"fetch","status":"200","result":"success","method":"get"},"params":{"originUrl":"/tdk-web/seo/getTdk?typeName=rank&uri=%2Ftop%2Fhotplay%2Fall&tdkType=wap","request":"{}","response":"{}","networkType":"unknown","effectiveType":"unknown"},"metrics":{"duration":100}}{"dt":"browser","bid":30,"page_url":"https://m.ximalaya.com/top/hotplay/all","ext":{"appName":"ximalaya-mobile","sdkVersion":"2.4.11","sampleRate":1},"deviceId":"d935d658-950c-424b-a9e8-82cc7436e53e","clientSendTime":1641895488686}


apm_webpageêH~9{"metrics":{"firstByte":27,"dns":0,"tcp":0,"ssl":0,"ttfb":13,"contentTime":20,"dom":682,"domComplete":521,"resourceLoad":288,"load":974,"fcp":461,"startTime":1641895487152},"params":{"networkType":"unknown","effectiveType":"unknown"},"dimensions":{"pageName":"/top/:clusterCode/:categoryCode","protocol":"https"}}{"dt":"browser","bid":30,"page_url":"https://m.ximalaya.com/top/hotplay/all","ext":{"appName":"ximalaya-mobile","sdkVersion":"2.4.11","sampleRate":1},"deviceId":"d935d658-950c-424b-a9e8-82cc7436e53e","clientSendTime":1641895489686}ç