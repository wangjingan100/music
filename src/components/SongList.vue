<template>
  <div class="song">
    <div class="song-top">
      <h3>最新歌曲</h3>
    </div>
    <ul class="song-list">
        <li v-for="value in songs" :key="value.id" class="item">
          <!-- <img :src="value.song.album.picUrl" alt=""> -->
          <!-- 使用懒加载 -->
          <img v-lazy="value.song.album.picUrl" alt="">
          <div>
            <h3>{{value.name}}</h3>
            <p>{{value.song.artists[0].name}}</p>
          </div>
          <!-- <img :src="value.picUrl" alt="">
          <div>
            <h3>{{value.name}}</h3>
            <p>{{value.song.artists[0].name}}</p>
          </div> -->
        </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'SongList',
  props: {
    songs: {
      type: Array,
      default: () => [],
      require: true
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/css/mixin.scss";
@import "../assets/css/variable.scss";
.song{
   // 能够换肤
  @include bg_sub_color();
  .song-top{
    width: 100%;
    height: 84px;
    line-height: 84px;
    @include bg_sub_color();
    border-bottom: 1px solid #ccc;
    padding: 0 20px;
    h3{
      @include font_size($font_large);
      font-weight: bold;
      @include font_color();
    }
  }
  .song-list{
    width: 100%;
    .item{
      height: 200px;
      display: flex;
      align-items: center;
      padding: 0 20px;
      margin-bottom: 20px;
      border-bottom: 1px solid #ccc;
      img{
        width: 150px;
        height: 150px;
        border-radius: 20px;
        margin-right: 20px;
      }
      div{
        h3{
          @include font_size($font_large);
          @include font_color();
        }
        p{
          @include font_size($font_samll);
          @include font_color();
          opacity: 0.6;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>
