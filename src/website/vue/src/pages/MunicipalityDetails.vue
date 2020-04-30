<template>
  <b-container class="p-4" fluid v-if="feature">
    <b-row>
      <b-col md="6" lg="6" cols="12" class="details-column pb-4">
        <b-card>
          <b-row class="pt-2 pb-2" no-gutters align-v="center">
            <b-col cols="auto" class="mr-1">
              <i class="material-icons">insert_chart_outlined</i>
            </b-col>
            <b-col>
              <h4 class="font-weight-bold">{{ feature.properties.name }}</h4>
            </b-col>
          </b-row>

          <b-row class="p-2">
            <b-col>
              Decessi Marzo 2020:
              {{ feature.properties.deaths }}
              ({{feature.properties.ratio * 100}}%)
            </b-col>
          </b-row>

          <b-row class="p-2">
            <b-col>Decessi Marzo 2015-19: {{ feature.properties.avgDeaths }}</b-col>
          </b-row>

          <b-row class="p-2">
            <b-col>Differenza: {{feature.properties.delta }}</b-col>
          </b-row>

          <b-row class="p-2">
            <b-col>Popolazione: {{ feature.properties.population }}</b-col>
          </b-row>

          <b-row class="p-2">
            <b-col>Pecentuale decessi su popolazione: {{ feature.properties.mortality }}</b-col>
          </b-row>
        </b-card>
      </b-col>

      <b-col md="4" lg="4" cols="12" class="map-colum">
        <Map
          :width="'auto'"
          :height="'300px'"
          :legend="false"
          :center="[feature.geometry.coordinates[1], feature.geometry.coordinates[0]]"
          :zoom="12"
        ></Map>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col xs="12" lg="6">
        <b-card>
          <line-chart :chartData="chartData[0].data" :options="chartData[0].options"></line-chart>
        </b-card>
      </b-col>
      <b-col xs="12" lg="6">
        <b-card>
          <canvas
            id="overlay"
            width="600"
            height="400"
            style="position:absolute;pointer-events:none;"
          ></canvas>
          <line-chart :chartData="chartData[1].data" :options="chartData[1].options"></line-chart>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Map from "../components/Map";
import LineChart from "../components/LineChart";
import { ChartService } from "../services/mock/ChartService";

export default {
  components: {
    Map,
    LineChart
  },
  data() {
    return {
      feature: null,
      geoJson: {},
      coordinates: [],
      chartData: []
    };
  },

  async created() {
    ChartService.getData().then(data => {
      this.chartData = data;
    });

    const istatId = this.$route.params.istatId;

    const response = await fetch(
      "https://raw.githubusercontent.com/ioconto/covid19/master/opendata/current/it-total-deaths.json"
    );
    this.geoJson = await response.json();
    this.feature = this.geoJson.features.find(
      feature => feature.properties.istatId === istatId
    );

    this.coordinates = this.feature.geometry.coordinates;
  },

  watch: {
    async $route() {
      const istatId = this.$route.params.istatId;
      const response = await fetch(
        "https://raw.githubusercontent.com/ioconto/covid19/master/opendata/current/it-total-deaths.json"
      );
      const geoJson = await response.json();
      this.feature = geoJson.features.find(
        feature => feature.properties.istatId === istatId
      );
    }
  }
};
</script>

<style scoped>
/* .small {
  max-height: 200px;
  margin: 0;
} */
</style>