<template>
  <div>
    <div class="row">
      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
      <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h1 class="panel-title">Drug Detail</h1>
            <br />
          </div>
          <div class="panel-body">
            <div class="border" style="padding: 15px">
              <form action="index.html" method="post">
                <div class="row">
                  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <b>Name:</b>
                  </div>
                  <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                    {{ drug.name }}
                  </div>
                </div>
                <hr />
                <br />
                <div class="row">
                  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <b>Dose:</b>
                  </div>
                  <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                    {{ drug.dose }}
                  </div>
                </div>
                <hr />
                <br />
                <div class="row">
                  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <b>No. of Package:</b>
                  </div>
                  <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                    {{ drug.package }}
                  </div>
                </div>
                <hr />
                <br />
                <div class="row">
                  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <b>Unit:</b>
                  </div>
                  <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                    {{ drug.unit }}
                  </div>
                </div>
                <hr />
                <br />
                <div class="row">
                  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <b>Total:</b>
                  </div>
                  <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                    {{
                      parseInt(drug.unit.split("x")[1]) * parseInt(drug.package)
                    }}
                  </div>
                </div>
                <hr />
                <br />
                <div class="row">
                  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <b>Image:</b>
                  </div>
                  <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                    <td>
                      <img
                        width="200"
                        v-bind:src="getImgUrl(drug.name)" 
                      />
                    </td>
                  </div>
                </div>
                <hr />
                <br />
                <div class="row">
                  <div class="col-xs-11 col-sm-11 col-md-11 col-lg-11">
                    <button type="button" class="btn btn-info" v-on:click="backbutton">
                      Back to Main
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
    </div>
    <br />
  </div>
</template>

<script>
import drugsJson from "../components/drugs.json";
export default {
  name: "Detail",
  props: [""],
  data() {
    return {
      drug: "",
      total: "",
    };
  },
  created() {
    this.drug = drugsJson[this.$route.params.id];
    console.log(this.drug);
  },
  mounted() {},
  methods: {
      getImgUrl(url) {
    var images = require.context('../assets/img/', false, /\.jpg$/)
    return images('./' + url + ".jpg")
  },
      backbutton(){
          this.$router.push('/')
      }
  },
};
</script>
<style scoped>
h1,
h2 {
  font-weight: normal;
  margin-top: 50px;
  margin-bottom: 50px;
  color: #42b983;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>