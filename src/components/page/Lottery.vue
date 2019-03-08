<template>
 <div>
  <table width="1200" height="50" align="center">
  <tr height="55">
    <td width="600" align="center"><span style="font-size:30px;">【線上抽獎】</span></td>
  </tr>
  </table>
  <form name="form1" id="form1" width="80%">
  <table width="60%" align="center" bgcolor="#aaaaaa">
      <input type="text" size="40" maxlength="46" :value="LotteryData.info.title">
      <div style="margin-bottom:5px">禮物欄</div>
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">禮物名</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="prize in LotteryData.prize" :key="prize.id">
            <th scope="row">{{prize.id}}</th>
            <td>{{prize.name}}</td>
          </tr>
        </tbody>
      </table>
    <tr height="30">
      <td>
        <div>抽獎主題：</div>
      </td>
      <td><div>抽獎人數：<input type="text" v-model="numOfuser" readonly></div></td>
      <td><div>中獎人數：<input type="text" v-model="numOfprize" readonly></div></td>
    </tr>
  </table>
  <table width="60%" align="center" bgcolor="#aaaaaa">
    <tr >
      <td width="50%" valign="top">
        <div style="margin-bottom:5px" >抽獎欄</div>
        <table class="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">人名</th>
              </tr>
            </thead>
        </table>
          <table class="table table-striped table-dark">
            <tbody>
              <tr v-for="userdata in LotteryData.userdata" :key="userdata.id">
                <td scope="row">{{userdata.id}}</td>
                <td>{{userdata.name}}</td>
              </tr>
            </tbody>
          </table>
      </td>
      <td width="50%" valign="top">
        <div style="margin-bottom:5px">中獎欄</div>
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">中獎人</th>
              <th scope="col">禮物名</th>
            </tr>
          </thead>
        </table>
        <table id="prize" class="table table-striped table-dark">
          <tbody>
            <tr v-for="winning in winningList" :key="winning.id">
              <td>{{winning.name}}</td>
              <td>{{winning.prizeName}}</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </table>
   <div align="center"><input class="btn btn-primary" type="button" @click="Lottery" value=" 抽    獎 "></div>
  </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      numOfuser: Object.keys(this.LotteryData.userdata).length,
      numOfprize: Object.keys(this.LotteryData.prize).length,
      winningList: []
    }
  },
  props: {
    LotteryData: {
      type: Object
    }
  },
  methods: {
    Lottery: function () {
      this.winningList = []
      document.getElementById('prize').innerHTML = ''
      var userdata = this.LotteryData.userdata
      var prize = this.LotteryData.prize
      var userdataLen = Object.keys(userdata).length
      var prizeLen = Object.keys(prize).length
      for (var i = 0; i < prizeLen; i++) {
        var ran = Math.floor(Math.random() * userdataLen)
        this.winningList.push({id: userdata[ran].id, name: userdata[ran].name, prizeId: prize[i].id, prizeName: prize[i].name})
      }
    }
  }
}
</script>

<style>

</style>
