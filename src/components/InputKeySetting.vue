<template>
  <form @submit="onSubmit">
    <label>
      Key
      <input type="text" @keydown="onKeyDown" :value="keyString" required />
    </label>
    <label>
      Value
      <input type="text" @change="onChange" :value="value" required />
    </label>
    <input type="submit" value="Add" />
  </form>
</template>

<script>
import { detectKeyString } from 'key-string'

export default {
  name: 'InputKeySetting',
  data() {
    return {
      keyString: '',
      value: '',
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      this.$emit('on-submit', this.keyString, 'CopyToClipboard', this.value)
    },

    onKeyDown(e) {
      const keyString = detectKeyString(e)
      if (!keyString.includes('Unknown')) {
        this.keyString = keyString
      }
    },

    onChange(e) {
      this.value = e.target.value
    },
  }
}
</script>

<style scoped>
  form {
    margin-top: 30px;
    background-color: #fff;
  }
</style>
