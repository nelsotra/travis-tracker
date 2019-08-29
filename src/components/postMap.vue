<template>
  <div class="postMap" :id="mapName"></div>
</template>

<script>
export default {
  props: ['name', 'itemsList'],
  data: function () {
    return {
      mapName: this.name + "-map",
      items: this.itemsList
    }
  },
  methods: {
      isNumber(n) {
          return !isNaN(parseFloat(n)) && !isNaN(n - 0) 
      }
  },
  mounted: function () {
    const bounds = new google.maps.LatLngBounds();
    const element = document.getElementById(this.mapName)
    var mapCenter = null
    for (var key in this.items) {
        if (this.isNumber(this.items[key].latitude) && this.isNumber(this.items[key].longitude) ){
            mapCenter = this.items[key]
            break
        }
    }
    
    if (mapCenter === null){
        return
    }
    const options = {
        center: new google.maps.LatLng(mapCenter.latitude, mapCenter.longitude)
    }
    const map = new google.maps.Map(element, options);

    for (var key in this.items) {
        const position = new google.maps.LatLng(this.items[key].latitude, this.items[key].longitude);
        const marker = new google.maps.Marker({
            position,
            map
        });
        map.fitBounds(bounds.extend(position))
    };
  }
};
</script>

<style scoped>
.postMap {
  width: 800px;
  height: 600px;
  margin: 0 auto;
  background: gray;
}
</style>
