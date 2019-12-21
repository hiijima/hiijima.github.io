<template>
  <div class="center">
    <img src="@/assets/binary-2910663_1920.jpg" height="240">

    <h1>Hioroaki Iijima</h1>
    <p>Software Engineer</p>
  </div>
</template>

<script>
</script>

<style>
.center {/*親div*/
  position: relative;/*相対配置*/
}

.center h1 {
  position: absolute;/*絶対配置*/
  color: white;/*文字は白に*/
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  margin:0;
  padding:0;
  font-weight: bold; /*太字に*/
  font-size: 2em;/*サイズ2倍*/
  font-family :Quicksand, sans-serif;/*Google Font*/
}

.center p {
  position: absolute;/*絶対配置*/
  color: white;/*文字は白に*/
  top: 70%;
  left: 50%;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  margin:0;
  padding:0;
  font-size: 1em;/*サイズ2倍*/
  font-family :Quicksand, sans-serif;/*Google Font*/
}

.center img {
  width: 100%;
}
</style>
