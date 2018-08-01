<template>
  <form @submit="onSubmit">
    <div>
      <label>
        Key<br>
        <input type="text" @keydown="onKeyDown" :value="keyString" required class="input" />
      </label>
    </div>
    <div>
      <label>
        Value<br>
        <input type="text" @change="onChange" :value="value" required class="input" /><br>
        <p>${title} and ${url} variables are available.</p>
      </label>
    </div>
    <div>
      <input type="submit" value="Add" class="submit" />
    </div>
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
    padding: 20px 0;
    background-color: #fff;
  }
  div {
    width: 798px;
    margin: 0 auto;
    padding: 20px 0;
  }
  .input {
    width: 100%;
  }
  .submit {
    padding: 5px 20px;
    border: 2px solid #6D9EE1;
    border-radius: 5px;
    background-color: #6D9EE1;
    color: #fff;
  }
  p {
    color: #888;
  }
</style>
