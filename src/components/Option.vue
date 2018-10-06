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

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import KeySetting from './KeySetting'
import InputKeySetting from './InputKeySetting'
import Header from './Header'

@Component({
  components: {
    Header,
    InputKeySetting,
    KeySetting
  }
})
export default class Option extends Vue {
  settings: Settings = {
    actionDefinitions: {}
  }

  mounted(): void {
    chrome.storage.sync.get('settings', (items: { settings }) => {
      this.settings = items.settings
    })
  }

  onDelete(keyString: any): void {
    this.$delete(this.settings.actionDefinitions, keyString)
    chrome.storage.sync.set({ settings: this.settings })
  }

  onSubmit(keyString: any, type: string, value: string): void {
    this.$set(this.settings.actionDefinitions, keyString, {
      type: type,
      value: value
    })

    chrome.storage.sync.set({ settings: this.settings })
  }
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
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
  border-radius: 5px;
}
</style>
