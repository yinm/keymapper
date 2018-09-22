<template>
  <tr>
    <td>
      <kbd>{{ keyString }}</kbd>
    </td>
    <td>
      {{ actionDefinitions.type }}
    </td>
    <td>
      {{ actionDefinitions.value }}
    </td>
    <td>
      <button @click="onDelete">x</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'KeySetting',
  props: {
    keyString: {
      type: String,
      default: ''
    },
    actionDefinitions: {
      type: Object,
      default: function() {
        return {
          type: '',
          value: ''
        }
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    onDelete() {
      this.$emit('on-delete', this.keyString)
    }
  }
}
</script>

<style lang="scss" scoped>
tr {
  border-top: 1px solid #ddd;
}
td {
  padding: 20px 70px;
  font-size: 1rem;
}
</style>
