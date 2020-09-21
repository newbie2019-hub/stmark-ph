<template>
<div>
  <go-top :bottom="30" :size="60" weight="bold" bg-color="#2d8cf0" :has-outline="false"></go-top>
  </div>
</template>
<script>

import GoTop from '@inotom/vue-go-top';

export default {
 components: {
     GoTop
 }
};
</script>