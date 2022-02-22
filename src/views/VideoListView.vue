<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs12 sm12>
            <v-card
              height="8em"
            >
            </v-card>
          </v-flex>
          <v-flex xs12 sm12>
            <v-list>
              <v-list-item-group v-model="model">
                <v-list-item
                  v-for="(item, id) in items"
                  :key="id"
                  :to="{ path: `/video/${item.id}` }"
                >
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer>
      Video-Haven
    </v-footer>
  </v-app>
</template>

<script>

import axios from 'axios'

export default {
  name: 'VideoListView',
  components: {
  },
  data: () => ({
      items: [],
      model: 1,
  }),
  mounted() {
    let seriesId = this.$route.params.id
    axios
      .get(`${process.env.VUE_APP_SERVER}/video/items/${seriesId}`)
      .then(response => {
        this.items = response.data.map(item => ({
          id: item.id,
          title : item.title,
          videoUrl: item.videoUrl,
          dateUploaded: item.dateUploaded,
          icon: 'mdi-video',
        }))
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }

  v-container {
    margin: 0;
    padding: 0;
  }
</style>
