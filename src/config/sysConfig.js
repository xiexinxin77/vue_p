import _ from 'underscore'
import fsEnc from '../tools/fs-enc'
import axios from 'axios'
import axiosConfig from '../config/axiosConfig'
import {
    reject
} from 'q';

let sysConfig = {
    k_request(serviceCode, reqData) {
        let that = this;
        return new Promise((resolve, reject) => {
            let data = that.buildReqData(serviceCode, reqData);
            axios.post('/', data, axiosConfig.$axiosCfg).then(ansData => {
                let code = ansData.code;
                let msg = ansData.msg;
                let data = ansData.dataList;
                console.log(reqData);
            })
        })
    },

    /**
     * 构造请求后台数据格式
     */
    buildReqData(serviceCode, params) {
        paramsp['service'] = serviceCode;
        let reqData = {
            "REQUESTS": {
                "PARAMS": params
            }
        };
        return reqData;
    }
}