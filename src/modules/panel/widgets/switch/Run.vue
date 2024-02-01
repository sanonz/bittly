<template>
  <div>
    <a-tooltip :mouseEnterDelay="0.8" :title="widget.tooltip">
      <a-switch 
        ref="switch"
        v-model="value"
        :size="widget.sizeMode"
        :loading="isExecuting" 
        :checked-children="$t('panel.widgets.switch.on')" 
        :un-checked-children="$t('panel.widgets.switch.off')"
        @change="actionExecute"
      />
    </a-tooltip>
  </div>
</template>
<script>
import WidgetMixin from '../WidgetRunMixin.js' 
import WidgetRunViewerMixin from '../WidgetRunViewerMixin.js' 
export default {
    name : 'WidgetSwitch',
    mixins : [WidgetMixin, WidgetRunViewerMixin],
    data() {
        return {
            value : this.widget.initStatus,
        };
    },
    methods : {
        /**
         * get value of switch
         */
        valueGet() {
            return this.value 
            ? this.widget.valueOn 
            : this.widget.valueOff;
        },

        /**
         * get value map
         * @override
         */
        getVariableMap() {
            let map = {};
            map[this.widget.targetVariable] = 'content';
            return map;
        },

        /**
         * update widget
         * @override
         */
        updateWidget() {
            this.value = this.content;
        }
    },
}
</script>