import { onMounted, onUnmounted } from "vue";

function useEventListener(target, event, callback){
    onMounted(()=>{target.addEventListener(event, callback)});
    onUnmounted(()=>{target.removeEventListener(event,callback)});
}
