<template>
  <div>
    <a-tooltip :mouseEnterDelay="0.8" :title="widget.tooltip">
      <a-select 
        ref="select"
        style="min-width: 120px" 
        v-model="value" 
        :size="widget.sizeMode"
        :disabled="isExecuting"
        :dropdownMatchSelectWidth="false"
        @change="actionExecute"
      >
        <a-select-option 
          v-for="(item, index) in widget.options" 
          :key="index" 
          :value="`${item.value}`"
        >{{item.name}}</a-select-option>
      </a-select>
    </a-tooltip>
  </div>
</template>
<script>
import WidgetRunMixin from '../WidgetRunMixin.js' 
import WidgetRunViewerMixin from '../WidgetRunViewerMixin.js' 
export default {
    name : 'WidgetSelect',
    mixins : [WidgetRunMixin, WidgetRunViewerMixin],
    data() {
        return {
            value : `${this.widget.defaultValue}`,
        }
    },
    methods : {
        /**
         * get value of widget
         */
        valueGet() {
            return this.value;
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
            this.value = String(this.content);
        }
    },
}
</script>