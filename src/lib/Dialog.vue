<template>
  <Teleport to="body">
    <template v-if="visible">
      <div class="ladder-dialog-overlay"
           @click="onClickOverlay"></div>
      <div class="ladder-dialog-wrapper">
        <div class="ladder-dialog">
          <header>
            <slot name="title"/>
            <span class="ladder-dialog-close"
                  @click="close"></span>
          </header>
          <main>
            <slot name="content"/>
          </main>
          <footer>
            <Button level="main"
                    @click="ok">OK
            </Button>
            <Button @click="cancel">Cancel</Button>
          </footer>
        </div>
      </div>
    </template>
  </Teleport>

</template>

<script lang='ts'>
import Button from './Button.vue';

export default {
  components: {Button},
  props: {
    title:{
      type:String,
      default:'默认标题'
    },
    visible: {
      type: Boolean,
      default: false
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    ok: {
      type: Function
    },
    cancel: {
      type: Function
    }
  },
  setup(props, context,) {
    const close = () => {
      context.emit('update:visible', false);
    };
    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close();
      }
    };
    const ok = () => {
      if (props.ok() && props.ok() !== false) {
        close();
      }
    };
    const cancel = () => {
      context.emit('cancel');
      close();
    };
    return {close, onClickOverlay, ok};
  }
};
</script>

<style lang='scss'>
$radius: 4px;
$border-color: #d9d9d9;
.ladder-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); //上下左右居中
    z-index: 11;
  }

  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }

  > main {
    padding: 12px 16px;
  }

  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }

  &-close {
    position:relative;
    display: inline-block;
    width: 32px;
    height: 32px;
    cursor: pointer;
    &:hover{
      background:#b7c1b6 ;
      border-radius: 32px;
    }
    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 50%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>