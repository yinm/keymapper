<template>
  <form @submit="onSubmit">
    <div>
      <label>
        <p class="label">Key</p>
        <input
          :value="keyString"
          type="text"
          required
          class="input input-text"
          @keydown="onKeyDown"
        />
      </label>
    </div>
    <div>
      <label>
        <p class="label">Action</p>
        <select
          :value="actionType"
          required
          class="input"
          @change="onChangeActionType"
        >
          <option disabled value=""
>Please select one</option>
          <option v-for="(action, key) in actions" :key="key"
>
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
          class="input input-text"
          @change="onChange"
        /><br />
        <p class="annotation">${title} and ${url} variables are available.</p>
      </label>
    </div>
    <div>
      <input
type="submit" value="Add" class="submit" />
    </div>
  </form>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { detectKeyString } from 'key-string'
import actions from '../content/actions/index'

@Component
export default class InputKeySetting extends Vue {
  keyString: string = ''
  actionType: string = ''
  value: string = ''
  // FIXME: 型を正しくする
  // importの時と名前が同じでややこしい
  actions: any = actions

  onSubmit(e: Event) {
    e.preventDefault()
    this.$emit('on-submit', this.keyString, this.actionType, this.value)
  }

  onKeyDown(e: Event) {
    const keyString = detectKeyString(e)
    if (!keyString.includes('Unknown')) {
      this.keyString = keyString
    }
  }

  onChangeActionType(e: Event) {
    this.actionType = (e.target as HTMLInputElement).value
  }

  onChange(e: Event) {
    this.value = (e.target as HTMLInputElement).value
  }
}
</script>

<style scoped>
form {
  margin-top: 30px;
  margin-bottom: 30px;
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
.input-text {
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
}
.input-text:focus {
  border-color: #1565c0;
}
.submit {
  margin-top: 20px;
  padding: 5px 10px;
  border: 2px solid #1565c0;
  border-radius: 5px;
  background-color: #1565c0;
  color: #fff;
  font-size: 0.9rem;
}
.label {
  font-size: 1rem;
  margin: 25px 0 10px;
}
.annotation {
  color: #888;
}
</style>
