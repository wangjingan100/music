<template>
  <div class="recommend">
    <ScrollView>
      <div>
        <Banner :banners="banners"></Banner>
        <Personalized :personalized="personalized" :title="'推荐歌单'"></Personalized>
        <Personalized :personalized="albumns" :title="'最新专辑'"></Personalized>
        <SongList :songs="songs"></SongList>
      </div>
    </ScrollView>
  </div>
</template>
<script>
import { getBanner, getPersonalized, getNewAblunm, getNewSong } from '../api/index'
import Banner from '../components/Banner'
import Personalized from '../components/Personalized'
import SongList from '../components/SongList'
import ScrollView from '../components/ScrollView'

export default {
  name: 'Recommend',
  created () {
    // 获取banner
    getBanner()
      .then((data) => {
        // console.log(data)
        this.banners = data.banners
      })
      .catch(function (err) {
        console.log(err)
      })
      // 获取歌单
    getPersonalized()
      .then((data) => {
        // console.log(data)
        this.personalized = data.result
      })
      .catch(function (err) {
        console.log(err)
      })
    getNewAblunm()
      .then((data) => {
        // console.log(data.albums.splice(0, 6))
        this.albumns = data.albums.splice(0, 6)
      })
      .catch(function (err) {
        console.log(err)
      })
    getNewSong()
      .then((data) => {
        // console.log(data)
        this.songs = data.result
      })
      .catch(function (err) {
        console.log(err)
      })
  },
  data () {
    return {
      banners: [],
      personalized: [],
      albumns: [],
      songs: []
    }
  },
  components: {
    Banner,
    Personalized,
    SongList,
    ScrollView
  }
}
</script>
<style scoped lang="scss">
.recommend{
  margin-top: 184px;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
