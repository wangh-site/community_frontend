import request from '@/utils/request'

export function getPromotion(){
    return request({
        url: '/promotion/showPromotion',
        method:'get'
    })
}