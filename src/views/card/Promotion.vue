<template>
  <div>
    <el-card class="box-card" shadow="never">
    <div slot="header">
      <span>🥂 推广</span>
    </div>
    <div>
      <p v-for="(item, index) in promotion" :key="index" class="block">
        <a :href="item.link" target="_blank">{{ item.title }}</a>
      </p>
    </div>
  </el-card>
</div>
</template>

<script>
import { getPromotion } from "@/api/promotion"

export default {
  name: "TopicList",
  data() {
    return {
        promotion: []
    };
  },

  created(){
    this.fetchPromotion()
  },

  methods: {
    async fetchPromotion(){
      getPromotion().then((value) => {
        const { data } = value
        this.promotion = data
      })
    }
  }
};
</script>
