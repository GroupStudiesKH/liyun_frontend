import axios from "axios";

// let devEnv = ["beta.7cplay.com", "7cplay.com", "webproxy.7cplay.com"].indexOf(location.hostname) == -1 ? true : false;
// let apiUrl = devEnv ? "https://apinew.7cplay.com/" : "https://apinew.7cplay.com/";
let apiUrl = "https://admin.liyun.hanyuan.info/api/";

//Cookie ExpireDate
let expire = new Date();
expire.setTime(expire.getTime() + 7 * 24 * 60 * 60 * 1000);
let expireString = "expires=" + expire.toGMTString();


//分散出去的API，建議改寫到測試環境
const homeUrl = "http://localhost:5173/";


const scGet = (url) => {
  return {
    url: url,
    method: "GET",
    headers: {
      "Cache-Control": "no-cache",
      "Content-type": "application/json",
      Server_Token: getServerToken(),
    },
  };
};

const scPost = (url, params, isJsonContent = true) => {
  const headers = {
    "Cache-Control": "no-cache",
    Server_Token: getServerToken(),
  };
  if (isJsonContent) headers["Content-type"] = "application/json";
  return {
    url: url,
    method: "POST",
    headers: {
      "Cache-Control": "no-cache",
      Server_Token: getServerToken(),
    },
    data: params,
  };
};

const scPatch = (url, params) => {
  return {
    url: url,
    method: "PATCH",
    headers: {
      "Cache-Control": "no-cache",
      "Content-type": "application/json",
      Server_Token: getServerToken(),
    },
    data: params,
  };
};

const scPut = (url, params) => {
  return {
    url: url,
    method: "PUT",
    headers: {
      "Cache-Control": "no-cache",
      "Content-type": "application/json",
      Server_Token: getServerToken(),
    },
    data: params,
  };
};

const scDelete = (url, params) => {
  return {
    url: url,
    method: "DELETE",
    headers: {
      "Cache-Control": "no-cache",
      "Content-type": "application/json",
      Server_Token: getServerToken(),
    },
    data: params,
  };
};

const scOption = (url, params) => {
  return {
    url: url,
    method: "OPTION",
    headers: {
      "Cache-Control": "no-cache",
      "Content-type": "application/json",
      Server_Token: getServerToken(),
    },
    data: params,
  };
};

const checkServerResponse = (responseData) => {
  if (!responseData.result_status) {
    // Error response
    throw responseData.result_message;
  }
  return responseData.result_content;
};


//取得banner
const getBanners = async () => {
  const requestConfig = scGet(apiUrl + "api/Sliders");
  try {
    const response = await axios(requestConfig);
    return checkServerResponse(response.data);
  } catch (error) {
    throw error;
  }
};

//訂單跑馬燈
const getNewOrderList = async () => {
  const requestConfig = scGet(apiUrl + "api/NewOrderList");
  try {
    const response = await axios(requestConfig);
    return checkServerResponse(response.data);
  } catch (error) {
    throw error;
  }
};

//解除綁定LINE Notify
const unbindLineNotify = async () => {
  const requestConfig = scDelete(apiUrl + "api/LineNotifyAccessToken");
  try {
    const response = await axios(requestConfig);
    return checkServerResponse(response.data);
  } catch (error) {
    throw error;
  }
};


//技能一鍵上下架
const setCertTradingStatus = async (certId, isEnable) => {
  const param = {
    CertId: certId,
    IsEnable: isEnable,
  };
  const requestConfig = scPut(apiUrl + "api/Certification/SetEnable", param);
  try {
    const response = await axios(requestConfig);
    return checkServerResponse(response.data);
  } catch (error) {
    throw error;
  }
};


export default {
  getBanners,
  getNewOrderList,
  unbindLineNotify,
  setCertTradingStatus,
};
