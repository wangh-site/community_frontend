import request from '@/utils/request'

// 获取帖子列表
export function getList(pageNo, size, tab) {
    return request(({
      url: '/post/list',
      method: 'get',
      params: { pageNo: pageNo, size: size, tab: tab }
    }))
  }
// 发布
export function post(topic) {
  return request({
    url: '/post/create',
    method: 'post',
    data: topic
  })
}
// 浏览内容
export function getTopic(id) {
  return request({
    url: `/post`,
    method: 'get',
    params: {
      id: id
    }
  })
}