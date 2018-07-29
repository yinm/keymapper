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
      keyString: String,
      actionDefinitions: Object,
    },
    data() {
      return {
      }
    },
    methods: {
      onDelete() {
        this.$emit('on-delete', this.keyString)
      }
    },
  }
</script>
