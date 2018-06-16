/**
 * Created by Rivers on 2018/6/16.
 */
Vue.directive('clickoutside', {
    bind: function(el, binding, vnode) {
        function documentHandler(e) {
            if (el.contains(e.target)) {
                return false;
            }
            if (binding.expression) {
                binding.value(e);
            }
        }
        el.__vueClickOutside__ = documentHandler;
        document.addEventListener('click', el.__vueClickOutside__);
    },
    unbind: function(el, binding) {
        document.removeEventListener('click', el.__vueClickOutside__);
        delete el.__vueClickOutside__;
    }
});