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
      <span
        class="delete-button"
        @click="onDelete"
      >
        x
      </span>
    </td>
  </tr>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class KeySetting extends Vue {
  @Prop()
  keyString!: string
  // FIXME: ちゃんとした型にする
  @Prop()
  actionDefinitions!: any

  onDelete(): void {
    this.$emit('on-delete', this.keyString)
  }
}
</script>

<style lang="scss" scoped>
tr {
  border-top: 1px solid #ddd;
}
tr:first-child {
  border-top: none;
}
td {
  padding: 20px 70px;
  font-size: 1rem;
}
.delete-button {
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 300;
}
</style>
