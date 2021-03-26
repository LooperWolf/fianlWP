<template>
  <div>
    <div class="container-fluid">
      <h1>List of Drugs</h1>
      <div
        class="border middle align"
        id="potato"
        style="
          padding: 15px;
          background-color: white;
          text-align: center;
          display: grid;
          grid-template-rows: auto;
          justify-items: center;
          align-items: top;
        "
      >
        <table class="table centered">
          <thead >
            <tr >
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Drug Name</th>
              <th scope="col">Dose</th>
              <th scope="col">Package</th>
              <th scope="col">Unit</th>
              <th scope="col">Method</th>
            </tr>
          </thead>
          <tbody >
            <tr v-for="(drug,idx) in drugs" :key="idx" style="background-color:white; ">
                <th>{{idx }}</th>
              <!-- <td><img src="../assets/img/Ibuprofen.jpg" width="50" /></td> -->
              <td><sui-image width="40" v-bind:src="'../assets/img/' + drug.name +'.jpg'" /></td>
              <td>{{ drug.name }}</td>
              <td>{{ drug.dose }}</td>
              <td>{{ drug.package }}</td>
              <td>{{ drug.unit }}</td>
              <td>
                <button type="button" class="btn btn-info" v-on:click="detailbutton(idx)">Detail</button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
import drugsJson from "../components/drugs.json";

export default {
  name: "Main",
  data() {
    return {
      drugs: [],
    };
  },
  created() {
    this.drugs = drugsJson;
    console.log(this.drugs);
  },
  mounted() {},
  methods: {
    detailbutton(potato){
      console.log('potato')
      console.log(potato)
      this.$router.push(`/detail/${potato}`)
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#potato {
  padding: 15px;
  background-color: black;
  text-align: center;
}
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
#alignment {
  background-color: #eeeeee;
  font-family: "Montserrat", sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  align-items: top;
  padding-top: 70px;
}
