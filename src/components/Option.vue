<template>
  <div>
    <Header />
    <main>
      <table>
        <tbody>
        <key-setting
          v-for="keyString in Object.keys(settings.actionDefinitions)"
          :key="keyString"
          :key-string="keyString"
          :action-definitions="settings.actionDefinitions[keyString]"
          @on-delete="onDelete"
        />
        </tbody>
      </table>
      <input-key-setting @on-submit="onSubmit" />
    </main>
  </div>
</template>

<script>
import KeySetting from './KeySetting'
import InputKeySetting from './InputKeySetting'
import Header from './Header'

export default {
  name: 'Option',
  components: {
    Header,
    InputKeySetting,
    KeySetting,
  },
  data() {
    return {
      settings: {
        actionDefinitions: {},
      },
    }
  },
  mounted() {
    chrome.storage.sync.get('settings', ({ settings }) => {
      this.settings = settings
    })
  },
  methods: {
    onDelete(keyString) {
      this.$delete(this.settings.actionDefinitions, keyString)
      chrome.storage.sync.set({ settings: this.settings })
    },

    onSubmit(keyString, type, value) {
      this.$set(
        this.settings.actionDefinitions,
        keyString,
        {
          type: type,
          value: value,
        }
      )

      chrome.storage.sync.set({ settings: this.settings })
    },
  },
}
</script>

<style lang="scss" scoped>
  main {
    max-width: 1200px;
    margin: 0 auto;
  }
  table {
    display: flex;
    background-color: #fff;
    justify-content: space-evenly;
    margin-top: 30px;
    border-collapse: collapse;
  }
</style>
