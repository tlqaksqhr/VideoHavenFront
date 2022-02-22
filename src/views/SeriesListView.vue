<template>
  <v-app>
    <v-app-bar app>
      <h3>시리즈 목록</h3>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col
            v-for="series in this.seriesList"
            :key="series.id"
            cols="4">
            <v-card 
              min-height="10em" 
              height="10em"
              :to="{ path: `/series/${series.id}` }"
            >
              <v-img min-height="8.5em" max-height="8.5em" min-width="4.5em" src="https://picsum.photos/id/11/500/300" />
              <h5 min-height="1em" max-height="1em" min-width="0.5em">{{series.title}}</h5>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import axios from 'axios'

export default {
  name: 'SeriesListView',
  components: {
  },
  data() {
    return {
      seriesList: []
    }
  },
  mounted() {
    axios
      .get(`${process.env.VUE_APP_SERVER}/video/series/all`)
      .then(response => {
        this.seriesList = response.data
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style lang="scss">
</style>
