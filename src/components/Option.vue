<template>
  <div>
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
  </div>
</template>

<script>
  import KeySetting from './KeySetting'

  export default {
    name: 'option',
    components: {KeySetting},
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
    }
  }
</script>
