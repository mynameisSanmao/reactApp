/*
 * @Author: Sanmao
 * @Date: 2020-10-28 19:59:31
 * @LastEditors: Sanmao
 * @LastEditTime: 2020-10-28 20:08:53
 * @Descripttion: 
 */
export default {
    formateDate(timer) {
        if (!timer) {
            return ''
        }
        let date = new Date(timer)
        return date.getFullYear() + '-' + (date.getMonth()<9?'0'+(date.getMonth()+1):(date.getMonth()+1)) + '-' + date.getDate() + ' ' +date.getHours() + ':' + (date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes()) + ':' + date.getSeconds()
    }
}