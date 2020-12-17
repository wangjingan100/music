// 这个js文件就是专门管理请求各种接口地址的
import Network from './network'
// 1.获取banner数据
export const getBanner = () => Network.get('banner?type=2')
// 2. 获取推荐歌单数据limit=6是获取6条数据
export const getPersonalized = () => Network.get('personalized?limit=6')
// 3. 获取最新专辑
export const getNewAblunm = () => Network.get('album/newest')
// 4. 获取推荐新音乐
export const getNewSong = () => Network.get('personalized/newsong')
