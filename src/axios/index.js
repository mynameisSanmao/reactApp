/*
 * @Author: Sanmao
 * @Date: 2020-10-28 20:19:14
 * @LastEditors: Sanmao
 * @LastEditTime: 2020-10-30 15:36:05
 * @Descripttion: 
 */
import JsonP from 'jsonp'
export default class Axios {
    static jsonP(options) {
        new Promise((resolve, reject) => {
            JsonP(options.url, { param: 'callback' }, function (err,res) {
                
            })
        })
    }
}