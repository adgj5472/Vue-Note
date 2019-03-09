<template>
 <div>
  <table width="1200" height="50" align="center">
  <tr height="55">
    <td width="600" align="center"><span style="font-size:30px;">【線上抽獎】</span></td>
  </tr>
  </table>
  <form name="form1" id="form1" width="80%">
  <table width="60%" align="center" bgcolor="#aaaaaa">
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
        <div>抽獎主題： <input type="text" size="40" maxlength="46" :value="LotteryData.info.title"></div>
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
      var userdata = this.LotteryData.userdata
      var prize = this.LotteryData.prize
      var userdataLen = Object.keys(userdata).length
      var prizeLen = Object.keys(prize).length
      var winArray = this.getRandomArray(0, userdataLen - 1, prizeLen)
      for (var i = 0; i < prizeLen; i++) {
        var userIndex = winArray[i]
        this.winningList.push({id: userdata[userIndex].id, name: userdata[userIndex].name, prizeId: prize[i].id, prizeName: prize[i].name})
      }
    },
    getRandomArray: function (minNum, maxNum, n) {
      var rdmArray = [n] // 儲存產生的陣列
      for (var i = 0; i < n; i++) {
        var rdm = 0 // 暫存的亂數
        do {
          var exist = false // 此亂數是否已存在
          rdm = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum // 取得亂數
          // 檢查亂數是否存在於陣列中，若存在則繼續回圈
          if (rdmArray.indexOf(rdm) !== -1) exist = true
        } while (exist) // 產生沒出現過的亂數時離開迴圈
        rdmArray[i] = rdm
      }
      return rdmArray
    }
  }
}
</script>

<style>

</style>
