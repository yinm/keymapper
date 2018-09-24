<template>
  <form @submit="onSubmit">
    <div>
      <label>
        <p class="label">Key</p>
        <input
          :value="keyString"
          type="text"
          required
          class="input"
          @keydown="onKeyDown" >
      </label>
    </div>
    <div>
      <label>
        <p class="label">Action</p>
        <select
          :value="actionType"
          type="select"
          required
          class="input"
          @change="onChangeActionType">
          <option
            disabled
            value="">Please select one</option>
          <option 
            v-for="(action, key) in actions" 
            :key="key">
            {{ key }}
          </option>
        </select>
      </label>
    </div>
    <div v-if="actions[actionType] && actions[actionType].hasValue">
      <label>
        <p class="label">Value</p>
        <input
          :value="value"
          type="text"
          required
          class="input"
          @change="onChange" ><br>
        <p class="annotation">${title} and ${url} variables are available.</p>
      </label>
    </div>
    <div>
      <input
        type="submit"
        value="Add"
        class="submit" >
    </div>
  </form>
</template>

<script>
import { detectKeyString } from 'key-string'
import actions from '../content/actions/index'

export default {
  name: 'InputKeySetting',
  data() {
    return {
      keyString: '',
      actionType: '',
      value: '',
      actions
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      this.$emit('on-submit', this.keyString, this.actionType, this.value)
    },

    onKeyDown(e) {
      const keyString = detectKeyString(e)
      if (!keyString.includes('Unknown')) {
        this.keyString = keyString
      }
    },

    onChangeActionType(e) {
      this.actionType = e.target.value
    },

    onChange(e) {
      this.value = e.target.value
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  margin-top: 30px;
  padding: 20px 0;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
  border-radius: 5px;
}
div {
  width: 798px;
  margin: 0 auto;
}
.input {
  height: 20px;
  width: 100%;
  font-size: 1rem;
}
.submit {
  margin-top: 20px;
  padding: 5px 20px;
  border: 2px solid #1565c0;
  border-radius: 5px;
  background-color: #1565c0;
  color: #fff;
}
.label {
  font-size: 1rem;
  margin: 25px 0 10px;
}
.annotation {
  color: #888;
}
</style>
