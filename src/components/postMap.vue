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
    //Checking to make sure the latitude and longitude are actual numbers
      isNumber(n) {
          return !isNaN(parseFloat(n)) && !isNaN(n - 0) 
      }
  },
  mounted: function () {
    const bounds = new google.maps.LatLngBounds();
    const element = document.getElementById(this.mapName)

    //Need a center for the map, so this iterates over the items looking for the first valid latitude/longitude and uses that
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

    //Once we have a center, we go through the list again and add each point with a valid lat/longitude to the map
    for (var key in this.items) {
        if (this.isNumber(this.items[key].latitude) && this.isNumber(this.items[key].longitude) ){
          const position = new google.maps.LatLng(this.items[key].latitude, this.items[key].longitude);
          const marker = new google.maps.Marker({
              position,
              map
          });

          map.fitBounds(bounds.extend(position))
        }   
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
